import React from "react";
import { FaClock } from "react-icons/fa"; // Importing clock icon for the treatment time

const Performance = () => {
  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 80) + 20);
  };

  // Modify the points calculation to create curved lines
  const createSmoothPath = (data) => {
    const maxValue = Math.max(...data);
    let path = `M 0,${100 - (data[0] / maxValue) * 80}`;
    
    for (let i = 0; i < data.length - 1; i++) {
      const x1 = i * 40;
      const x2 = (i + 1) * 40;
      const y1 = 100 - (data[i] / maxValue) * 80;
      const y2 = 100 - (data[i + 1] / maxValue) * 80;
      
      // Calculate control points for the curve
      const cx1 = x1 + 20;
      const cx2 = x2 - 20;
      
      path += ` C ${cx1},${y1} ${cx2},${y2} ${x2},${y2}`;
    }
    return path;
  };

  const data = generateRandomData();
  const maxValue = Math.max(...data);
  const curvePath = createSmoothPath(data);

  return (
    <div className="w-full max-w-[360px] mt-2 mx-auto p-3 bg-[#efeefb] rounded-lg">
      {/* Efficiency Metrics */}
      <div className="bg-white p-3 rounded-lg mb-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-black">Efficiency Metrics</h2>
          <span className="text-xs text-gray-500">This Week</span>
        </div>
        
        <div className="mt-3">
          <div className="w-full h-24 bg-white rounded-lg">
            <svg width="100%" height="100%" viewBox="0 0 240 100" preserveAspectRatio="none">
              {/* Define gradient - updated color */}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#84CC16" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#84CC16" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Area under the curve */}
              <path
                d={`${curvePath} L240,100 L0,100Z`}
                fill="url(#lineGradient)"
              />
              
              {/* The curved line itself */}
              <path
                d={curvePath}
                fill="none"
                stroke="#84CC16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Data points */}
              {data.map((value, index) => (
                <circle
                  key={index}
                  cx={index * 40}
                  cy={100 - (value / maxValue) * 80}
                  r="2"
                  fill="#84CC16"
                />
              ))}
            </svg>
          </div>
          {/* Keep existing days section */}
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      {/* Average Treatment Time Block */}
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-800">
              Average Treatment Time
            </span>
            <FaClock className="text-[#3973EB] text-base" />
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="text-3xl font-bold text-[#3973EB]">10 min</div>
            <div className="text-sm text-gray-500">Current Average</div>
            
            <div className="w-full h-2 bg-gray-100 rounded-full mt-4">
              <div 
                className="h-full bg-[#3973EB] rounded-full transition-all duration-500"
                style={{ width: '65%' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-lg font-semibold text-[#24844e]">5 min</div>
              <div className="text-xs text-gray-600">Fastest</div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-3 text-center">
              <div className="text-lg font-semibold text-red-600">15 min</div>
              <div className="text-xs text-gray-600">Longest</div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 px-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-600">On Track</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Delayed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance; 
