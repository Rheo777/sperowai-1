import React from 'react';

const SummaryCard = ({ data, isCollapsed, CardHeader }) => {
  const formatGender = (gender) => {
    return gender ? gender.toLowerCase() : '';
  };

  const getSummaryText = () => {
    const demographics = data.patient_demographics || {};
    const name = demographics.name || 'Patient';
    const age = demographics.age || '';
    const gender = formatGender(demographics.gender || '');
    const chiefComplaint = data.chief_complaint || '';
    const presentIllness = data.history_of_present_illness || '';

    let summaryText = name;
    if (age) summaryText += `, a ${age}-year-old`;
    if (gender) summaryText += ` ${gender}`;
    if (chiefComplaint) summaryText += `, presented with ${chiefComplaint}`;
    if (presentIllness) summaryText += `. ${presentIllness}`;

    return summaryText;
  };

  return (
    <div className="mb-6">
      <CardHeader title="Summary" section="summary" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-gray-800 leading-relaxed">
            {getSummaryText()}
          </p>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;