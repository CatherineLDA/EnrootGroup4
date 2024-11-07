import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";

const ToteGallery = () => {
  const handleUploadSuccess = () => {
    // Trigger a re-fetch of images after upload
    const event = new CustomEvent('image-uploaded');
    window.dispatchEvent(event); // Use a custom event to notify that the image is uploaded
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto mt-5 mb-10 flex-grow">
        <UploadForm onUploadSuccess={handleUploadSuccess} />
        <ImageGallery />
      </div>
    </div>
  );
};

export default ToteGallery;