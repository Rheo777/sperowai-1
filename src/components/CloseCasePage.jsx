import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import animation1 from '../assets/animation1.gif';

const CloseCasePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] ">
      <div className="max-w-[440px] mx-auto">
        {/* Header */}
        <div className="bg-[#3973EB] text-white rounded-b-[15px] shadow-lg">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <IoArrowBack className="text-white text-xl" />
              </button>
              <h1 className="text-xl font-semibold">Case Closed</h1>
              <div className="w-10"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center">
          {/* Video Animation */}
          <div className="w-64 h-64 mb-6">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={animation1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Case Successfully Closed!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            The patient case has been closed and all records have been updated.
          </p>

          {/* Back to Dashboard Button */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-full max-w-sm bg-[#3973EB] text-white py-3 rounded-xl font-semibold hover:bg-[#2960d8] transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseCasePage; 