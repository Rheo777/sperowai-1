import React from 'react';
import { FaClock } from 'react-icons/fa';

const PerformanceMetricCard = ({ onNavigate }) => {
  return (
    <div 
      onClick={() => onNavigate('treatmentTime')}
      className="bg-white rounded-[20px] p-5 mb-4 hover:shadow-md transition-all duration-300 relative cursor-pointer"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F3E8FF] rounded-full flex items-center justify-center">
            <FaClock className="text-purple-500 text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Treatment Time</h2>
            <p className="text-xs text-gray-500">Average duration</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Average:</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">42</span>
            <span className="text-sm text-gray-500 ml-1">min</span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-gray-200"></div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Target:</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">35</span>
            <span className="text-sm text-gray-500 ml-1">min</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetricCard; 