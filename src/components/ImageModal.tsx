interface Image {
  url: string;
  name: string;
  index: number;
}

interface ImageModalProps {
  image: Image;
  images: Image[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal = ({ image, images, onClose, onPrev, onNext }: ImageModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white p-5 rounded-lg max-w-[90vw] max-h-[90vh] overflow-auto">
        <button
          className="absolute top-3 right-3 text-xl text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-between items-center mb-4 space-x-4"> {/* Added space between the arrows and image */}
          <button
            className="text-3xl text-gray-600 px-4 py-2"
            onClick={onPrev}
            disabled={image.index === 0}
          >
            {'<'}
          </button>
          <div className="flex justify-center items-center overflow-hidden">
            <img
              src={image.url}
              alt={`Design ${image.index + 1}`}
              className="max-w-full max-h-[70vh] object-contain" // Ensures image doesn't overflow and maintains aspect ratio
            />
          </div>
          <button
            className="text-3xl text-gray-600 px-4 py-2"
            onClick={onNext}
            disabled={image.index === images.length - 1}
          >
            {'>'}
          </button>
        </div>
        <p className="text-center text-lg text-gray-600 font-semibold">Design {image.index + 1}</p>
      </div>
    </div>
  );
};

export default ImageModal;