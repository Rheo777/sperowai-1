import React from 'react';

const Dashboard = ({ onNavigate }) => {
  const handleHomeClick = () => {
    // Simply navigate back to home without animation
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] animate-slideUp">
      {/* ... rest of your dashboard content ... */}
      
      {/* Navigation buttons */}
      <button onClick={handleHomeClick}>
        Back to Home
      </button>
    </div>
  );
};

export default Dashboard; 