"use client";

import Image from "next/image";
import Link from "next/link";

export default function PaymentDetailsPage() {
  return (
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
              <div className="text-sm text-white/70">Date: 11 July 2024</div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg text-base transition-colors w-full md:w-auto">
              Pay
            </button>
          </div>
          {/* Items Table */}
          <div className="divide-y divide-white/10">
            <div className="flex flex-wrap md:flex-nowrap items-center px-6 py-3 text-sm font-semibold">
              <div className="flex-1 min-w-[120px]">Name engine assembly</div>
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
              <div className="flex-1 min-w-[120px]">Name engine assembly</div>
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
                Email: <span className="text-white/90">example@gmail.com</span>
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
  );
}
