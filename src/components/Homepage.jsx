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

  return (
    <div className="fixed inset-0 flex flex-col">
      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-auto">
        <div className={`min-h-screen bg-[#F7F8F9] pb-28 ${isExiting ? 'animate-fadeOut' : ''} ${isEntering ? 'animate-fadeScale' : ''}`}>
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
              {/* Search and AI Button Section */}
              <div className={`
                w-full 
                ${isTabletOrDesktop 
                  ? 'grid grid-cols-2 gap-8' 
                  : 'flex flex-col items-center'
                } 
                mb-4
              `}>
                <div className="w-full mt-4">
                  <Search />
                </div>
                {isTabletOrDesktop && (
                  <div className="flex items-center justify-center">
                    <AiButton onClick={handleAIClick} />
                  </div>
                )}
              </div>

              {/* Performance Section */}
              <div className="w-full mb-4">
                <Performance />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed AI Button Container - Outside scroll container */}
      {!isTabletOrDesktop && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[130px] z-[9999]">
          <AiButton onClick={handleAIClick} />
        </div>
      )}
    </div>
  );
};

export default HomePage;