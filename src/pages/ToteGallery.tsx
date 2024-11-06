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
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm onUploadSuccess={handleUploadSuccess} />
      <ImageGallery />
    </div>
  );
};

export default ToteGallery;