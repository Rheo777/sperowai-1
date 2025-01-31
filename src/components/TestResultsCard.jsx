import React from 'react';

const TestResultsCard = ({ data, isCollapsed, CardHeader }) => {
  const renderTests = () => {
    if (!data || !data.length) return null;

    return data.map((test, index) => (
      <div key={index} className="border-b border-gray-100 last:border-0 py-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">{test.test_name}</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{test.result}</span>
            {test.unit && <span className="text-gray-500 text-sm">{test.unit}</span>}
          </div>
        </div>
        {test.reference_range && (
          <div className="text-sm text-gray-500 mt-1">
            Reference: {test.reference_range}
          </div>
        )}
        {test.interpretation && (
          <div className="text-sm text-gray-600 mt-1 italic">
            {test.interpretation}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="mb-6">
      <CardHeader title="Test Results" section="tests" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-1">
            {renderTests()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResultsCard; 