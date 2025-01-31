import React from 'react';

const Visualization = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <CardHeader 
        title="Visualization"
        section="visualization"
      />
      
      {!isCollapsed && (
        <div className="p-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="aspect-square w-full bg-white rounded-lg shadow-sm flex items-center justify-center">
              {/* Visualization content */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-3xl">📊</span>
                </div>
                <h3 className="text-base font-medium text-gray-800 mb-1">Data Analysis</h3>
                <p className="text-xs text-gray-500">Visual representation of patient data</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visualization; 