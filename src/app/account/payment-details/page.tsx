"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function PaymentDetailsPage() {
  const [show, setShow] = useState(true);
  const [payment, setPayment] = useState(false);
  return (
    <>
      {payment && (
        <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
          <div className="max-w-6xl mx-auto md:mx-35 px-6 py-10">
            <div className="flex items-center gap-2 pb-6  py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/engine/HouseLine.png"
                  alt="Home"
                  width={24}
                  height={24}
                />
              </Link>
              <Image
                src="/Images/arrows (1).svg"
                alt="Arrow"
                width={16}
                height={16}
                // className="w-3 h-3"
              />
              {/* <span>&gt;</span> */}
              <span className="text-white">Make a payment</span>
            </div>
            <div className="bg-[#091627] rounded-2xl shadow-sm overflow-hidden">
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 px-6 py-4 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium">
                    Order number: <span className="font-bold">#123456</span>
                  </div>
                  <div className="text-sm text-white/70">
                    Date: 11 July 2024
                  </div>
                </div>
                <Link
                  href={"/account/paymentInfo"}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg text-base transition-colors w-full md:w-auto"
                >
                  Pay
                </Link>
              </div>
              {/* Items Table */}
              <div className="divide-y divide-white/10">
                <div className="flex flex-wrap md:flex-nowrap items-center px-6 py-3 text-sm font-semibold">
                  <div className="flex-1 min-w-[120px]">
                    Name engine assembly
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    Ford Bronco 1991
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">4.9L</div>
                  <div className="flex-1 min-w-[180px] text-white/80">
                    from 2/3/91 (AIR inner manifold)
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    E4OD transmission
                  </div>
                  <div className="w-10 text-center">x1</div>
                  <div className="w-20 text-right font-bold">$800</div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-center px-6 py-3 text-sm font-semibold">
                  <div className="flex-1 min-w-[120px]">
                    Name engine assembly
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80">
                    Ford Bronco 1991
                  </div>
                  <div className="flex-1 min-w-[120px] text-white/80"></div>
                  <div className="flex-1 min-w-[180px] text-white/80"></div>
                  <div className="flex-1 min-w-[120px] text-white/80"></div>
                  <div className="w-10 text-center">x1</div>
                  <div className="w-20 text-right font-bold">$800</div>
                </div>
              </div>
              {/* User Info & Total */}
              <div className="px-6 py-4 border-t border-white/10 flex flex-col gap-2 md:gap-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1 text-sm">
                  <div>
                    Name: <span className="text-white/90">Ksenia Meirnyk</span>
                  </div>
                  <div>
                    Email:{" "}
                    <span className="text-white/90">example@gmail.com</span>
                  </div>
                  <div>
                    ZIP Code: <span className="text-white/90">65111</span>
                  </div>
                </div>
                <div className="text-lg font-bold mt-4 md:mt-0">
                  TOTAL: <span className="text-white">$846</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg md:max-w-2xl mx-4">
            {/* Close Button */}
            <button
              className="absolute top-3 md:top-6 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => {
                redirect("/");
                // setShow(false);
              }}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Title */}
            <h2 className="text-xl font-audiowide mb-2 tracking-wide text-white">
              MAKE A PAYMENT
            </h2>
            {/* Description */}
            <p className="mb-5 text-gray-300 text-sm">
              Please provide the order number as indicated in the invoice copy
              sent to your email.
            </p>
            {/* Form */}
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
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
              <button
                type="submit"
                onClick={() => {
                  setShow(false);
                  setPayment(true);
                }}
                className="bg-sky-600 cursor-pointer hover:bg-sky-700 text-white px-5 py-2 rounded transition-colors font-semibold"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
