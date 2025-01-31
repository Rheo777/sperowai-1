import React from 'react';

const FollowUpPlanCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Follow-up Plan" section="followup" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            {/* Neurosurgery Follow-up */}
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Neurosurgery</h4>
              <p className="text-gray-800">{data.neurosurgery}</p>
            </div>

            {/* Orthopaedics Follow-up */}
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Orthopaedics</h4>
              <p className="text-gray-800">{data.orthopaedics}</p>
            </div>

            {/* Emergency Contact */}
            <div className="pt-2 border-t border-gray-100">
              <h4 className="text-sm text-gray-500 mb-1">Emergency Contact</h4>
              <p className="text-gray-800 font-medium">{data.emergency_contact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FollowUpPlanCard; 