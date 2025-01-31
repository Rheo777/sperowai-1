import React from 'react';

const SpecialistConsultationsCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Specialist Consultations" section="specialists" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100">
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.map((consultation, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">{consultation.specialist_name}</h4>
                      <p className="text-sm text-gray-600">{consultation.specialist_referral}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No specialist consultations scheduled</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecialistConsultationsCard; 