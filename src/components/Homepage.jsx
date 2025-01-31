import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../components/Header';
import TabletHeader from './Tablet-header';
import Performance from '../components/Performance';
import Search from '../components/Search';
import AiButton from '../components/AIbutton';
import AIpagemain from './AIpagemain';
import DashboardMain from './DashboardMain';
import NotificationPage from './notificationpage';
import ProfilePage from './profilepage';

const HomePage = ({ fromDashboard }) => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
  const [showAIPage, setShowAIPage] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(!!fromDashboard);

  const handleAIClick = () => {
    setShowAIPage(true);
  };

  const handleNavigate = (page) => {
    if (page === 'dashboard') {
      setShowDashboard(true);
      setShowNotifications(false);
      setShowProfile(false);
      setShowAIPage(false);
    }
    if (page === 'notifications') {
      setShowNotifications(true);
      setShowDashboard(false);
      setShowProfile(false);
      setShowAIPage(false);
    }
    if (page === 'profile') {
      setShowProfile(true);
      setShowDashboard(false);
      setShowNotifications(false);
      setShowAIPage(false);
    }
    if (page === 'home') {
      setShowProfile(false);
      setShowDashboard(false);
      setShowNotifications(false);
      setShowAIPage(false);
    }
  };

  // Handle different pages for both mobile and desktop
  if (showAIPage) {
    return <AIpagemain onBack={() => setShowAIPage(false)} />;
  }

  if (showDashboard) {
    return <DashboardMain onNavigate={handleNavigate} />;
  }

  if (showNotifications) {
    return <NotificationPage onBack={() => handleNavigate('home')} />;
  }

  if (showProfile) {
    return <ProfilePage onNavigate={handleNavigate} />;
  }

  // Main homepage layout with responsive design
  return (
    <div className={`fixed inset-0 w-full h-full overflow-auto ${isExiting ? 'animate-fadeOut' : ''} ${isEntering ? 'animate-fadeScale' : ''}`}>
      <div className="min-h-screen bg-[#F7F8F9] pb-20">
        {/* Conditional Header */}
        {isTabletOrDesktop ? (
          <TabletHeader onNavigate={handleNavigate} />
        ) : (
          <div className="w-full min-w-[320px] max-w-[440px] mx-auto">
            <MobileHeader onNavigate={handleNavigate} />
          </div>
        )}
        
        {/* Main Content */}
        <div className={`${isTabletOrDesktop ? 'ml-[80px]' : ''}`}>
          <div className={`${isTabletOrDesktop ? 'max-w-[1200px] px-8' : 'max-w-[440px] px-4'} mx-auto`}>
            {/* Performance Section */}
            <div className="w-full mb-8">
              <Performance />
            </div>

            {/* Replace ConsultationCard with Search */}
            <div className={`w-full ${isTabletOrDesktop ? 'grid grid-cols-2 gap-8' : 'flex justify-center -ml-2'}`}>
              <Search />
              {isTabletOrDesktop && (
                <div className="flex items-center justify-center">
                  <AiButton onClick={handleAIClick} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile AI Button */}
        {!isTabletOrDesktop && (
          <div className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center pb-8">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[130px]">
              <AiButton onClick={handleAIClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;