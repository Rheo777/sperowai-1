import React, { useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const UploadCard = ({ onFileUpload, onUploadComplete }) => {
  // Create references for file inputs
  const galleryRef = useRef(null);
  const documentRef = useRef(null);
  const cameraRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasFiles, setHasFiles] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  // Function to trigger file input for gallery and document
  const triggerFileInput = (ref) => {
    setActiveButton(ref === documentRef ? 'files' : ref === cameraRef ? 'camera' : 'gallery');
    setTimeout(() => setActiveButton(null), 200); // Reset after animation
    ref.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setHasFiles(true);
      setSelectedButton(event.target === documentRef.current ? 'files' : 
                       event.target === cameraRef.current ? 'camera' : 'gallery');
      onFileUpload(files, (uploading) => {
        setIsUploading(uploading);
        if (!uploading) {
          setHasFiles(false); // Reset hasFiles when upload is cancelled/removed
          setSelectedButton(null);
        }
      });
    }
  };

  const handleUploadClick = () => {
    if (!hasFiles || !selectedButton) { // Check both conditions
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
      return;
    }
    setIsUploading(true);
    onUploadComplete();
  };

  const getButtonClasses = (buttonType) => {
    const baseClasses = "w-16 h-[59px] px-3.5 py-1.5 bg-white rounded-[20px] justify-start items-center gap-2.5 inline-flex transition-all duration-200";
    const activeClasses = activeButton === buttonType ? "scale-95 bg-gray-50" : "";
    const selectedClasses = selectedButton === buttonType ? "shadow-sm" : "";
    return `${baseClasses} ${activeClasses} ${selectedClasses} hover:scale-105 active:scale-95`;
  };

  return (
    <div className="w-[390px] h-[359px] fixed top-1/4 left-1/2 transform -translate-x-1/2 mt-56">
      {/* Background Container */}
      <div className="w-[390px] h-[359px] absolute bg-white rounded-tl-[50px] rounded-tr-[50px]">
        {/* Description */}
        <div className="h-[50px] p-2.5 left-[34px] top-[25px] absolute rounded-[30px] border border-[#3973eb]/20 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-[#3973eb] text-sm font-semibold ">
            Upload Your Medical Files for Quick Diagnosis
          </div>
        </div>

        {/* Notification - Repositioned */}
        {showNotification && (
          <div className="absolute top-[65px] left-1/2 transform -translate-x-1/2 w-[80%] bg-red-100 text-red-600 px-4 py-2 rounded-[10px] text-sm font-semibold text-center animate-fadeIn">
            No file selected. Please choose a file or image to proceed.
          </div>
        )}

        {/* Button Section */}
        <div className="w-[254px] h-[84px] left-[68px] top-[100px] absolute">
          {/* Background for Buttons */}
          <div className="w-[254px] h-[74px] left-0 top-0 absolute bg-[#b4adad]/40 rounded-[30px]"></div>

          {/* Files Button */}
          <button
            onClick={() => triggerFileInput(documentRef)}
            className={`${getButtonClasses('files')} left-[8px] top-[7px] absolute hover:scale-105`}
          >
            <div className="w-[33px] flex-col justify-start items-center gap-1 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256" className="text-gray-500">
                <path fill="currentColor" d="m213.66 66.34l-40-40A8 8 0 0 0 168 24H88a16 16 0 0 0-16 16v16H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V72a8 8 0 0 0-2.34-5.66M136 192H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32H88a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m64 24h-16v-80a8 8 0 0 0-2.34-5.66l-40-40A8 8 0 0 0 136 56H88V40h76.69L200 75.31Z"></path>
              </svg>
              <div className="w-[51px] text-black text-[10px] font-normal font-['Raleway']">Files</div>
            </div>
            <input
              ref={documentRef}
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.ppt,.pptx"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
          </button>

          {/* Camera Button */}
          <button
            onClick={() => triggerFileInput(cameraRef)}
            className={`${getButtonClasses('camera')} left-[96px] top-[7px] absolute hover:scale-105`}
          >
            <div className="w-[33px] flex-col justify-start items-center gap-1 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-gray-500">
                <path fill="currentColor" fillRule="evenodd" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21M12 9.273c-2.301 0-4.167 1.831-4.167 4.09S9.7 17.456 12 17.456s4.167-1.832 4.167-4.091S14.3 9.273 12 9.273m0 1.636c-1.38 0-2.5 1.099-2.5 2.455c0 1.355 1.12 2.454 2.5 2.454s2.5-1.099 2.5-2.454s-1.12-2.455-2.5-2.455m4.722-.818c0-.452.373-.818.834-.818h1.11c.46 0 .834.366.834.818a.826.826 0 0 1-.833.818h-1.111a.826.826 0 0 1-.834-.818" clipRule="evenodd"></path>
              </svg>
              <div className="w-[39px] text-black text-[10px] font-normal font-['Raleway']">Camera</div>
            </div>
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={handleFileChange}
            />
          </button>

          {/* Gallery Button */}
          <button
            onClick={() => triggerFileInput(galleryRef)}
            className={`${getButtonClasses('gallery')} left-[182px] top-[7px] absolute hover:scale-105`}
          >
            <div className="w-[33px] flex-col justify-start items-center gap-1 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="text-gray-500">
                <path fill="currentColor" d="M22 12.698c-.002 1.47-.013 2.718-.096 3.743c-.097 1.19-.296 2.184-.74 3.009a4.2 4.2 0 0 1-.73.983c-.833.833-1.893 1.21-3.237 1.39C15.884 22 14.2 22 12.053 22h-.106c-2.148 0-3.83 0-5.144-.177c-1.343-.18-2.404-.557-3.236-1.39c-.738-.738-1.12-1.656-1.322-2.795c-.2-1.12-.236-2.512-.243-4.241Q1.999 12.737 2 12v-.054c0-2.148 0-3.83.177-5.144c.18-1.343.557-2.404 1.39-3.236s1.893-1.21 3.236-1.39c1.168-.157 2.67-.175 4.499-.177a.697.697 0 1 1 0 1.396c-1.855.002-3.234.018-4.313.163c-1.189.16-1.906.464-2.436.994S3.72 5.8 3.56 6.99C3.397 8.2 3.395 9.788 3.395 12v.784l.932-.814a2.14 2.14 0 0 1 2.922.097l3.99 3.99a1.86 1.86 0 0 0 2.385.207l.278-.195a2.79 2.79 0 0 1 3.471.209l2.633 2.37c.265-.557.423-1.288.507-2.32c.079-.972.09-2.152.091-3.63a.698.698 0 0 1 1.396 0"></path><path fill="currentColor" fillRule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m2.03-5.53l-1.5-1.5a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V8.5a.75.75 0 0 0 1.5 0V6.31l.22.22a.75.75 0 1 0 1.06-1.06" clipRule="evenodd"></path>
              </svg>
              <div className="self-stretch text-black text-[10px] font-normal font-['Raleway']">Gallery</div>
            </div>
            <input
              ref={galleryRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
          </button>

          {/* Upload Button with Animation */}
          <div 
            onClick={handleUploadClick}
            className={`w-[260px] h-[51px] px-[27px] py-3.5 absolute left-[-3px] top-[90px] 
              ${isUploading ? 'bg-[#3973eb]' : 'bg-[#c0c1c3]'} 
              rounded-[60px] shadow-[0px_4px_25.100000381469727px_0px_rgba(255,255,255,0.68)] 
              flex items-center justify-center gap-[17px] cursor-pointer 
              transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
          >
            <div className="text-white text-xl font-semibold font-['Raleway']">
              {isUploading ? 'Uploading' : 'Upload'}
            </div>
            {!isUploading ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            ) : (
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/6f5be402-f09a-4b59-8843-52fbe47f39e8/OkVjoaYawA.lottie"
                  loop
                  autoplay
                  style={{ width: '80px', height: '50px', filter: 'brightness(0) invert(1)' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
