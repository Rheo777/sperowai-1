import React from 'react';

const DiagnosesCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Diagnoses" section="diagnoses" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-3">
            {data.map((diagnosis, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-sm text-blue-600 font-medium">
                  {index + 1}
                </span>
                <p className="text-gray-700">{diagnosis}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosesCard;