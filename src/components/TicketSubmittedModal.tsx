import React from "react";

const TicketSubmittedModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg">
    <div className="relative bg-gray-900 rounded-md shadow-lg p-6 md:p-8 w-[95%] md:w-[70%] max-w-md flex flex-col gap-4">
      <button
        className="absolute top-3 right-3 text-white text-4xl leading-none focus:outline-none"
        onClick={onClose}
        aria-label="Close"
        type="button"
      >
        &times;
      </button>
      <div className="text-lg md:text-xl text-white font-semibold text-center uppercase">
        TICKET SUBMITTED
      </div>
      <div className="text-base text-gray-300 text-center">
        Your support ticket has been submitted.
      </div>
      <div className="flex justify-center w-full">
        <button
          className="w-2/4 cursor-pointer bg-[#00a3ff] hover:bg-blue-600 text-white rounded-lg py-2 font-medium mt-2"
          onClick={onClose}
          type="button"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
);

export default TicketSubmittedModal;
