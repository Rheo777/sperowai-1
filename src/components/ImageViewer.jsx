import React from 'react';
import { IoClose } from 'react-icons/io5';

const ImageViewer = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100000] bg-black/90 flex items-center justify-center animate-fadeIn">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <IoClose className="text-3xl" />
      </button>

      {/* Image */}
      <div className="w-full h-full p-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Full screen view"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageViewer; 