"use client";
import ProductSection from "@/components/productSection";
import ShopByVehicle from "@/components/shopByVehicle";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const galleryImages = [
  "/Images/var.png",
  "/Images/main.png",
  "/Images/var.png",
  
];

const options = [
  "Select option...",
  "4.9L (VIN Y, 8th digit) from 2/3/91 (AIR inner manifold) E4OD transmission",
  "4.9L (VIN Y, 8th digit) from 2/3/91 (AIR inner manifold) w/o E4OD transmission",
  "4.9L (VIN Y, 8th digit) thru 2/2/91 (AIR inner head) E4OD transmission",
  "4.9L (VIN Y, 8th digit) thru 2/2/91 (AIR inner head) w/o E4OD transmission",
  "5.0L (VIN N, 8th digit)",
];

const accordionData = [
  {
    title: "Payment",
    content: "We accept all major credit cards, PayPal, and bank transfers. Secure checkout is guaranteed.",
  },
  {
    title: "Delivery",
    content: "Standard shipping 3-5 business days. Expedited options available at checkout. Tracking provided.",
  },
  {
    title: "Warranty",
    content:
      "You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3-5 business days to process a credit back to your account and 2-3 business days for the credit to appear on your account.\n\nEngine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.",
  },
];

export default function EngineProductPage() {
  const [selectedImg, setSelectedImg] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(2);

  return (
    <>
    {/* Breadcrumb at the very top */}
    <div className="w-full bg-[#091b33]">
      <div className="max-w-6xl mx-auto px-4 flex items-start gap-2 py-6 text-[#0F1E35] text-[15px] font-medium">
        <Link href="/" className="flex items-center"><Image src="/engine/HouseLine.png" alt="Home" width={20} height={20} /></Link>
        <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
        <Link href="/autoParts" className="text-gray-500 hover:underline">AutoParts</Link>
        <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
        <Link href="/engine" className="text-gray-500 hover:underline">Engine</Link>
        <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
        <span className="text-white">Engines</span>
      </div>
    </div>
    <div className="w-full bg-[#091b33]">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="py-22">
          <ShopByVehicle />
        </div>
      </div>
    </div>
    <div className=" pl-16 mx-auto w-full bg-[#091b33] flex flex-col md:flex-row gap-10 min-h-screen text-white py-10">
      {/* Left: Image Gallery */}
      <div className="flex flex-row items-start">
        {/* Thumbnails column */}
        <div className="flex flex-col gap-2">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`w-16 h-16 rounded-md overflow-hidden border ${selectedImg === i ? 'border-blue-400' : 'border-transparent'} cursor-pointer`}
              onClick={() => setSelectedImg(i)}
            >
              <Image src={img} alt="thumb" width={64} height={64} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        {/* Main image column */}
        <div className="ml-6">
          <div className="relative w-[300px] h-[300px] bg-[#12263A] rounded-lg flex flex-col items-center justify-center">
            <Image src={galleryImages[selectedImg]} alt="main" fill className="object-contain" />
            <span className="absolute bottom-2 right-2 text-xs text-gray-300">*Stock image</span>
          </div>
        </div>
      </div>
      {/* Right: Details */}
      <div className="flex-1 flex flex-col gap-1 max-w-xl">
        <h1 className="text-3xl font-audiowide font-bold tracking-wide uppercase">NAME ENGINE ASSEMBLY</h1>
        <div className="text-base text-gray-400 mb-2">Option: <span className="text-gray-400">4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission</span></div>
        <div className="mb-2">
          <select
            className="w-full bg-[#12263A] border border-[#1a2a44] rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedOption}
            onChange={e => setSelectedOption(Number(e.target.value))}
          >
            {options.map((opt, i) => (
              <option key={i} value={i}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="text-sm text-white mb-2">Availability: <span className="text-gray-400">2 parts in stock</span></div>
        <div className="flex items-end gap-4 mb-2">
          <span className="text-4xl font-bold">100$</span>
          <span className="text-2xl text-gray-400 line-through">100$</span>
        </div>
        <div className="flex gap-4 mb-4">
          <button className="flex-1 bg-[#00a3ff] text-white py-2 rounded  hover:bg-[#1558b0] transition">Add to cart</button>
          <button className="flex-1 bg-[#091b33] text-white py-2 rounded  border border-sky-400 hover:bg-[#1a2a44] transition">Buy in one click</button>
        </div>
        {/* Accordion */}
        <div className=" w-full">
          {accordionData.map((item, i) => (
            <div key={i} className="border-b border-white">
              <button
                className="w-full flex justify-between items-center py-3 text-lg font-semibold focus:outline-none"
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              >
                {item.title}
                <span className="ml-2 text-2xl">{openAccordion === i ? "-" : "^"}</span>
              </button>
              {openAccordion === i && (
                <div className="pb-4 text-gray-300 text-sm whitespace-pre-line">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <ProductSection />
    </>
  );
}
