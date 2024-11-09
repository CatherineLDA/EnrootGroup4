import { useEffect, useState } from 'react';
import { supabaseClient } from '../supabase/SupabaseClient';
import ImageModal from './ImageModal'; // Import the modal component

// Define the type for an image
interface Image {
  url: string;
  name: string;
  index: number;
}

const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null); // For managing selected image
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch images from Supabase
  const getImages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .storage
        .from('images')
        .list('public/');

      if (error) {
        setError(error.message);
        return;
      }

      // Filter out placeholder files or any file that doesn't need to be displayed
      const filteredData = data?.filter((file) => file.name !== '.emptyFolderPlaceholder') || [];

      // Generate public URLs for each image
      const imageUrls = filteredData.map((file, index) => ({
        url: supabaseClient.storage.from('images').getPublicUrl(`public/${file.name}`).data.publicUrl,
        name: file.name,
        index: index, // Store index to easily identify the image
      })) || [];

      setImages(imageUrls);
    } catch (error) {
      setError('Failed to load images.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  // Open modal and set the selected image
  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Show the previous image
  const handlePrev = () => {
    if (selectedImage && selectedImage.index > 0) {
      setSelectedImage(images[selectedImage.index - 1]);
    }
  };

  // Show the next image
  const handleNext = () => {
    if (selectedImage && selectedImage.index < images.length - 1) {
      setSelectedImage(images[selectedImage.index + 1]);
    }
  };

  return (
    <div className="mt-10 max-w-screen-lg mx-auto px-4">
      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && images.length === 0 && (
        <p className="text-center">No images found in the gallery.</p>
      )}
      {!loading && !error && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="card card-compact bg-white shadow-xl cursor-pointer"
              onClick={() => openModal(image)} // Open modal on click
            >
              <figure className="h-64">
                <img
                  src={image.url}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-900">Design {index + 1}</h2>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for viewing full image */}
      {isModalOpen && selectedImage && (
        <ImageModal
          image={selectedImage}
          images={images}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default ImageGallery;