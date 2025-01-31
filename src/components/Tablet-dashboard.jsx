import React, { useState } from 'react';
import TabletHeader from './Tablet-header';
import PerformanceCard from './PerformanceCard';
import PerformanceMetricCard from './PerformanceMetricCard';
import Performance from './Performancepage';
import TreatmentTime from './Treatmenttimepage';

const TabletDashboard = () => {
  const [activeSection, setActiveSection] = useState('performance'); // Default view

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  // Function to render right side content
  const renderContent = () => {
    switch (activeSection) {
      case 'performance':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Overview</h2>
            <Performance />
          </div>
        );
      case 'treatment-time':
        return (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Treatment Time Analysis</h2>
            <TreatmentTime />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <TabletHeader />
      <div className="flex-1 ml-[80px] p-6 md:p-8 lg:p-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-2">Overview of your medical practice</p>
        </div>

        <div className="flex gap-8">
          {/* Left Column - Performance Cards */}
          <div className="w-1/3 space-y-6">
            <PerformanceCard onNavigate={() => handleNavigate('performance')} />
            <PerformanceMetricCard onNavigate={() => handleNavigate('treatment-time')} />
          </div>

          {/* Right Column - Detailed Content */}
          <div className="w-2/3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletDashboard; 