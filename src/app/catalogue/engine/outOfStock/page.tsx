"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShopByVehicle from "@/components/shopByVehicle";
import EngineFilterSidebar from "@/components/EngineFilterSidebar";
// import Footer from '@/components/footer';
// import Header from '@/components/header';

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
];

export default function CatalogPage() {
  // Example subparts list (replace with real data if available)
  const [subPartsList] = useState([
    { id: 1, name: '4.9L' },
    { id: 2, name: '5.0L' },
    { id: 3, name: '5.8L' },
  ]);
  const [subPartFilter, setSubPartFilter] = useState<number | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  return (
    <div className="bg-[#061C37] text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-2 pt-4 md:py-0 ">
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
          <span className=" text-white">Engines</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6 pb-12">
        {/* Shop by Vehicle */}
        <div className="relative pt-12 md:pt-24 pb-12 md:pb-20">
          <ShopByVehicle />
        </div>

        {/* Heading */}
        <h2
          className="text-xl md:text-3xl  font-audiowide md:mt-8 mb-2 md:mb-6 pl-3 "
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Engines 4.9L E4OD transmission
        </h2>

        <div className="flex gap-6 px-3">
          {/* Left Filter Sidebar */}
          <aside className="hidden md:block w-[250px] text-sm flex-shrink-0">
            <div className="mb-6 bg-[#091627] p-4 rounded-lg">
              <h3 className="mb-3 font-audiowide">CHOOSE YOUR SPECIFICATION</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-white">4.9L</p>
                  <p className="text-xs text-gray-400">
                    from 2/3/91 (AIR inner manifold)
                  </p>
                  <Link
                    href="#"
                    className="text-sky-400 hover:underline text-xs"
                  >
                    E40D transmission
                  </Link>
                  <br />
                  <Link
                    href="#"
                    className="text-sky-400 hover:underline text-xs"
                  >
                    w/o E40D transmission
                  </Link>
                </li>
                <li className="mt-3">
                  <p className="text-white">thru 2/2/91 (AIR inner head)</p>
                  <Link
                    href="#"
                    className="text-sky-400 hover:underline text-xs"
                  >
                    E40D transmission
                  </Link>
                  <br />
                  <Link
                    href="#"
                    className="text-sky-400 hover:underline text-xs"
                  >
                    w/o E40D transmission
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Product Card */}
          <main className="flex-1">
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
            {showMobileFilter && (
              <div className="fixed justify-end inset-0 z-50 backdrop-blur-sm flex items-center  md:hidden h-screen">
                <div className="relative top-0 right-0 w-11/12 max-w-xs bg-[#0C2A4D] rounded-l-lg p-0 overflow-y-auto max-h-[100vh]">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setShowMobileFilter(false)}
                    aria-label="Close filter"
                  >
                    &times;
                  </button>
                  <EngineFilterSidebar 
  subPartsList={subPartsList}
  subPartFilter={subPartFilter}
  setSubPartFilter={setSubPartFilter}
/>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-10">
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0C2A4D] w-full md:w-[250px] h-[350px] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative flex flex-col justify-between overflow-hidden"
                >
                  {/* Top: Image */}
                  <div
                    className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)",
                      width: "180px",
                      height: "117px",
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
                    <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                      Stock image
                    </p>
                  </div>

                  {/* Shadow gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-0 rounded-b-lg"></div>

                  {/* Details + Button */}
                  <div className="relative z-20 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-white text-base mb-1 font-audiowide">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-1">
                        {item.vehicle}
                      </p>
                      <p className="text-xs text-gray-400 mb-1">{item.specs}</p>
                      <p className="text-xs text-gray-400 mb-1">
                        {item.condition}
                      </p>
                      <p className="text-xs text-gray-400 mb-1">{item.grade}</p>
                      <p className="text-xs text-gray-400 mb-1">{item.miles}</p>
                      <p className="text-xs text-gray-400 mb-4">
                        {item.warranty}
                      </p>{" "}
                      {/* Add mb-4 here instead */}
                    </div>

                    <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 w-full rounded-md transition-colors">
                      View more
                    </button>
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