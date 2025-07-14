'use client';

import React from 'react';

export default function PartRequestPopup() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-auto bg-[#091b33] rounded-md  p-8">
        <button
          className="absolute top-6 right-7 text-gray-400 hover:text-white text-4xl"
          aria-label="Close"
          // Add your close logic here
        >
          &times;
        </button>
        <h2 className="text-white border-b border-gray-600  text-xl font-bold mb-6 tracking-wide pb-2">CONTACT INFORMATION</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Make*</label>
            <select className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none">
              <option>Ford</option>
              {/* Add more options */}
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Model*</label>
            <select className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none">
              <option>Bronco</option>
              {/* Add more options */}
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Year*</label>
            <select className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none">
              <option>1991</option>
              {/* Add more options */}
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Full Name*</label>
            <input className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none" placeholder="Name" />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Email*</label>
            <input className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none" placeholder="example@gmail.com" type="email" />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Phone*</label>
            <input className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none" placeholder="(___) ___-____" type="tel" />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-1 block">ZIP Code*</label>
            <input className="w-full bg-[#1b2942] text-white rounded px-3 py-2 focus:outline-none" placeholder="ZIP Code" />
          </div>
          <div className="flex gap-4 mt-6">
            <button type="button" className="flex-1 bg-[#091b33] text-white rounded py-2 border border-[#00a3ff] hover:bg-[#22304a] transition">Cancel</button>
            <button type="submit" className="flex-1 bg-[#00a3ff] text-white rounded py-2 font-semibold hover:bg-[#0d8ddb] transition">Get Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
}
