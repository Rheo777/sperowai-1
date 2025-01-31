import React from 'react';

const ReasonCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Reason for Visit" section="reason" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div>
              <h4 className="text-gray-600 text-sm mb-1">Chief Complaint</h4>
              <p className="text-gray-800">{data.chief_complaint}</p>
            </div>
            <div>
              <h4 className="text-gray-600 text-sm mb-1">History of Present Illness</h4>
              <p className="text-gray-800">{data.history_of_present_illness}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReasonCard; 