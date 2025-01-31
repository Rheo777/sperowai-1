import React, { useState } from 'react';
import PatientDetails from './PatientDetails';
import Chat from './Chat';
import FollowupPage from './followuppage';
import TabletCloseCase from './Tablet-closecase';
import Reports from './Reports';
import ConfirmationPopup from './ConfirmationPopup';
import Homepage from './Homepage';


const TabletSummaryPage = ({ patientId = 1 }) => {
  const [showFollowupPage, setShowFollowupPage] = useState(false);
  const [scheduledData, setScheduledData] = useState(null);
  const [showCloseCase, setShowCloseCase] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [shouldNavigateHome, setShouldNavigateHome] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleFollowupScheduled = (data) => {
    setScheduledData(data);
    setShowFollowupPage(true);
  };

  const handleCloseCaseClick = () => {
    setShowCloseCase(true);
  };

  const handleClose = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClose = () => {
    setShouldNavigateHome(true);
  };

  if (shouldNavigateHome) {
    return <Homepage />;
  }

  if (showFollowupPage && scheduledData) {
    return (
      <FollowupPage 
        scheduledDate={scheduledData.date}
        scheduledTime={scheduledData.time}
      />
    );
  }

  if (showCloseCase) {
    return <TabletCloseCase />;
  }

  return (
    <div className={`min-h-screen mt-10 bg-[#F8FAFC] ${isExiting ? 'animate-slideDown' : ''}`}>
      {/* Main Container with max-width for larger screens */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr,3fr] gap-6">
          {/* Left Column - Patient Details */}
          <div className="md:sticky md:top-0 md:h-screen md:pt-6">
            <PatientDetails 
              patientId={patientId} 
              onClose={handleClose}
              className="md:max-h-[calc(100vh-2rem)] md:overflow-auto"
            />
          </div>

          {/* Right Column - Reports and Chat */}
          <div className="space-y-6">
            {/* Reports Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Reports 
                onFollowupScheduled={handleFollowupScheduled}
                onCloseCaseClick={handleCloseCaseClick}
                patientId={patientId}
              />
            </div>

            {/* Chat Section - Fixed at bottom on tablet/desktop */}
            <div className="md:fixed md:bottom-0 md:right-0 md:w-[calc(100%-350px)] lg:w-[calc(100%-400px)] md:max-w-[800px] md:mx-4 lg:mx-8">
              <Chat patientId={patientId} />
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <ConfirmationPopup 
            onConfirm={handleConfirmClose}
            onCancel={() => setShowConfirmation(false)}
            className="max-w-md w-full"
          />
        </div>
      )}
    </div>
  );
};

export default TabletSummaryPage; 