import React from 'react';

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
      <div className="relative bg-white p-5 rounded-lg">
        <button
          className="absolute top-0 right-0 text-xl text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-3xl text-gray-600"
            onClick={onPrev}
            disabled={image.index === 0}
          >
            {'<'}
          </button>
          <img
            src={image.url}
            alt={`Design ${image.index + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <button
            className="text-3xl text-gray-600"
            onClick={onNext}
            disabled={image.index === images.length - 1}
          >
            {'>'}
          </button>
        </div>
        <p className="text-center text-lg">{image.name}</p>
      </div>
    </div>
  );
};

export default ImageModal;