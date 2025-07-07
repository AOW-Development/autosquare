"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <div className="max-w-6xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span>Contact us</span>
          </div>
          
          <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-300 uppercase text-sm mb-2">Have a question?</p>
                <h2 className="text-xl md:text-2xl font-semibold uppercase mb-4">WE ARE HERE TO HELP</h2>
                <p className="text-base text-gray-200 leading-relaxed">
                  We value your questions, suggestions, and feedback. Please use the form to get in touch with us. We'll strive to respond to you as promptly as possible.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image 
                    src="/Images/contact_us.png" 
                    alt="Clock" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-200">Mon–Fri: 8AM – 7PM EST</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/Images/contact_us(1).png" 
                    alt="Phone" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-200">(888) 748-0882</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/Images/contact_us(3).png" 
                    alt="Email" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  <a href="mailto:support@autosquare.us" className="text-blue-400 hover:text-blue-300">
                    support@autosquare.us
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Image 
                    src="/Images/contact_us(2).png" 
                    alt="Location" 
                    width={24} 
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-200">6335 Contessa Dr, Orlando, FL 32829</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-gray-800 rounded-2xl shadow-sm p-6">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block font-semibold mb-2">Name*</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email*</label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Message*</label>
                  <textarea
                    placeholder="Write your message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full bg-[#091627] text-white rounded-lg border border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-400 placeholder-gray-500 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 mt-4 font-semibold transition-colors"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
