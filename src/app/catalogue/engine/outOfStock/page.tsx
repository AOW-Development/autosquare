'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopByVehicle from '@/components/shopByVehicle';
import Footer from '@/components/footer';
import Header from '@/components/header';

const dummyData = [
  {
    title: 'Engine assembly',
    vehicle: 'Ford Bronco 1991',
    specs: '4.9L',
    condition: 'Genuine Used Part',
    grade: 'A Grade Condition',
    miles: '110k miles',
    warranty: '90 Days Warranty',
    price: '100$',
  }
];

export default function CatalogPage() {
  return (
    <div className="bg-[#061C37] text-white min-h-screen font-exo-2">
     

      {/* Breadcrumbs */}
      <div className="px-6 pt-4">
        <nav className="max-w-7xl mx-auto text-sm text-gray-300">
          <Link href="/" className="hover:underline">Home</Link> &gt;
          <Link href="/auto-parts" className="hover:underline ml-1">Auto parts</Link> &gt;
          <span className="ml-1 text-white">Engines</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Shop by Vehicle */}
        <div className="relative pt-24 pb-8">
          <ShopByVehicle />
        </div>

        {/* Heading */}
        <h2 className="text-3xl mt-8 mb-6 font-audiowide">Engines 4.9L E4OD transmission</h2>

        <div className="flex gap-6">
          {/* Left Filter Sidebar */}
          <aside className="w-[250px] text-sm flex-shrink-0">
            <div className="mb-6 bg-[#0C2A4D] p-4 rounded-lg">
              <h3 className="mb-3 font-audiowide">CHOOSE YOUR SPECIFICATION</h3>
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
              </ul>
            </div>
          </aside>

          {/* Product Card */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-300">
                Quantity of products: <span className="font-semibold">{dummyData.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort-by" className="text-sm text-gray-300">Sort by:</label>
                <select
                  id="sort-by"
                  className="bg-[#0C2A4D] border border-gray-700 text-white text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 p-2.5"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0C2A4D] w-[250px] h-[350px] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative flex flex-col justify-between overflow-hidden"
                >
                  {/* Top: Image */}
                  <div
                    className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)',
                      width: '180px',
                      height: '117px',
                    }}
                  >
                    <Image
                      src="/catalog/card.png"
                      alt="Engine"
                      width={180}
                      height={117}
                      className="relative z-10 rounded-md object-contain"
                      priority
                    />
                    <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">Stock image</p>
                  </div>

                  {/* Shadow gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-0 rounded-b-lg"></div>

                  {/* Details + Button */}
                  <div className="relative z-20 flex flex-col flex-grow">
              <div>
                <h3 className="text-white text-base mb-1 font-audiowide">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{item.vehicle}</p>
                <p className="text-xs text-gray-400 mb-1">{item.specs}</p>
                <p className="text-xs text-gray-400 mb-1">{item.condition}</p>
                <p className="text-xs text-gray-400 mb-1">{item.grade}</p>
                <p className="text-xs text-gray-400 mb-1">{item.miles}</p>
                <p className="text-xs text-gray-400 mb-4">{item.warranty}</p> {/* Add mb-4 here instead */}
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
