import React from 'react';

const WeeklyGraph = () => {
  const data = [27, 12, 14, 6, 12, 21, 30];
  const maxValue = 35;

  const calculateHeight = (value) => {
    return `${(value / maxValue) * 200}px`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Weekly Activity</h3>
          <p className="text-sm text-gray-500">Patient consultations</p>
        </div>
        <select className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>

      {/* Graph */}
      <div className="h-[200px] mb-6 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-b border-gray-100 w-full h-0" />
          ))}
        </div>

        {/* Y-axis */}
        <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-400">
          {[35, 30, 25, 20, 15, 10, 5, 0].map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>

        {/* Bars */}
        <div className="ml-8 h-full flex items-end justify-between">
          {data.map((value, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              {/* Tooltip */}
              <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  {value} patients
                </div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-800 mx-auto" />
              </div>

              {/* Bar */}
              <div 
                style={{ height: calculateHeight(value) }}
                className="w-4 bg-gradient-to-t from-blue-400 to-blue-500 rounded-lg transition-all duration-300 ease-out hover:w-10 hover:brightness-110 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 rounded-lg" />
                {value === Math.max(...data) && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis */}
      <div className="ml-8 grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={day} className="text-center">
            <span className={`text-xs font-medium ${
              data[index] === Math.max(...data) ? 'text-blue-500' : 'text-gray-500'
            }`}>
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyGraph; 