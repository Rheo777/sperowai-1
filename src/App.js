import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import TabletHomepage from './components/Tablet-homepage';
import TabletHeader from './components/Tablet-header';
import TabletSummaryPage from './components/Tablet-SummaryPage';
import TabletDashboard from './components/Tablet-dashboard';
import TabletProfile from './components/Tablet-profile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Mobile View */}
      <div className="block md:hidden">
        <HomePage />
      </div>

      {/* Tablet/Desktop View */}
      <div className="hidden md:block">
        <Routes>
          <Route path="/" element={<TabletHomepage />} />
          <Route path="/dashboard" element={<TabletDashboard />} />
          <Route path="/profile" element={<TabletProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;