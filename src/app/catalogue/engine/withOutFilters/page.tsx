'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopByVehicle from '@/components/shopByVehicle';
import Footer from '@/components/footer';
import Header from '@/components/header';

const product = {
  title: 'Rear Wiper Motor',
  vehicle: 'Ford Bronco 1991',
  specs: 'Motor - Rear',
  condition: 'Genuine Used Part',
  grade: 'A Grade Condition',
  miles: '110k miles',
  warranty: '90 Days Warranty',
  price: '100$',
};

export default function CatalogPage() {
  return (
    <div className="bg-[#061C37] text-white min-h-screen">
    

      {/* Breadcrumbs */}
      <div className="px-6 pt-4">
        <nav className="max-w-7xl mx-auto text-sm text-gray-300">
          <Link href="/" className="hover:underline">Home</Link> &gt;
          <Link href="/auto-parts" className="hover:underline ml-1">Auto parts</Link> &gt;
          <span className="ml-1 text-white">A/C Controls</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Shop By Vehicle */}
        <div className="relative pt-24 pb-8">
          <ShopByVehicle />
        </div>

        {/* Page Heading - Applied Audiowide font */}
        <h2 className="text-3xl  mt-8 mb-6 font-audiowide">{product.title.toUpperCase()}</h2> {/* Use product title */}

        {/* Sort + Quantity (LEFT ALIGNED) */}
        <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
            {/* Quantity on the left */}
            <div className="text-sm text-gray-300">
              Quantity of products: <span className="font-semibold">1</span>
            </div>

            {/* Sort by on the right */}
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


        {/* Product Card */}
        {/* The card width is set to w-[300px] as per your provided code */}
        <div className="w-full max-w-[300px]">
          <div className="bg-[#0C2A4D] p-4 rounded-lg shadow-md hover:scale-[1.02] transition-all relative overflow-hidden">

            {/* Image container with white radial gradient background */}
            {/* Dimensions adjusted to fit within the w-[300px] card, maintaining aspect ratio */}
            <div className="relative mx-auto mb-3 flex justify-center items-center rounded-md"
                 style={{
                   background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(12, 42, 77, 0) 70%, transparent 100%)', // White glow fading to transparent
                   width: '250px', // Adjusted image container width for the 300px card
                   height: '160px', // Adjusted image container height
                 }}>
              <Image
                src="/catalog/card.png"
                alt={product.title} // Use product title for alt text
                width={250} // Adjusted image width
                height={160} // Adjusted image height
                className="relative z-10 rounded-md object-contain"
                priority
              />
              {/* "Stock image" text */}
              <p className="absolute bottom-2 right-2 text-xs text-gray-400 z-20">Stock image</p>
            </div>

            {/* Black Gradient/Shadow - significantly taller to reach content */}
            {/* This gradient covers the bottom portion of the card, fading upwards */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>

            {/* Content below the image (ensure these are above the gradient) */}
            <div className="relative z-20 pt-2"> {/* pt-2 to give space from the image */}
              {/* Applied Audiowide font to title */}
              <h3 className="text-white text-base mb-1 font-audiowide">{product.title}</h3>
              {/* Other text will inherit Exo 2 from global body styling */}
              <p className="text-sm text-gray-300 mb-1">{product.vehicle}</p>
              <p className="text-xs text-gray-400 mb-1">{product.specs}</p>
              <p className="text-xs text-gray-400 mb-1">{product.condition}</p>
              <p className="text-xs text-gray-400 mb-1">{product.grade}</p>
              <p className="text-xs text-gray-400 mb-1">{product.miles}</p>
              <p className="text-xs text-gray-400 mb-2">{product.warranty}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xl font-bold text-white">{product.price}</span>
                <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
