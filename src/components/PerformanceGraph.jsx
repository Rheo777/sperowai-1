import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceGraph = () => {
  const [timeRange, setTimeRange] = useState('today'); // 'today' or 'yesterday'

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'white',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context) => `${context.parsed.y} patients`
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          padding: 10,
          color: '#94a3b8'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#f1f5f9',
          drawBorder: false
        },
        ticks: {
          stepSize: 20,
          padding: 10,
          color: '#94a3b8'
        }
      }
    }
  };

  const todayData = {
    labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'],
    datasets: [
      {
        data: [25, 35, 45, 30, 40, 50, 35],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, '#3973EB');
          gradient.addColorStop(1, 'rgba(57, 115, 235, 0.1)');
          return gradient;
        },
        borderRadius: 8,
        barThickness: 20
      }
    ]
  };

  const yesterdayData = {
    labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'],
    datasets: [
      {
        data: [20, 30, 40, 35, 45, 40, 30],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, '#3973EB');
          gradient.addColorStop(1, 'rgba(57, 115, 235, 0.1)');
          return gradient;
        },
        borderRadius: 8,
        barThickness: 20
      }
    ]
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-white rounded-2xl p-6 w-full md:w-[650px] lg:w-[850px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-800 font-semibold">Patient Flow</h3>
          
          {/* Desktop view buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setTimeRange('today')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                timeRange === 'today'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeRange('yesterday')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                timeRange === 'yesterday'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              Yesterday
            </button>
            <button
              onClick={() => setTimeRange('week')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                timeRange === 'week'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                timeRange === 'month'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              Month
            </button>
          </div>

          {/* Mobile view dropdown */}
          <select 
            className="md:hidden px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div className="h-[200px] w-full flex justify-center">
          <Bar options={options} data={timeRange === 'today' ? todayData : yesterdayData} />
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph; 