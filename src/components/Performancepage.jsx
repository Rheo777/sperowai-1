import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import PerformanceGrowth from './PerformanceGrowth';
import PerformanceGraph from './PerformanceGraph';

const PerformancePage = ({ onNavigate, isTabletView = false }) => {
  // If it's tablet/desktop view, show modified layout
  if (isTabletView) {
    return (
      <div className="space-y-8">
        {/* Performance Growth Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerformanceGrowth />
          <PerformanceGraph />
        </div>
      </div>
    );
  }

  // Mobile view
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      {/* Back Button - Only for mobile */}
      

      <div className="space-y-6">
        <PerformanceGrowth />
      </div>
    </div>
  );
};

export default PerformancePage; 