import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterOption = ({ label }) => (
  <button className="w-full py-2 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    {label}
  </button>
);

const Filter = ({ showFilter, setShowFilter }) => {
  return (
    <div className="relative">
      {!showFilter && (
        <button
          onClick={() => setShowFilter(true)}
          className="flex-shrink-0 p-2 rounded-xl transition-all flex items-center justify-center bg-white text-gray-600 hover:bg-gray-50"
        >
          <FaFilter className="text-sm" />
        </button>
      )}

      {showFilter && (
        <>
          {/* Semi-transparent overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            style={{ zIndex: 9999 }}
            onClick={() => setShowFilter(false)}
          />
          
          {/* Filter Panel */}
          <div 
            className="fixed inset-0 flex items-start justify-center" 
            style={{ zIndex: 10000 }}
          >
            <div className="w-[340px] mt-20 bg-white rounded-xl shadow-xl">
              {/* Apply Filter Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <button className="text-[#3973EB] text-sm font-medium flex items-center gap-2">
                  Apply Filter
                  <FaFilter className="text-xs" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Report Type Section */}
              <div className="px-4 pb-4">
                <h3 className="text-sm text-[#3973EB] font-medium mb-2">Report Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <FilterOption label="X-Rays" />
                  <FilterOption label="MRI" />
                  <FilterOption label="CT Scan" />
                  <FilterOption label="Blood Test" />
                  <FilterOption label="EKG" />
                </div>
              </div>

              {/* Clinical Findings Section */}
              <div className="px-4 pb-4">
                <h3 className="text-sm text-[#3973EB] font-medium mb-2">Clinical Findings</h3>
                <div className="space-y-1">
                  <FilterOption label="Normal Findings" />
                  <FilterOption label="Abnormal Findings" />
                </div>
                <button className="mt-3 w-full py-2 text-sm text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  Others
                </button>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 flex gap-3">
                <button 
                  onClick={() => setShowFilter(false)}
                  className="flex-1 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button 
                  className="flex-1 py-2 text-sm text-white bg-[#3973EB] rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter; 