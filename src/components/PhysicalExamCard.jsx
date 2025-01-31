import React from 'react';

const PhysicalExamCard = ({ data, isCollapsed, CardHeader }) => {
  const renderFindings = () => {
    if (!data) return null;

    return Object.entries(data).map(([system, findings], index) => (
      <div key={index} className="mb-4 last:mb-0">
        <h4 className="text-gray-700 font-medium mb-2">
          {system.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h4>
        <div className="pl-4 text-gray-600">
          {typeof findings === 'string' ? (
            <p>{findings}</p>
          ) : (
            Object.entries(findings).map(([key, value], i) => (
              <div key={i} className="mb-1">
                <span className="text-gray-500">{key.replace(/_/g, ' ')}: </span>
                <span>{value}</span>
              </div>
            ))
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="mb-6">
      <CardHeader title="Physical Examination" section="physical" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {renderFindings()}
        </div>
      )}
    </div>
  );
};

export default PhysicalExamCard; 