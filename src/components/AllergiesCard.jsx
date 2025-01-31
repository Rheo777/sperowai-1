import React from 'react';

const AllergiesCard = ({ data, isCollapsed, CardHeader }) => {
  return (
    <div className="mb-6">
      <CardHeader title="Allergies" section="allergies" />
      {!isCollapsed && (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {data && Object.keys(data).length > 0 ? (
            Object.entries(data).map(([allergen, reactions]) => (
              <div key={allergen} className="mb-4 last:mb-0">
                <h4 className="font-medium text-gray-800">{allergen}</h4>
                {Object.keys(reactions)
                  .filter(reaction => reactions[reaction])
                  .map(reaction => (
                    <div key={reaction} className="text-gray-600 ml-4">
                      • {reaction.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No allergies recorded</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllergiesCard; 