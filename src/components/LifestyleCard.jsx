import React from 'react';

const LifestyleCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Lifestyle Factors" section="lifestyle" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            <div className="space-y-4">
              {Object.entries(data)
                .filter(([key]) => key !== 'Diet')
                .map(([factor, value]) => (
                  <div key={factor} className="border-b pb-2 last:border-0">
                    <h4 className="text-gray-600 text-sm">{factor.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <p className="text-gray-800">{value}</p>
                  </div>
                ))}
              
              {/* Diet Section */}
              {data.Diet && (
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Diet</h4>
                  {Object.entries(data.Diet)
                    .filter(([_, value]) => value)
                    .map(([habit]) => (
                      <div key={habit} className="text-gray-600 ml-4">
                        • {habit.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No lifestyle information available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LifestyleCard; 