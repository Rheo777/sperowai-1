import React, { useState } from 'react';
import AIpage from './AIpage-Top';
import AIpageB from './AIpage-Middle';
import UploadCard from './upload';
import Analysispage from './Analysispage';
import Homepage from './Homepage';

const AIpagemain = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [backToHome, setBackToHome] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files, setUploadingState) => {
    const newFiles = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      name: file.name,
      setUploading: setUploadingState
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleFileRemove = (file) => {
    setUploadedFiles(prev => {
      const newFiles = prev.filter(f => f.id !== file.id);
      if (newFiles.length === 0) {
        file.setUploading(false);
      }
      return newFiles;
    });
    URL.revokeObjectURL(file.url);
  };

  const handleUploadComplete = () => {
    setTimeout(() => {
      setShowAnalysis(true);
    }, 1000);
  };

  const handleCancelAnalysis = () => {
    setShowAnalysis(false);
  };

  const handleClose = () => {
    setBackToHome(true);
  };

  if (backToHome) {
    return <Homepage />;
  }

  return (
    <div className="fixed inset-0 bg-[#f5f5f5] animate-fadeIn">
      {!showAnalysis ? (
        <div className="h-full flex flex-col animate-slideUp">
          <div className="w-full">
            <AIpage 
              uploadedFiles={uploadedFiles} 
              setUploadedFiles={setUploadedFiles}
              onFileRemove={handleFileRemove}
              onClose={handleClose}
            />
          </div>
          <div className="w-full px-4">
            <UploadCard 
              onFileUpload={handleFileUpload}
              onUploadComplete={handleUploadComplete}
            />
          </div>
        </div>
      ) : (
        <Analysispage onCancel={handleCancelAnalysis} />
      )}
    </div>
  );
};

export default AIpagemain;
