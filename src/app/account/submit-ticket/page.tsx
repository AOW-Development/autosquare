"use client";
import React, { useState } from "react";
import Image from "next/image";
import TicketSubmittedModal from "@/components/TicketSubmittedModal";
import Link from "next/link";

export default function SubmitTicketPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    orderId: "",
    email: "",
    phone: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api-2/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();

      if (res.ok) {
        setModalOpen(true);
        setFormData({
          fullName: "",
          orderId: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(
          responseData.message || "Failed to submit ticket. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1422] ">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-10 ">
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
        <div className="w-full max-w-6xl grid md:grid-cols-1 lg:grid-cols-2 gap-8 bg-transparent container">
          {/* Info Column */}
          <div className="flex flex-col gap-6 justify-center">
            <h1
              className="font-audiowide text-white text-wrap text-xl md:text-3xl lg:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 lg:tracking-wide uppercase text-left w-full"
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
                  <a href="tel:8883382540" className="text-gray-200 text-sm">
                   (888) 338-2540
                   </a>
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
                  <a
                    href="mailto:support@partscentral.us"
                    className="text-gray-200 text-sm underline"
                  >
                      support@partscentral.us
                  </a>
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
              className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              {/* Full Name */}
              <div className="flex flex-col col-span-1 md:grid-cols-2">
                <label
                  htmlFor="fullName"
                  className="text-white text-sm font-medium mb-1"
                >
                  Full Name<span>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                />
              </div>

              {/* Order ID */}
              <div className="flex flex-col col-span-1 md:grid-cols-2">
                <label
                  htmlFor="orderId"
                  className="text-white text-sm font-medium mb-1"
                >
                  Order ID<span>*</span>
                </label>
                <input
                  id="orderId"
                  type="text"
                  required
                  placeholder="Order id"
                  value={formData.orderId}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      orderId: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col col-span-1">
                <label
                  htmlFor="email"
                  className="text-white text-sm font-medium mb-1"
                >
                  Email<span>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col col-span-1">
                <label
                  htmlFor="phone"
                  className="text-white text-sm font-medium mb-1"
                >
                  Phone<span>*</span>
                </label>
                <input
                  id="phone"
                  type="text"
                  required
                  placeholder="(   ) ___-____"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col col-span-1 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-white text-sm font-medium mb-1"
                >
                  Message<span>*</span>
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2 min-h-[100px] resize-none"
                />
              </div>

              {error && (
                <div className="col-span-1 md:col-span-2 bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="col-span-1 md:col-span-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-lg py-2 mt-4 transition cursor-pointer"
              >
                {isLoading ? "Submitting..." : "Submit Ticket"}
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
