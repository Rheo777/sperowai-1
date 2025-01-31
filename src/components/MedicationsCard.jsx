import React from 'react';

const MedicationsCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Current Medications" section="medications" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            {data.map((medication, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{medication.name}</h4>
                    <p className="text-gray-600">
                      {medication.dosage} - {medication.frequency}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {medication.duration || 'Ongoing'}
                  </span>
                </div>
                {medication.purpose && (
                  <p className="text-sm text-gray-600 mt-2">
                    Purpose: {medication.purpose}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationsCard; 