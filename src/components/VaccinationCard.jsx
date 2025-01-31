import React from 'react';

const VaccinationCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Vaccination History" section="vaccination" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            Object.entries(data).map(([vaccine, date]) => (
              <div key={vaccine} className="mb-3 last:mb-0">
                <h4 className="font-medium text-gray-800">{vaccine.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p className="text-gray-600 text-sm">Date: {date}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No vaccination history available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default VaccinationCard; 