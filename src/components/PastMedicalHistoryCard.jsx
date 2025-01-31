import React from 'react';

const PastMedicalHistoryCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Past Medical History" section="pastMedical" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            {data.conditions?.map((condition, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <div>
                  <p className="text-gray-800">{condition.condition}</p>
                  {condition.details && (
                    <p className="text-gray-600 text-sm mt-1">{condition.details}</p>
                  )}
                  {condition.onset_date && (
                    <p className="text-gray-500 text-sm">Since: {condition.onset_date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PastMedicalHistoryCard; 