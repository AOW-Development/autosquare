"use client";
import Image from "next/image";
import path from "path";

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
    images: [
      "cards-1.png",
      "cards-2.png",
      "cards-3.png",
      "cards.png",
    ],
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
    "axel": 9,
    "brakes": 6,
    "center body": 7,
    "cooling and heating": 12,
    "doors": 13,
    "electrical": 36,
    "engine": 10,
    "Engine_Accessories": 19,
    "entertainment": 3,
    "front body": 15,
    "glass and mirrors": 10,
    "interior": 17,
    "lights": 7,
    "rear body": 19,
    "safety": 4,
    "suspension or steering": 23,
    "transmission": 10,
    "wheels": 5,
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
  return (
    <>
      <div className="w-full h-[320px] relative">
        <Image src="/Images/title_img (2).png" alt="Banner" fill className="object-cover w-full h-full" priority />
      </div>
      <div className="min-h-screen bg-[#091B33] pb-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 px-6 py-8">
          <Image src="/autoparts/HouseLine.png" alt="Home" width={24} height={24} />
          <Image src="/autoparts/arrows.png" alt=">" width={16} height={16} />
          <span className="text-white text-lg font-audiowide">Auto parts</span>
        </div>
        {/* Grids */}
        <div className="flex flex-col gap-y-12 px-6">
          {PARTS.map((part) => (
            <div key={part.name} className="p-4 w-full">
              <div className="mb-4 text-white text-[32px] font-audiowide capitalize">{part.name.replace(/_/g, ' ')}</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {part.images.map((img) => (
                  <div key={img} className="w-full h-[56px] md:h-[112px] bg-[#1A3557] rounded flex items-center justify-center">
                    <Image
                      src={`/autoparts/${part.name}/${img}`}
                      alt={part.name + " card"}
                      width={282}
                      height={112}
                      className="object-contain w-full h-auto"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
