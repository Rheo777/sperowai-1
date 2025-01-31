import React from 'react';

const VitalSignsCard = ({ data, isCollapsed, CardHeader }) => {
  const formatValue = (value) => {
    return value.replace('@RA', '');
  };

  return (
    <div className="mb-6">
      <CardHeader title="Vital Signs" section="vitals" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            {/* Initial Vitals */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <h4 className="text-gray-700 font-medium">Initial ({data.initial.date})</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(data.initial).map(([key, value]) => {
                  if (key === 'date') return null;
                  return (
                    <div key={key} className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm text-gray-500 mb-1">
                        {key.toUpperCase()}
                      </p>
                      <p className="font-medium text-gray-800">
                        {formatValue(value)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Latest Vitals */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h4 className="text-gray-700 font-medium">Latest ({data.latest.date})</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(data.latest).map(([key, value]) => {
                  if (key === 'date') return null;
                  return (
                    <div key={key} className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm text-gray-500 mb-1">
                        {key.toUpperCase()}
                      </p>
                      <p className="font-medium text-gray-800">
                        {formatValue(value)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VitalSignsCard;
