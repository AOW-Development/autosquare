'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ThankYouPopupPartRequestform from '../thankYouPopupPartRequestform/page';

interface Props {
  make: string;
  model: string;
  year: string;
}

export default function PartRequestPopup({ make, model, year }: Props) {
  const [showThankYou, setShowThankYou] = useState(false);
  const [close, setClose] = useState(false);

  if (close) return null;
  if (showThankYou) return <ThankYouPopupPartRequestform onClose={() => setClose(true)} />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-6">
      <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg md:max-w-2xl mx-4">
        {/* Close Button */}
        <button
          className="absolute top-3 md:top-6 right-3 text-gray-400 hover:text-white text-xl"
          onClick={() => setClose(true)}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-audiowide mb-2 tracking-wide text-white">CONTACT INFORMATION</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowThankYou(true);
          }}
          className="flex flex-col gap-3 mt-4"
        >
          {/* Autofilled Fields */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Make*</label>
            <input className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" value={make} />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Model*</label>
            <input className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" value={model} />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Year*</label>
            <input className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" value={year} />
          </div>

          {/* User Info */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Full Name*</label>
            <input className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" placeholder="Name" />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Email*</label>
            <input type="email" className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" placeholder="example@gmail.com" />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Phone*</label>
            <input type="tel" className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" placeholder="(___) ___-____" />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">ZIP Code*</label>
            <input className="w-full bg-[#1A2B47] text-white rounded px-3 py-2" placeholder="ZIP Code" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <button
              type="button"
              onClick={() => setClose(true)}
              className="flex-1 bg-[#091b33] text-white rounded py-2 border border-[#00a3ff] hover:bg-[#22304a] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#00a3ff] text-white rounded py-2 font-semibold hover:bg-[#0d8ddb] transition"
            >
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
