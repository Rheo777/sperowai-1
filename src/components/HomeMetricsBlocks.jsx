import React from 'react';
import { FaClock, FaUserMd, FaChartLine } from 'react-icons/fa';

const MetricBlock = ({ icon: Icon, title, caption, subCaption, isComingSoon }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
    {/* Beta Overlay */}
    {isComingSoon && (
      <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-[1px] flex flex-col justify-center items-center p-6 transition-all">
        <p className="text-gray-600 font-medium text-center mb-2">{caption}</p>
        <p className="text-sm text-gray-500 text-center">{subCaption}</p>
      </div>
    )}
    
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Icon className="text-blue-500 text-xl" />
      </div>
      <div>
        <h3 className="text-gray-800 font-medium mb-1">{title}</h3>
        <div className="space-y-2">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="w-24 h-2 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="w-32 h-2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HomeMetricsBlocks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricBlock 
        icon={FaChartLine}
        title="Efficiency Metrics"
        caption="Beta Version: Metrics will be available soon"
        subCaption="We're fine-tuning our analytics engine"
        isComingSoon={true}
      />
      <MetricBlock 
        icon={FaClock}
        title="Average Time Taken"
        caption="Beta Version: Time Metrics in Progress"
        subCaption="This feature is coming soon as we continue developing."
        isComingSoon={true}
      />
      <MetricBlock 
        icon={FaUserMd}
        title="Patients Overview"
        caption="Beta Version: Patient Data Not Yet Available"
        subCaption="We're working hard to bring you this functionality."
        isComingSoon={true}
      />
    </div>
  );
};

export default HomeMetricsBlocks;