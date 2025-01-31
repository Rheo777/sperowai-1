import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Performance from './Performance';

const TabletPerformancePage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 lg:p-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaArrowLeft className="text-gray-600 text-lg" />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Performance Overview</h1>
          <p className="text-gray-500 mt-1">Detailed analysis of your performance metrics</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <Performance />
      </div>
    </div>
  );
};

export default TabletPerformancePage; 