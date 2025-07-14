import React from "react";

const EmailSubmittedModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-2xl">
    <div className="relative bg-[#091b33] rounded-md shadow-lg p-6 md:p-8 w-[95%] md:w-[70%] max-w-md flex flex-col gap-4">
      <button
        className="absolute top-0 right-1 text-white text-4xl leading-none focus:outline-none"
        onClick={onClose}
        aria-label="Close"
        type="button"
      >
        &times;
      </button>
      <div className="text-lg md:text-xl text-white font-semibold text-center uppercase">
        THE EMAIL HAS BEEN SENT
      </div>
      <div className="text-base text-gray-300 text-center">
        Please await a response in your inbox
      </div>
      <div className="flex justify-center w-full">
        <button
          className="w-2/4 bg-[#00a3ff] hover:bg-blue-600 text-white rounded-md py-2 font-medium mt-2"
          onClick={onClose}
          type="button"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
);

export default EmailSubmittedModal;  