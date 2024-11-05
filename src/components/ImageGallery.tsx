import { useEffect, useState } from 'react';
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const ImageGallery = () => {
  const [images, setImages] = useState<{ url: string; name: string }[]>([]); 
  const [error, setError] = useState<string | null>(null); 
  const supabase = useSupabaseClient();

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data, error } = await supabase
          .storage
          .from('images')
          .list('public/');

        if (error) {
          setError(error.message);
          return;
        }

        // Generate public URLs for each image
        const imageUrls = data?.map((file) => ({
           url: supabase.storage.from('images').getPublicUrl(`public/${file.name}`).data.publicUrl,
          name: file.name,
        })) || [];

        setImages(imageUrls); // Update state with the image URLs
      } catch (error) {
        setError('Failed to load images.');
        console.error(error);
      }
    };

    getImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}
      {images.length === 0 ? (
        <p>Loading images...</p> // Display a loading message while fetching images
      ) : (
        images.map((image, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={image.url} alt={image.name} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{image.name}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Vote</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGallery;