import React, { useState } from 'react';
import { FaUserCircle, FaClock } from 'react-icons/fa';

const ConsultationCard = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [isChanging, setIsChanging] = useState(false);

  const handleTabChange = (tab) => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsChanging(false);
    }, 200);
  };

  const consultationData = {
    Recent: [
      {
        name: "Sarah Johnson",
        time: "10:30 AM",
        status: "Completed",
        condition: "Regular Checkup",
        id: "212111"
      },
      {
        name: "Michael Chen",
        time: "9:15 AM",
        status: "In Progress",
        condition: "Follow-up",
        id: "212112"
      }
    ],
    "Follow-ups": [
      {
        name: "Emily Davis",
        time: "Tomorrow",
        status: "Scheduled",
        condition: "Follow-up",
        id: "312211"
      },
      {
        name: "David Wilson",
        time: "23 Jan",
        status: "Scheduled",
        condition: "Review",
        id: "312212"
      }
    ],
    "Closed": [
      {
        name: "Robert Brown",
        time: "Yesterday",
        status: "Completed",
        condition: "Final Review",
        id: "412311"
      },
      {
        name: "Lisa Anderson",
        time: "19 Jan",
        status: "Completed",
        condition: "Treatment Complete",
        id: "412312"
      }
    ]
  };

  return (
    <div className="w-full px-3">
      <div className="max-w-[440px] min-w-[320px] mx-auto mt-4">
        {/* Heading outside the box */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3 px-1">Recent Consultations</h2>
        
        {/* Tab Navigation outside the box */}
        <div className="flex gap-2 mb-4 bg-gray-50 p-1 rounded-lg">
          {Object.keys(consultationData).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === tab 
                  ? "bg-white text-[#3973eb] shadow-sm border border-gray-100" 
                  : "text-gray-500 hover:bg-white/50"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Consultation List in white box */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className={`space-y-3 transition-all duration-200 
            ${isChanging ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
            {consultationData[activeTab].map((consultation, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  {/* Left side - Patient info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <FaUserCircle className="text-gray-400 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{consultation.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>ID: {consultation.id}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{consultation.condition}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Time and status */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                      <FaClock className="text-xs" />
                      <span>{consultation.time}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      consultation.status === 'Completed' 
                        ? 'bg-green-50 text-green-600'
                        : consultation.status === 'Scheduled'
                        ? 'bg-purple-50 text-purple-600'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {consultation.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
