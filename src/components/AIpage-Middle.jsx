import React from 'react';

const AIAnalysisCard = () => {
  return (
    <div className="w-[335px] h-[162px] mt-14 relative">
      {/* Top Section with AI analysis prompt */}
      <div className="w-[298px] h-[92px] px-3.5 py-[23px] left-[16px] top-0 absolute bg-white rounded-[30px] justify-center items-center gap-2.5 inline-flex">
        <div className="w-[269px] text-center text-[#3973eb] text-xl font-semibold ">
          Upload patient records for instant AI analysis
        </div>
      </div>

      {/* Bottom Section with AI analysis description */}
      <div className="w-[335px] left-0 top-[114px] absolute text-center text-[#928484] text-sm font-semibold ">
        Our AI will analyze the reports and provide a comprehensive summary, saving your time and improving accuracy
      </div>
    </div>
  );
};

export default AIAnalysisCard;
