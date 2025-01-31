import React from 'react';

const TreatmentPlanCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Treatment Plan" section="treatment" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            {/* Surgical Plan */}
            <div>
              <h4 className="text-gray-700 font-medium mb-3">Surgical Plan</h4>
              <div className="space-y-2">
                {data.surgical.map((procedure, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="text-gray-700">{procedure}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div>
              <h4 className="text-gray-700 font-medium mb-3">Medications</h4>
              <div className="space-y-2">
                {data.medications.map((medication, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <p className="text-gray-700">{medication}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentPlanCard;