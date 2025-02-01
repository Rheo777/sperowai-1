import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import HomePage from './Homepage';

const CloseCase = () => {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleFinish = () => {
    setShowHomePage(true);
  };

  if (showHomePage) {
    return <HomePage />;
  }

  return (
    <div className="h-screen bg-white flex flex-col items-center overflow-hidden mt-0">
      {/* Back Button and Title */}
      <div className="w-full max-w-md pt-6 flex items-center justify-between px-4">
        <button 
          onClick={() => window.history.back()}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <IoArrowBack className="text-[#3973EB] text-xl" />
        </button>
        <div className="bg-white shadow-sm rounded-full px-6 py-2">
          <span className="text-[#3973EB] font-medium">AI Report</span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-between w-full">
        {/* Top Section */}
        <div className="w-full flex flex-col items-center pt-16 px-4">
          {/* Status Message */}
          <div className="bg-gray-50 rounded-3xl px-8 py-4 mb-6">
            <h2 className="text-[#3973EB] text-lg font-medium text-center">
              This Case is Closed and Archived!<br />
            </h2>
          </div>

          {/* Lottie Animation */}
          <div className="w-32 h-32 mb-8">
            <DotLottieReact
              src="https://lottie.host/5ea0465e-6797-4bda-99ab-1733f0f0ade2/G8L6efQ4gB.lottie"
              loop
              autoplay
            />
          </div>

          {/* Message */}
          <p className="text-gray-500 text-center">
            All set! Ready to move on to the next analysis?
          </p>
        </div>

        {/* Bottom Success Box */}
        <div className="w-full bg-[#3973EB] rounded-t-[15px] py-8 px-4">
          <div className="max-w-md mx-auto text-center text-white">
            <h3 className="text-xl font-medium mb-2">Fantastic Work, Doctor!</h3>
           
            <button 
              onClick={handleFinish}
              className="w-48 py-3 bg-white text-[#3973EB] font-medium rounded-xl hover:bg-opacity-90 transition-colors"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseCase;
