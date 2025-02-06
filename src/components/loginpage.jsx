import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoArrowBack } from 'react-icons/io5';
import HomePage from './Homepage';
import Landpage from './Landpage';
import SignupPage from './signuppage';
import TabletHomepage from './Tablet-homepage';
import { updateProfileData } from '../data/profileData';
import { setToken } from '../utils/auth';
import API_ENDPOINTS from '../config/api';

const SperowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={32} 
    height={32} 
    viewBox="0 0 24 24"
    className="text-[#3973EB]"
  >
    <path 
      fill="currentColor" 
      d="m19.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M15 21.538l-6-14L6.66 13H1v-2h4.34L9 2.461l6 14L17.34 11H23v2h-4.34z"
    />
  </svg>
);

const LoginPage = () => {
  const [showHome, setShowHome] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrDesktop = window.matchMedia('(min-width: 780px)').matches;

  if (showHome) {
    return isTabletOrDesktop ? <TabletHomepage /> : <HomePage />;
  }

  if (showLanding) {
    return <Landpage />;
  }

  if (showSignup) {
    return <SignupPage />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Login response:', data); // Debug log

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store JWT token
      setToken(data.token);
      
      // Update user profile data with only the data we receive
      updateProfileData({
        username: username, // We know the username from input
        // Only add other fields if they exist in the response
        ...(data.name && { name: data.name }),
        ...(data.role && { role: data.role })
      });

      setShowHome(true);
    } catch (err) {
      console.error('Login error:', err); // Debug log
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Back Button */}
      <button 
        onClick={() => setShowLanding(true)}
        className="p-4"
      >
        <IoArrowBack className="text-gray-600 text-xl" />
      </button>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <SperowIcon />
              <span className="text-2xl font-bold text-[#3973EB]">Sperow</span>
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to continue to your account
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg shadow-blue-100/50 sm:rounded-xl sm:px-10">
            {error && (
              <div className="mb-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#3973EB] focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#3973EB] hover:bg-[#3973EB]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                
              </div>

              <div className="mt-6">
                
              </div>
            </div>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setShowSignup(true)}
                className="text-[#3973EB] font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
