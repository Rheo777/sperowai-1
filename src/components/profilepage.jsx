import React from 'react';
import { IoArrowBack, IoMoon, IoLogOut } from 'react-icons/io5';
import { FaUserCircle, FaBell, FaChevronRight } from 'react-icons/fa';
import Profile from '../assets/doctor.jpg';
import { profileData, clearProfileData } from '../data/profileData';
import { useNavigate } from 'react-router-dom';
import Landpage from './Landpage';

const ProfilePage = ({ onNavigate }) => {
  const [showLandingPage, setShowLandingPage] = React.useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    onNavigate('home');
  };

  const handleLogout = () => {
    clearProfileData();
    setShowLandingPage(true);
  };

  if (showLandingPage) {
    return <Landpage />;
  }

  const profileInfo = {
    name: profileData.name,
    username: profileData.username,
    image: Profile,
    role: profileData.role
  };

  const menuItems = [
    {
      id: 'theme',
      icon: <IoMoon className="text-gray-600 text-xl" />,
      label: 'Theme',
      value: 'Light',
      hasChevron: true
    },
    
    {
      id: 'cases',
      icon: <FaUserCircle className="text-gray-600 text-xl" />,
      label: 'Completed cases',
      value: '24',
      hasChevron: true
    },

  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[440px] mx-auto">
        {/* Header */}
        <div className="bg-[#3973EB] text-white rounded-b-[15px] shadow-lg">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={handleBack}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <IoArrowBack className="text-white text-xl" />
              </button>
              <h1 className="text-xl font-semibold">Profile</h1>
              <div className="w-10"></div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={profileInfo.image} 
                  alt={profileInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">{profileInfo.name}</h2>
              <p className="text-white/80 text-sm mb-1">@{profileInfo.username}</p>
              <p className="text-white/80 text-sm mb-3">{profileInfo.role}</p>
              
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-4">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md  flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{item.value}</span>
                {item.hasChevron && (
                  <FaChevronRight className="text-gray-400 text-sm" />
                )}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div className="p-4">
            <button 
              onClick={handleLogout}
              className="w-full py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Version Info */}
        <div className="p-4 text-center text-gray-500 text-sm">
          Version 1.0.0
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
