import React from 'react';

const AdditionalLinks = () => {
  return (
    <div className="space-y-4">
      {/* Recent Patient Consultations */}
      <div className="bg-white rounded-[20px] p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-green-600">
                <path fill="currentColor" d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Recent Patient Consultations</h3>
              <p className="text-xs text-gray-500">View consultation history</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#F0F7FF] flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#3973EB]">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Common Diseases Treated */}
      <div className="bg-white rounded-[20px] p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFF4E5] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-500">
                <path fill="currentColor" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Common Diseases Treated</h3>
              <p className="text-xs text-gray-500">View disease statistics</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FFF4E5] flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-orange-500">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Success Milestones */}
      <div className="bg-white rounded-[20px] p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8F0FE] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#3973EB]">
                <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Success Milestones</h3>
              <p className="text-xs text-gray-500">View achievements</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-[#3973EB]">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalLinks; 