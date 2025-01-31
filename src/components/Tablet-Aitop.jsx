import React, { useRef, useState } from 'react';
import profileImage from '../assets/doctor.jpg'; // Replace with your actual image path
import { FaTimes, FaCamera, FaImage, FaFile } from 'react-icons/fa'; // Import the cross icon, camera icon, and image icon from react-icons
import AIpageB from './AIpage-Middle'; // Import the AIAnalysisPrompt component
import { motion } from 'framer-motion';

const AIpage = ({ uploadedFiles, setUploadedFiles, onFileRemove, onClose, onUploadComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

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
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (file) => {
    URL.revokeObjectURL(file.url);
    onFileRemove(file);
  };

  const handleUpload = () => {
    if (uploadedFiles.length > 0) {
      onUploadComplete(); // This will trigger navigation to the analysis page
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-start px-4 py-6 relative">
      {/* Profile and Header Section */}
      <div className="w-full flex items-center justify-between mb-8">
        <img
          className="w-[54px] h-[54px] rounded-full"
          src={profileImage}
          alt="Profile"
        />
        <div className="w-32 h-[47px] px-[27px] py-3.5 bg-white rounded-[60px] shadow-[0px_4px_25.1px_rgba(217,225,243,1)] flex justify-center items-center">
          <div className="text-[#3973eb] text-base font-semibold ">
            AI Now
          </div>
        </div>
        
      </div>

      {/* AI Analysis Prompt Section */}
      <AIpageB />

      {/* Upload Options Section */}
      <div className="w-full max-w-3xl mt-8 space-y-6">
        {/* Upload Options */}
        <div className="grid grid-cols-3 gap-4">
          {/* Files Option */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaFile className="text-[#3973eb] text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Files</span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInput}
              className="hidden"
              multiple
              accept=".pdf,.docx,.jpg,.jpeg"
            />
          </div>

          {/* Camera Option */}
          <div 
            onClick={() => cameraInputRef.current?.click()}
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaCamera className="text-[#3973eb] text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Camera</span>
            <input
              type="file"
              ref={cameraInputRef}
              onChange={handleFileInput}
              className="hidden"
              accept="image/*"
              capture="environment"
            />
          </div>

          {/* Gallery Option */}
          <div 
            onClick={() => galleryInputRef.current?.click()}
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <FaImage className="text-[#3973eb] text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Gallery</span>
            <input
              type="file"
              ref={galleryInputRef}
              onChange={handleFileInput}
              className="hidden"
              multiple
              accept="image/*"
            />
          </div>
        </div>

        {/* Uploaded Files Preview */}
        {uploadedFiles.length > 0 && (
          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-700">Uploaded Files</h4>
              <span className="text-xs text-gray-500">{uploadedFiles.length} files</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="relative flex-shrink-0 group">
                  {file.url ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-[60px] h-[60px] object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px] bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                      <span className="text-xs font-medium text-gray-600">
                        {file.name.split('.').pop().toUpperCase()}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => handleRemoveFile(file)}
                    className="absolute -top-2 -right-2 bg-white rounded-full w-6 h-6 flex items-center justify-center shadow-md opacity-100 hover:bg-gray-100"
                  >
                    <FaTimes className="text-gray-500 text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload Button */}
        {uploadedFiles.length > 0 && (
          <button
            onClick={onUploadComplete}
            className="w-full py-4 bg-[#3973eb] text-white rounded-xl font-semibold
              hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default AIpage;
