import { useEffect, useState } from 'react';
import { supabaseClient } from '../supabase/SupabaseClient';

const ImageGallery = () => {
  const [images, setImages] = useState<{ url: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Function to fetch images from Supabase
  const getImages = async () => {
    try {
      setLoading(true); // Set loading to true when fetching images
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
      const imageUrls = filteredData?.map((file) => ({
        url: supabaseClient.storage.from('images').getPublicUrl(`public/${file.name}`).data.publicUrl,
        name: file.name,
      })) || [];

      setImages(imageUrls); // Update state with the image URLs
    } catch (error) {
      setError('Failed to load images.');
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  // Fetch images when component mounts
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="mt-10">
      {loading && <p className="text-center">Loading images...</p>} {/* Display loading message while fetching */}
      
      {/* If there's an error, display the error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Only render the gallery if images are available */}
      {!loading && !error && images.length === 0 && (
        <p className="text-center">No images found in the gallery.</p>
      )}

      {/* Only render the gallery if images are available */}
      {!loading && !error && images.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={image.url} alt={"Design ${index + 1}"} className="w-full h-64 object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Design {index + 1}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;