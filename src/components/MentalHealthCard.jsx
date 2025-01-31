import React from 'react';

const MentalHealthCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Mental Health Assessment" section="mental" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            <div className="space-y-4">
              {/* Current Symptoms */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Current Symptoms</h4>
                {Object.entries(data)
                  .filter(([key, value]) => key !== 'Recommendations' && value === true)
                  .map(([symptom]) => (
                    <div key={symptom} className="text-gray-600 ml-4">
                      • {symptom.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
              </div>

              {/* Recommendations */}
              {data.Recommendations && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Recommendations</h4>
                  {Object.entries(data.Recommendations)
                    .filter(([_, value]) => value)
                    .map(([recommendation]) => (
                      <div key={recommendation} className="text-gray-600 ml-4">
                        • {recommendation.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No mental health assessment available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MentalHealthCard; 