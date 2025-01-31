import React from 'react';

const RadiologyCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Radiology Findings" section="radiology" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            Object.entries(data).map(([study, findings]) => (
              <div key={study} className="mb-4 last:mb-0">
                <h4 className="font-medium text-gray-800">{study.replace(/([A-Z])/g, ' $1').trim()}</h4>
                {Object.entries(findings).map(([finding, details]) => (
                  <div key={finding} className="mt-2">
                    <p className="text-gray-700">{finding.replace(/([A-Z])/g, ' $1').trim()}</p>
                    {Object.entries(details).map(([location, detail]) => (
                      <div key={location} className="ml-4 text-gray-600 text-sm">
                        • {location.replace(/([A-Z])/g, ' $1').trim()}: 
                        {typeof detail === 'object' 
                          ? Object.entries(detail).map(([key, value]) => 
                              ` ${key.replace(/([A-Z])/g, ' $1').trim()}: ${value ? 'Yes' : 'No'}`
                            )
                          : detail ? ' Present' : ' Not Present'
                        }
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No radiology findings available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RadiologyCard; 