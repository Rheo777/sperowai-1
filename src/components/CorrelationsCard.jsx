import React from 'react';

const CorrelationsCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Clinical Correlations" section="correlations" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100">
          {data && data.length > 0 ? (
            <div className="space-y-4">
              {data.map((correlation, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  {correlation.symptoms && (
                    <div className="mb-2">
                      <h4 className="text-sm text-gray-600 mb-1">Symptoms Correlation</h4>
                      <p className="text-gray-800">{correlation.symptoms}</p>
                    </div>
                  )}
                  {correlation.test_results && (
                    <div className="mb-2">
                      <h4 className="text-sm text-gray-600 mb-1">Test Results Correlation</h4>
                      <p className="text-gray-800">{correlation.test_results}</p>
                    </div>
                  )}
                  {correlation.medications && (
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">Medications Correlation</h4>
                      <p className="text-gray-800">{correlation.medications}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No correlations available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CorrelationsCard; 