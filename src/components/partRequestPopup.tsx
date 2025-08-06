'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ThankYouPopupPartRequestform from '../components/ThankYouPopupPartRequestform';

export default function PartRequestPopup() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [close, setClose] = useState(false);

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (close) return null;
  if (showThankYou) return <ThankYouPopupPartRequestform onClose={() => setClose(true)} />;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!make.trim()) newErrors.make = 'Make is required';
    if (!model.trim()) newErrors.model = 'Model is required';
    if (!year.trim()) newErrors.year = 'Year is required';
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!phone.trim()) newErrors.phone = 'Phone is required';
    if (!zip.trim()) newErrors.zip = 'ZIP Code is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setShowThankYou(true);
      // Optionally send form data to backend here
    }
  };

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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          {/* Make */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Make*</label>
            <input
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Enter vehicle make"
            />
            {errors.make && <p className="text-red-500 text-sm">{errors.make}</p>}
          </div>

          {/* Model */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Model*</label>
            <input
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Enter vehicle model"
            />
            {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
          </div>

          {/* Year */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Year*</label>
            <input
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter vehicle year"
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Full Name*</label>
            <input
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              placeholder="Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Email*</label>
            <input
              type="email"
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Phone*</label>
            <input
              type="tel"
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              placeholder="(___) ___-____"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* ZIP Code */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">ZIP Code*</label>
            <input
              className="w-full bg-[#1A2B47] text-white rounded px-3 py-2"
              placeholder="ZIP Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
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
