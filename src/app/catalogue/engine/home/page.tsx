'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopByVehicle from '@/components/shopByVehicle';
import Footer from '@/components/footer';
import Header from '@/components/header';

const dummyData = new Array(15).fill({
  title: 'Engine assembly',
  vehicle: 'Ford bronco 1991',
  specs: '4.9L',
  condition: 'Genuine Used Part',
  grade: 'A Grade Condition',
  miles: '110k miles',
  warranty: '90 Days Warranty',
  price: '100$'
});

export default function CatalogPage() {
  return (
    <div className="bg-[#061C37] text-white min-h-screen">
     

      {/* Breadcrumbs */}
      <div className="px-6 pt-4">
        <nav className="max-w-7xl mx-auto text-sm text-gray-300">
          <Link href="/" className="hover:underline">Home</Link> &gt;
          <Link href="/auto-parts" className="hover:underline ml-1">Auto parts</Link> &gt;
          <Link href="/engine" className="hover:underline ml-1">Engine</Link> &gt;
          <span className="ml-1 text-white">Engines</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="relative pt-24 pb-8">
          <ShopByVehicle />
        </div>

        <h2 className="text-3xl  font-audiowide mt-8 mb-6">ENGINES</h2>

        {/* Filters + Cards Section */}
        <div className="flex gap-6">
          {/* Filter Sidebar */}
          <aside className="w-[250px] text-sm flex-shrink-0">
            {/* CHOOSE YOUR SPECIFICATION */}
            <div className="mb-6 bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className=" mb-3">CHOOSE YOUR SPECIFICATION</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-white">4.9L</p>
                  <p className="text-xs text-gray-400">from 2/3/91 (AIR inner manifold)</p>
                  <Link href="#" className="text-sky-400 hover:underline text-xs">E40D transmission</Link><br />
                  <Link href="#" className="text-sky-400 hover:underline text-xs">w/o E40D transmission</Link>
                </li>
                <li className="mt-3">
                  <p className="text-white">thru 2/2/91 (AIR inner head)</p>
                  <Link href="#" className="text-sky-400 hover:underline text-xs">E40D transmission</Link><br />
                  <Link href="#" className="text-sky-400 hover:underline text-xs">w/o E40D transmission</Link>
                </li>
                <li className="mt-3">
                  <p className="text-white">5.0L</p>
                  <p className="text-xs text-gray-400">VIN N, 8th digit</p>
                </li>
                <li className="mt-3">
                  <p className="text-white">5.8L</p>
                  <p className="text-xs text-gray-400">VIN H, 8th digit, 8-35TW</p>
                </li>
              </ul>
            </div>

            {/* PRICE RANGE */}
            <div className="mb-6 bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className=" mb-3">PRICE RANGE</h3>
              <div className="flex gap-2 mb-3">
                <input type="number" placeholder="0" className="w-1/2 bg-gray-700 border border-gray-600 rounded-md p-2 text-sm text-white focus:ring-sky-500 focus:border-sky-500" />
                <input type="number" placeholder="100000" className="w-1/2 bg-gray-700 border border-gray-600 rounded-md p-2 text-sm text-white focus:ring-sky-500 focus:border-sky-500" />
              </div>
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                Filter
              </button>
            </div>

            {/* STATE */}
            <div className="mb-6 bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className=" mb-3">STATE</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                Used
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                New
              </label>
            </div>

            {/* CAR MILEAGE, MILES */}
            <div className="mb-6 bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className=" mb-3">CAR MILEAGE, MILES</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                Up to 50 thousand
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                50-100 thousand
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                100-150 thousand
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                150-200 thousand
              </label>
            </div>

            {/* CONDITION */}
            <div className="bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className=" mb-3">CONDITION</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                Excellent
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600" />
                Very Good
              </label>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <main className="flex-1">
            {/* Quantity and Sort */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-300">
                Quantity of products: <span className="font-semibold">{dummyData.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort-by" className="text-sm text-gray-300">Sort by:</label>
                <select
                  id="sort-by"
                  className="bg-[#1D3759] border border-gray-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyData.map((item, index) => (
                <div key={index} className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden">

                  {/* Image container with a stronger white radial gradient background */}
                  <div className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                       style={{
                         background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)', // Increased white glow opacity
                         width: '250px',
                         height: '160px',
                       }}>
                    <Image
                      src="/catalog/card.png"
                      alt="Engine"
                      width={250}
                      height={160}
                      className="relative z-10 rounded-md object-contain"
                      priority
                    />
                    {/* "Stock image" text */}
                    <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">Stock image</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>
                  <div className="relative z-20 pt-2">
                    <h3 className=" text-white text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-1">{item.vehicle}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.specs}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.condition}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.grade}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.miles}</p>
                    <p className="text-xs text-gray-400 mb-2">{item.warranty}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xl font-bold text-white">{item.price}</span>
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