import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PatientAnalyticsPage = ({ onNavigate }) => {
  // Gender distribution data
  const genderData = {
    labels: ['Men', 'Women', 'Children'],
    datasets: [{
      data: [35, 45, 20],
      backgroundColor: ['#3973eb', '#36A2EB', '#4BC0C0'],
      borderColor: ['#ffffff', '#ffffff', '#ffffff'],
      borderWidth: 2,
    }]
  };

  // Disease distribution data
  const diseaseData = {
    labels: ['Fever', 'Diabetes', 'Heart Disease', 'Respiratory', 'Others'],
    datasets: [{
      label: 'Number of Patients',
      data: [65, 45, 30, 40, 25],
      backgroundColor: '#3973eb',
      borderRadius: 8,
    }]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[440px] mx-auto">
        {/* New Header Design */}
        <div className="bg-gradient-to-b from-gray-50 to-white shadow-sm border-b">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoArrowBack className="text-gray-700 text-xl" />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Patient Analytics</h1>
              <div className="w-10"></div>
            </div>

            {/* Stats Overview with new design */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl p-4 shadow-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3973eb]">2,547</div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
              <div className="text-center border-x border-gray-100">
                <div className="text-2xl font-bold text-[#3973eb]">127</div>
                <div className="text-sm text-gray-500">New</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3973eb]">85%</div>
                <div className="text-sm text-gray-500">Return Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Content */}
        <div className="p-4">
          {/* Gender Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Patient Demographics</h2>
            <div className="w-full max-w-[250px] mx-auto">
              <Pie data={genderData} options={{ 
                plugins: { 
                  legend: { 
                    position: 'bottom',
                    labels: {
                      padding: 20,
                      usePointStyle: true,
                    }
                  } 
                } 
              }} />
            </div>
          </div>

          {/* Disease Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Common Conditions</h2>
            <div className="w-full h-[300px]">
              <Bar data={diseaseData} options={barOptions} />
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg. Treatment Time</h3>
              <div className="text-2xl font-bold text-[#3973eb]">18 min</div>
              <div className="text-xs text-gray-500">Per patient</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Satisfaction Rate</h3>
              <div className="text-2xl font-bold text-[#3973eb]">92%</div>
              <div className="text-xs text-gray-500">Based on feedback</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAnalyticsPage; 