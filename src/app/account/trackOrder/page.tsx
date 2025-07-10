'use client';
import React, { useState } from 'react';

export default function TrackOrderPage() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg mx-4">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          onClick={() => setShow(false)}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Title */}
        <h2 className="text-xl font-audiowide mb-2 tracking-wide">ORDER TRACKING</h2>
        {/* Description */}
        <p className="mb-5 text-gray-300 text-sm">
          Please provide the order number as indicated in the invoice copy sent to your email to check the current status of your order.
        </p>
        {/* Form */}
        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={e => {
            e.preventDefault();
            // handle submit here
          }}
        >
          <input
            type="text"
            placeholder="Order Number"
            className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded transition-colors font-semibold"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
}
