import React from 'react';

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-[20px] p-6 w-[90%] max-w-[320px] shadow-lg animate-slideUp">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
          Abandon Report?
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          Are you sure you want to abandon this report?
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Abandon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup; 