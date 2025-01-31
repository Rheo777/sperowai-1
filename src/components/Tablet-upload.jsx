import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TabletUpload = ({ onFileUpload, onUploadComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      setIsUploading(true);
      onFileUpload(files, setIsUploading);
    }
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl transition-all duration-300 
          ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-400'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".pdf,.docx,.jpg,.jpeg"
        />

        <div className="px-6 py-8">
          {/* Upload Icon and Text */}
          
        </div>

        {/* Upload Progress Overlay */}
        {isUploading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl 
              flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full 
                animate-spin mx-auto mb-3"
              />
              <p className="text-sm text-gray-800 font-medium">Uploading files...</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Help Text */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">
          Maximum file size: 10MB per file
        </p>
      </div>
    </div>
  );
};

export default TabletUpload;
