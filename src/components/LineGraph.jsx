import React from "react";

const LineGraph = () => {
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
              r="3"
              fill="#84CC16"
            />
          ))}
        </svg>
      </div>
      {/* Days labels */}
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
  );
};

export default LineGraph; 