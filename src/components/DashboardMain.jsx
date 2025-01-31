import React, { useState } from 'react';
import { FaHome, FaUserMd, FaClock, FaCalendarCheck } from 'react-icons/fa';
import DashboardHeader from './Dashboard-header';
import PerformanceCard from './PerformanceCard';
import AverageTimeCard from './AverageTimeCard';
import PerformanceGrowth from './PerformanceGrowth';
import HomePage from './Homepage';
import TreatmentTimePage from './Treatmenttimepage';

const DashboardMain = ({ onNavigate }) => {
  const [showPerformance, setShowPerformance] = useState(false);
  const [showTreatmentTime, setShowTreatmentTime] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleNavigate = (page) => {
    if (page === 'performance') {
      setShowPerformance(true);
    } else if (page === 'treatment-time') {
      setShowTreatmentTime(true);
    } else if (page === 'dashboard') {
      setShowPerformance(false);
      setShowTreatmentTime(false);
    } else if (page === 'home') {
      setIsExiting(true);
      setTimeout(() => {
        setShowHome(true);
      }, 300);
    } else {
      onNavigate(page);
    }
  };

  const stats = [
    { icon: FaUserMd, title: "Total Patients", value: "1,234", trend: "+12.5%" },
    { icon: FaClock, title: "Avg Treatment Time", value: "18 min", trend: "-5.2%" },
    { icon: FaCalendarCheck, title: "Completed Cases", value: "892", trend: "+8.1%" }
  ];

  if (showHome) {
    return <HomePage fromDashboard={true} />;
  }

  if (showPerformance) {
    return <PerformanceGrowth onNavigate={handleNavigate} />;
  }

  if (showTreatmentTime) {
    return <TreatmentTimePage onNavigate={handleNavigate} />;
  }

  return (
    <div className={`min-h-screen bg-[#F7F8F9] ${isExiting ? 'animate-fadeOut' : ''}`}>
      <DashboardHeader onNavigate={handleNavigate} />
      <div className="px-4 w-full max-w-[440px] mx-auto mt-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-4 mb-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-[20px] p-4 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <stat.icon className="text-blue-500 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <PerformanceCard onNavigate={handleNavigate} />
        <AverageTimeCard onClick={() => handleNavigate('treatment-time')} />
      </div>
    </div>
  );
};

export default DashboardMain; 