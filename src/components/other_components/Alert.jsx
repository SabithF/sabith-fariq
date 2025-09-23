import React from "react";

const Alert = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50 pointer-events-auto">
      <div className="info-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
        <div className="flex gap-2">
          <div className="text-[#1c56be] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#146d09" strokeWidth="1.5"></circle>
              <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#146d09" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div>
            <p className="text-liveButton">Got it! Thank you.</p>
            <p className="text-gray-500">I will get back to you soon...</p>
          </div>
        </div>
        <button
          className="text-gray-600 cursor-pointer hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
          onClick={onClose}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alert;
