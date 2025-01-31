import React from 'react';

const ChiefComplaintCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Chief Complaint" section="complaint" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-gray-800 leading-relaxed">{data}</p>
        </div>
      )}
    </div>
  );
};

export default ChiefComplaintCard;