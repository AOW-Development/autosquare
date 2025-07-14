"use client";

import AddedCartPopup from "../../../account/modal/AddedCartPopup/page";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShopByVehicle from "@/components/shopByVehicle";
import EngineFilterSidebar from "@/components/EngineFilterSidebar";
// import Footer from '@/components/footer';
// import Header from '@/components/header';

const dummyData = new Array(15).fill({
  title: "Engine assembly",
  vehicle: "Ford bronco 1991",
  specs: "4.9L",
  condition: "Genuine Used Part",
  grade: "A Grade Condition",
  miles: "110k miles",
  warranty: "90 Days Warranty",
  price: "100$",
});

export default function CatalogPage() {
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [inCartIdx, setInCartIdx] = useState<number | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <div className="bg-[#061C37] text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-2 pt-4 py-4">
        <nav className="max-w-6xl ml-4 md:ml-38 text-xs md:text-sm text-gray-300 flex items-center md:space-x-2">
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
          <Link href="/autoParts" className="hover:underline hover:text-white">
            Auto parts
          </Link>
          <Image
            src="/autoparts/arrows (1).png"
            alt="Arrow"
            width={16}
            height={16}
          />
          <Link href="/engine" className="hover:underline hover:text-white">
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
        <div className="relative pt-24 pb-8">
          <ShopByVehicle />
        </div>

        <h2
          className="text-xl md:text-3xl  font-audiowide mt-8 mb-2 md:mb-6 pl-3 "
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          ENGINES
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
              <div className="flex items-center space-x-2">
                {/* <label htmlFor="sort-by" className="text-sm text-gray-300">
                  Sort by:
                </label> */}
                <select
                  id="sort-by"
                  className=" border bg-[#091b33] border-white shadow-2xl text-white text-sm rounded-md  focus:border-white px-5 py-2"
                >
                  <option className="text-white">Recommended</option>
                  <option className="text-white">Price: Low to High</option>
                  <option className="text-white">Price: High to Low</option>
                  <option className="text-white">Newest Arrivals</option>
                </select>
              </div>
            </div>
            {/* Mobile Filter Modal */}
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
                  <EngineFilterSidebar />
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden group"
                >
                  <Link
                    href="/product/engines"
                    className="block cursor-pointer"
                    tabIndex={-1}
                  >
                    {/* Image container */}
                    <div
                      className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)",
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
                      <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">
                        Stock image
                      </p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg pointer-events-none"></div>
                    <div className="relative z-20 pt-2">
                      <h3 className="text-white text-base mb-1">
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
                      <p className="text-xs text-gray-400 mb-2">
                        {item.warranty}
                      </p>
                    </div>
                  </Link>
                  <div className="flex justify-between items-center mt-3 relative z-30">
                    <span className="text-xl font-bold text-white">
                      {item.price}
                    </span>
                    <button
                      className={`bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors ${
                        inCartIdx === index
                          ? "bg-[#1d3759] cursor-default hover:bg-[#1d3759]"
                          : ""
                      }`}
                      disabled={inCartIdx === index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCartPopup(true);
                        setInCartIdx(index);
                        setTimeout(() => setShowCartPopup(false), 2000);
                      }}
                    >
                      {inCartIdx === index ? "In cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
              {showCartPopup && <AddedCartPopup />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
