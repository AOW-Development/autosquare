"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShopByVehicle from "@/components/shopByVehicle";
import EngineFilterSidebar from "@/components/EngineFilterSidebar";
// import Footer from '@/components/footer';
// import Header from '@/components/header';

// Keeping dummyData with only 2 items as requested
const dummyData = [
  {
    title: "Engine assembly",
    vehicle: "Ford Bronco 1991",
    specs: "4.9L",
    condition: "Genuine Used Part",
    grade: "A Grade Condition",
    miles: "110k miles",
    warranty: "90 Days Warranty",
    price: "100$",
  },
  {
    title: "Engine assembly",
    vehicle: "Ford Bronco 1991",
    specs: "4.9L",
    condition: "Genuine Used Part",
    grade: "A Grade Condition",
    miles: "110k miles",
    warranty: "90 Days Warranty",
    price: "100$",
  },
];

export default function CatalogPage() {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  return (
    <div className="bg-[#061C37] text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-2 pt-4 md:py-4">
       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-4 text-sm text-gray-300 flex items-center space-x-2">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Image
              src="/account/HouseLine.png"
              alt="Home"
              width={24}
              height={24}
            />
            {/* <span>Home</span> */}
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <Link href="/autoParts" className="">
            Auto parts
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <Link href="/engine" className="">
            Engine
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <span className="text-white">Engines</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
        <div className="relative pt-12 md:pt-24 pb-10 md:pb-20">
          <ShopByVehicle />
        </div>

        <h2
          className="text-xl md:text-3xl  font-audiowide md:mt-8 mb-2 md:mb-6 pl-3 "
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Engines 4.9L E4OD transmission
        </h2>

        {/* Filters + Cards Section */}
        <div className="flex gap-6 px-3">
          {/* Filter Sidebar (Desktop) */}
          <aside className="hidden md:block w-[250px] text-sm flex-shrink-0">
            <EngineFilterSidebar />
          </aside>
          {/* Product Cards Grid */}
          <main className="flex-1">
            {/* Quantity and Sort */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="md:hidden w-full rounded-lg px-4 py-1.5 mr-1 border-2 border-blue-600 shadow-2xl"
                onClick={() => setShowMobileFilter(true)}
              >
                Filter
              </button>
              <div className="hidden md:block text-sm text-gray-300">
                Quantity of products:{" "}
                <span className="font-semibold">{dummyData.length}</span>
              </div>
                  <div className="relative flex justify-end items-center w-full">
                <select
                  id="sort-by"
                  className="bg-[#091b33] border border-white text-white text-sm rounded-md shadow-xl focus:outline-none px-4 py-[6px] pr-10 appearance-none"
                >
                  <option className="text-white">Recommended</option>
                  <option className="text-white">Price: Low to High</option>
                  <option className="text-white">Price: High to Low</option>
                  <option className="text-white">Newest Arrivals</option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="absolute right-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
      
            </div>
            {/* Mobile Filter Modal */}
            {showMobileFilter && (
              <div className="fixed justify-end inset-0 z-50 flex items-center backdrop-blur-sm  md:hidden h-screen">
                <div className="relative top-0 right-0 w-11/12 max-w-xs bg-[#0C2A4D] rounded-l-lg p-0 overflow-y-auto max-h-[100vh]">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setShowMobileFilter(false)}
                    aria-label="Close filter"
                  >
                    &times;
                  </button>
                  <EngineFilterSidebar />
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden"
                >
                  {/* Image container with a stronger white radial gradient background */}
                  <div
                    className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)", // Increased white glow opacity
                      width: "250px",
                      height: "160px",
                    }}
                  >
                    <Image
                      src="/catalog/card.png"
                      alt="Engine"
                      width={250}
                      height={160}
                      className="relative z-10 rounded-md object-contain"
                      priority
                    />
                    {/* "Stock image" text */}
                    <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                      Stock image
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>
                  <div className="relative z-20 pt-2">
                    <h3 className=" text-white text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-1">{item.vehicle}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.specs}</p>
                    <p className="text-xs text-gray-400 mb-1">
                      {item.condition}
                    </p>
                    <p className="text-xs text-gray-400 mb-1">{item.grade}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.miles}</p>
                    <p className="text-xs text-gray-400 mb-2">
                      {item.warranty}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xl font-bold text-white">
                        {item.price}
                      </span>
                      <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
