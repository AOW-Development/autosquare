"use client";
import ShopByVehicle from "@/components/shopByVehicle";
import Image from "next/image";
import path from "path";
import { useState } from "react";

const PARTS = [
  {
    name: "air and fuel",
    images: [
      "carddfds (1).png",
      "carddfs.png",
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards.png",
    ],
  },
  {
    name: "axel",
    images: [
      "cards32.png",
      "cards-123.png",
      "cards-frontaxl.png",
      "cards (1).png",
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards.png",
    ],
  },
  {
    name: "brakes",
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards.png",
    ],
  },
  {
    name: "center body",
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards.png",
    ],
  },
  {
    name: "cooling and heating",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "doors",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "electrical",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-16.png",
      "cards-17.png",
      "cards-18.png",
      "cards-19.png",
      "cards-2.png",
      "cards-20.png",
      "cards-21.png",
      "cards-22.png",
      "cards-23.png",
      "cards-24.png",
      "cards-25.png",
      "cards-26.png",
      "cards-27.png",
      "cards-28.png",
      "cards-29.png",
      "cards-3.png",
      "cards-30.png",
      "cards-31.png",
      "cards-32.png",
      "cards-33.png",
      "cards-34.png",
      "cards-35.png",
      "cards-36.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "engine",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "Engine_Accessories",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-16.png",
      "cards-17.png",
      "cards-18.png",
      "cards-19.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "entertainment",
    images: ["cards-1.png", "cards-2.png", "cards-3.png", "cards.png"],
  },
  {
    name: "front body",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "glass and mirrors",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "interior",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-16.png",
      "cards-17.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "lights",
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards.png",
    ],
  },
  {
    name: "rear body",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-16.png",
      "cards-17.png",
      "cards-18.png",
      "cards-19.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "safety",
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards.png",
    ],
  },
  {
    name: "suspension or steering",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-12.png",
      "cards-13.png",
      "cards-14.png",
      "cards-15.png",
      "cards-16.png",
      "cards-17.png",
      "cards-18.png",
      "cards-19.png",
      "cards-2.png",
      "cards-20.png",
      "cards-21.png",
      "cards-22.png",
      "cards-23.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "transmission",
    images: [
      "cards-1.png",
      "cards-10.png",
      "cards-11.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards-6.png",
      "cards-7.png",
      "cards-8.png",
      "cards-9.png",
      "cards.png",
    ],
  },
  {
    name: "wheels",
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards-4.png",
      "cards-5.png",
      "cards.png",
    ],
  },
];

const getCardImages = (folder: string): string[] => {
  // This is static, so we just hardcode the pattern
  // In real app, use fs or API to list
  const base = `/autoparts/${folder}/`;
  // Just use cards*.png and cards (*).png
  const count: Record<string, number> = {
    "air and fuel": 7,
    axel: 9,
    brakes: 6,
    "center body": 7,
    "cooling and heating": 12,
    doors: 13,
    electrical: 36,
    engine: 10,
    Engine_Accessories: 19,
    entertainment: 3,
    "front body": 15,
    "glass and mirrors": 10,
    interior: 17,
    lights: 7,
    "rear body": 19,
    safety: 4,
    "suspension or steering": 23,
    transmission: 10,
    wheels: 5,
  };
  // Try cards-1.png ... cards-N.png, fallback to cards.png
  let imgs: string[] = [];
  for (let i = 1; i <= (count[folder] || 0); ++i) {
    imgs.push(`${base}cards-${i}.png`);
  }
  imgs.push(`${base}cards.png`);
  return imgs;
};

export default function AutoPartsPage() {
  // State to track which part is open on mobile
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Helper to toggle open/close
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#091b33] min-h-screen">
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative">
        <Image
          src="/Images/title_img (2).png"
          alt="Banner"
          fill
          className="object-cover bg-[#091B33] w-full h-full"
          priority
        />
      </div>
      <ShopByVehicle />
      {/* <div className="min-h-screen bg-[#091B33] pb-12"> */}
      <section className="max-w-6xl mx-auto md:mx-35 px-6 py-10">
        {/* Breadcrumb */}
        <div className="">
          {/* <div className="flex items-center gap-2 px-6 py-8 ">
            <Image
              src="/autoparts/HouseLine.png"
              alt="Home"
              width={24}
              height={24}
            />
            <Image src="/autoparts/arrows.png" alt=">" width={16} height={16} />
            <span className="text-white text-lg font-audiowide">
              Auto parts
            </span>
          </div> */}
          <div className="flex items-center gap-2  py-6 mt-8 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium ">
            <a href="/">
              <Image
                src="/autoparts/HouseLine.png"
                alt="Home"
                width={20}
                height={20}
              />
            </a>
            <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
            <span className="text-gray-500">AutoParts</span>
          </div>
        </div>
        {/* Grids */}
        <div className="flex flex-col gap-y-4 md:gap-y-12">
          {PARTS.map((part, idx) => (
            <div key={part.name} className="p-2 md:p-1 w-full">
              {/* Collapsible header for mobile */}
              <div
                className="mb-2 md:mb-4 text-white text-xl md:text-[32px] font-audiowide capitalize flex items-center justify-between md:block cursor-pointer md:cursor-default select-none"
                onClick={() => handleToggle(idx)}
              >
                <span
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  {part.name.replace(/_/g, " ")}
                </span>
                {/* Arrow only on mobile */}
                <span className="inline-block md:hidden ml-2 text-lg">
                  {openIndex === idx ? (
                    <Image
                      src="/autoparts/arrows.png"
                      alt=">"
                      width={14}
                      height={14}
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  ) : (
                    <Image
                      src="/autoparts/arrows.png"
                      alt=">"
                      width={14}
                      height={14}
                      className="w-4 h-4 md:w-5 md:h-5 rotate-270"
                    />
                  )}
                </span>
              </div>
              {/* Images: show on desktop, or if open on mobile */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4 transition-all duration-300 overflow-hidden
                  ${openIndex === idx ? "max-h-[1000px] mb-2" : "max-h-0 mb-0"}
                  md:max-h-none md:mb-0
                  ${
                    openIndex === idx || typeof window === "undefined"
                      ? ""
                      : "hidden"
                  }
                  md:grid`}
                style={{
                  display:
                    openIndex === idx || typeof window === "undefined"
                      ? undefined
                      : undefined,
                }}
              >
                {part.images.map((img) => (
                  <div
                    key={img}
                    className="w-full h-[48px] sm:h-[72px] md:h-[112px] rounded flex items-center justify-center"
                  >
                    <Image
                      src={`/autoparts/${part.name}/${img}`}
                      alt={part.name + " card"}
                      width={282}
                      height={112}
                      className="object-contain w-full h-auto max-h-[48px] sm:max-h-[72px] md:max-h-[112px]"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
