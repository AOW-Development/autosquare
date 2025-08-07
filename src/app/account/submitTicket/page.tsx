"use client";
import React, { useState } from "react";
import Image from "next/image";
import TicketSubmittedModal from "@/components/TicketSubmittedModal";
import Link from "next/link";


export default function SubmitTicketPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
    // Reset form fields if needed
  };
  return (

      <div className="min-h-screen bg-[#0B1422] ">
        {/* Breadcrumb */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
          <div className="flex items-center gap-2  py-4 mt-1 text-[15px] font-medium">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/Images/HouseLine.png"
                alt="Home"
                width={24}
                height={24}
              />
            </Link>
            <Image
              src="/Images/arrows (1).svg"
              alt=">"
              width={16}
              height={16}
            />
            <span className="text-white">Submit a ticket</span>
          </div>

          {/* Main content grid */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent container">
            {/* Info Column */}
            <div className="flex flex-col gap-6 justify-center">
              {/* <div className="uppercase text-xs text-gray-300 font-semibold tracking-wider">Have a question?</div> */}
              <h1
                className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Submit a ticket
              </h1>
              <div className="text-base text-gray-200">
                We value your questions, suggestions, and feedback. Please use
                the form to get in touch with us. We&apos;ll strive to respond
                to you as promptly as possible.
              </div>
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/Images/contact_us.png"
                    alt="Clock"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-base font-semibold mb-0.5">
                      Working hours
                    </span>
                    <span className="text-gray-200 text-sm">
                      Mon–Fri: 8AM – 7PM EST
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/Images/contact_us (1).png"
                    alt="Phone"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-base font-semibold mb-0.5">
                      Phone
                    </span>
                    <span className="text-gray-200 text-sm">
                      (888) 338-2540
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/Images/contact_us (3).png"
                    alt="Mail"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-base font-semibold mb-0.5">
                      Email address
                    </span>
                    <span className="text-gray-200 text-sm underline">
                      partscentralus@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/Images/contact_us (2).png"
                    alt="Location"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-base font-semibold mb-0.5">
                      Office location
                    </span>
                    <span className="text-gray-200 text-sm">
                      76 Imperial Dr Suite E Evanston, WY 82930, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Column */}
            <div className="bg-gray-900 rounded-lg shadow-sm p-6 flex flex-col justify-center">
              <form
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                {/* Full Name */}
                <div className="flex flex-col col-span-1">
                  <label
                    htmlFor="name"
                    className="text-white text-sm font-medium mb-1"
                  >
                    Full Name<span className="text-white-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                  />
                </div>
                {/* Order ID */}
                <div className="flex flex-col col-span-1">
                  <label
                    htmlFor="orderId"
                    className="text-white text-sm font-medium mb-1"
                  >
                    Order ID<span className="text-white-500">*</span>
                  </label>
                  <input
                    id="orderId"
                    type="text"
                    required
                    placeholder="Order id"
                    className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col col-span-1">
                  <label
                    htmlFor="email"
                    className="text-white text-sm font-medium mb-1"
                  >
                    Email<span className="text-white-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-white text-sm font-medium mb-1"
                  >
                    Phone<span className="text-white-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    required
                    placeholder="(   ) ___-____"
                    className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                  />
                </div>
                {/* Message */}
                <div className="flex flex-col col-span-1 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-white text-sm font-medium mb-1"
                  >
                    Message<span className="text-white-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    placeholder="Write your message"
                    className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2 min-h-[100px] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="col-span-1 md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 mt-4 transition cursor-pointer"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>
          {modalOpen && (
            <TicketSubmittedModal onClose={() => setModalOpen(false)} />
          )}
        </div>
      </div>

  );
}
