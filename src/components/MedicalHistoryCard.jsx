import React from 'react';

const MedicalHistoryCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Medical History" section="history" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            {Object.entries(data).map(([condition, details]) => {
              if (condition === 'no_known_allergies') {
                return details ? (
                  <div key={condition} className="text-gray-600">
                    No Known Allergies
                  </div>
                ) : null;
              }
              
              return (
                <div key={condition} className="border-b border-gray-100 last:border-0 pb-4">
                  <h4 className="font-medium text-gray-800 capitalize">
                    {condition.replace(/_/g, ' ')}
                  </h4>
                  <div className="mt-2 space-y-1">
                    {details.since && (
                      <p className="text-gray-600">
                        <span className="text-gray-500">Since:</span> {details.since}
                      </p>
                    )}
                    {details.medication && (
                      <p className="text-gray-600">
                        <span className="text-gray-500">Medication:</span> {details.medication}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalHistoryCard;