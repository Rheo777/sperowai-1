import React from 'react';
import { FaUserFriends } from 'react-icons/fa';

const PatientAnalyticsCard = ({ onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[20px] p-5 mb-4 hover:shadow-md transition-all duration-300 relative cursor-pointer"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#EBF3FF] rounded-full flex items-center justify-center">
            <FaUserFriends className="text-blue-500 text-lg" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Patient Analytics</h2>
            <p className="text-xs text-gray-500">Patient statistics</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Total:</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">1,234</span>
            <span className="text-xs text-gray-500 ml-1 mr-4">patients</span>
          </div>
        </div>

        <div className="h-8 w-[1px] bg-gray-200"></div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Recovery:</span>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">95</span>
            <span className="text-sm text-gray-500 ml-1">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAnalyticsCard; 