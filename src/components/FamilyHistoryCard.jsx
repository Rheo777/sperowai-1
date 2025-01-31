import React from 'react';

const FamilyHistoryCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Family History" section="family" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            Object.entries(data).map(([relative, conditions]) => (
              <div key={relative} className="mb-4 last:mb-0">
                <h4 className="font-medium text-gray-800">{relative}</h4>
                {Object.entries(conditions)
                  .filter(([_, value]) => value)
                  .map(([condition]) => (
                    <div key={condition} className="text-gray-600 ml-4">
                      • {condition.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No family history available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FamilyHistoryCard; 