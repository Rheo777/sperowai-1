import React from 'react';

const LabResultsCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Lab Results" section="labs" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-8">
            {/* CBC Timeline */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Complete Blood Count</h4>
              <div className="space-y-6">
                {data.cbc.map((result, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-blue-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100">
                      <div className="w-2 h-2 rounded-full bg-blue-500 m-1"></div>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-blue-600">{result.date}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500">WBC Count</p>
                        <p className="font-medium text-gray-800">{result.wbc_count}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500">Hemoglobin</p>
                        <p className="font-medium text-gray-800">{result.hemoglobin}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500">Platelet Count</p>
                        <p className="font-medium text-gray-800">{result.platelet_count}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Renal Profile Timeline */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Renal Profile</h4>
              <div className="space-y-6">
                {data.renal_profile.map((result, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-green-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-100">
                      <div className="w-2 h-2 rounded-full bg-green-500 m-1"></div>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-green-600">{result.date}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500">Creatinine</p>
                        <p className="font-medium text-gray-800">{result.creatinine}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-sm text-gray-500">Blood Urea</p>
                        <p className="font-medium text-gray-800">{result.blood_urea}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imaging Results */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Imaging Results</h4>
              <div className="space-y-4">
                {data.imaging.map((result, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-purple-100">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-100">
                      <div className="w-2 h-2 rounded-full bg-purple-500 m-1"></div>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-purple-600">{result.date}</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h5 className="font-medium text-gray-800 mb-2">
                        {result.ct_brain ? 'CT Brain' : 
                         result.ct_chest ? 'CT Chest' : 
                         result.ct_spine ? 'CT Spine' : 'Other'}
                      </h5>
                      <p className="text-gray-600">
                        {result.ct_brain || result.ct_chest || result.ct_spine}
                      </p>
                    </div>
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

export default LabResultsCard;