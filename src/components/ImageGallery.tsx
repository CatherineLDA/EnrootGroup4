import { useEffect, useState } from 'react';
import { supabaseClient } from '../supabase/SupabaseClient';

const ImageGallery = () => {
  const [images, setImages] = useState<{ url: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch images from Supabase
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
      const imageUrls = filteredData.map((file) => ({
        url: supabaseClient.storage.from('images').getPublicUrl(`public/${file.name}`).data.publicUrl,
        name: file.name,
      })) || [];

      setImages(imageUrls);
    } catch (error) {
      setError('Failed to load images.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch images when component mounts
  useEffect(() => {
    getImages();
  }, []);

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
            <div key={index} className="card card-compact bg-white shadow-xl">
              <figure className="h-64">
                <img
                  src={image.url}
                  alt={`Design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-900">Design {index + 1}</h2> {/* Fixed color */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;