import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg font-medium transition-colors
                ${!isDashboard ? 'bg-gray-100 text-gray-800' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard"
              className={`px-4 py-2 rounded-lg font-medium transition-colors
                ${isDashboard ? 'bg-[#3973EB] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {isDashboard && (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Dashboard
                </motion.div>
              )}
              {!isDashboard && "Dashboard"}
            </Link>
          </div>
          
          {/* Add any additional header content here */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;