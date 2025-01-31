import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PatientDetails from './PatientDetails';
import Chat from './Chat';
import FollowupPage from './followuppage';
import CloseCase from './closecase';
import Reports from './Reports';
import ConfirmationPopup from './ConfirmationPopup';
import Homepage from './Homepage';
import TabletSummaryPage from './Tablet-SummaryPage';

const SummaryPage = ({ patientId = 1 }) => {
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });
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
    setIsExiting(true);
    setTimeout(() => {
      setShowCloseCase(true);
    }, 300);
  };

  const handleClose = () => {
    setShowConfirmation(true);
  };

  const handleConfirmClose = () => {
    setShouldNavigateHome(true);
  };

  // For tablet/desktop view
  if (isTabletOrDesktop) {
    return <TabletSummaryPage patientId={patientId} />;
  }

  // Mobile view remains unchanged
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
    return <CloseCase />;
  }

  return (
    <div className={`min-h-screen bg-[#F8FAFC] relative max-w-[440px] mx-auto 
      ${isExiting ? 'animate-slideDown' : ''}`}>
      <PatientDetails patientId={patientId} onClose={handleClose} />

      {/* Main Content - Scrollable Area */}
      <div className="overflow-y-auto h-[calc(100vh-180px)]">
        <Reports 
          onFollowupScheduled={handleFollowupScheduled}
          onCloseCaseClick={handleCloseCaseClick}
          patientId={patientId}
        />
      </div>

      <Chat patientId={patientId} />

      {showConfirmation && (
        <ConfirmationPopup 
          onConfirm={handleConfirmClose}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default SummaryPage;
