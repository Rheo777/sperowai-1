import React from 'react';
import { FaClock } from 'react-icons/fa';

const RecentConsultations = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Recent Patients</h3>
          <p className="text-sm text-gray-500">Today's consultations</p>
        </div>
        <select className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-sm text-gray-600">
          <option>Today</option>
          <option>Yesterday</option>
        </select>
      </div>

      {/* Patient List */}
      <div className="space-y-3">
        {[
          {
            name: 'Mr. Sushanth',
            id: '212111',
            time: '10:12 AM',
            status: 'Completed',
            image: 'https://i.pravatar.cc/150?img=1'
          },
          {
            name: 'Mrs. Sarah Johnson',
            id: '212112',
            time: '11:12 AM',
            status: 'Follow-up',
            image: 'https://i.pravatar.cc/150?img=2'
          },
          {
            name: 'Mr. David Chen',
            id: '212113',
            time: '11:30 AM',
            status: 'Completed',
            image: 'https://i.pravatar.cc/150?img=3'
          }
        ].map((patient) => (
          <div 
            key={patient.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full overflow-hidden">
                  <img 
                    src={patient.image}
                    alt={patient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white ${
                  patient.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'
                }`} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{patient.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">ID: {patient.id}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    patient.status === 'Completed' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-orange-50 text-orange-600'
                  }`}>
                    {patient.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 text-gray-500">
                <FaClock className="text-xs" />
                <span className="text-sm">{patient.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentConsultations; 