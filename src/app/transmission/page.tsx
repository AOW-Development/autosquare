

import Image from "next/image";
import FeaturedCategories from "@/components/FeaturedCategories";
import React from "react";

const transmissionTypes = [
  { name: "Electric", img: "/transmission/electric.png" },
  { name: "CVT", img: "/transmission/cvt.png" },
  { name: "AMT", img: "/transmission/amt.png" },
  { name: "Automatic", img: "/transmission/automatic.png" },
  { name: "Manual Reset", img: "/transmission/manualreset.png" },
];

// Local wrapper for tweaks
function TransmissionFeaturedCategories() {
  // Copy makers array from FeaturedCategories
  const makers = [
    { name: "Acura", logo: "/Images/home/Makers-logos/car_logo (1).png" },
    { name: "Audi", logo: "/Images/home/Makers-logos/car_logo (2).png" },
    { name: "BMW", logo: "/Images/home/Makers-logos/car_logo (3).png" },
    { name: "Buick", logo: "/Images/home/Makers-logos/car_logo (4).png" },
    { name: "Cadillac", logo: "/Images/home/Makers-logos/car_logo (5).png" },
    { name: "Chevrolet", logo: "/Images/home/Makers-logos/car_logo (6).png" },
    { name: "Chrysler", logo: "/Images/home/Makers-logos/car_logo (7).png" },
    { name: "Dodge", logo: "/Images/home/Makers-logos/car_logo (8).png" },
    { name: "Ford", logo: "/Images/home/Makers-logos/car_logo (9).png" },
    { name: "GMC", logo: "/Images/home/Makers-logos/car_logo (10).png" },
    { name: "Honda", logo: "/Images/home/Makers-logos/car_logo (11).png" },
    { name: "Hyundai", logo: "/Images/home/Makers-logos/car_logo (12).png" },
    { name: "Infiniti", logo: "/Images/home/Makers-logos/car_logo (13).png" },
    { name: "Isuzu", logo: "/Images/home/Makers-logos/car_logo (14).png" },
    { name: "Jaguar", logo: "/Images/home/Makers-logos/car_logo (15).png" },
    { name: "Jeep", logo: "/Images/home/Makers-logos/car_logo (16).png" },
    { name: "Kia", logo: "/Images/home/Makers-logos/car_logo (17).png" },
    { name: "Landrover", logo: "/Images/home/Makers-logos/car_logo (18).png" },
    { name: "Lexus", logo: "/Images/home/Makers-logos/car_logo (19).png" },
    { name: "Lincoln", logo: "/Images/home/Makers-logos/car_logo (20).png" },
    { name: "Mazda", logo: "/Images/home/Makers-logos/car_logo (21).png" },
    { name: "Mercedes", logo: "/Images/home/Makers-logos/car_logo (22).png" },
    { name: "Mitsubishi", logo: "/Images/home/Makers-logos/car_logo (23).png" },
    { name: "Nissan", logo: "/Images/home/Makers-logos/car_logo (24).png" },
    { name: "Pontiac", logo: "/Images/home/Makers-logos/car_logo (25).png" },
    { name: "Porsche", logo: "/Images/home/Makers-logos/car_logo (26).png" },
    { name: "Saab", logo: "/Images/home/Makers-logos/car_logo (27).png" },
    { name: "Saturn", logo: "/Images/home/Makers-logos/car_logo (28).png" },
    { name: "Subaru", logo: "/Images/home/Makers-logos/car_logo (29).png" },
    { name: "Suzuki", logo: "/Images/home/Makers-logos/car_logo (30).png" },
    { name: "Toyota", logo: "/Images/home/Makers-logos/car_logo (31).png" },
    { name: "Volkswagen", logo: "/Images/home/Makers-logos/car_logo (32).png" },
    { name: "Volvo", logo: "/Images/home/Makers-logos/car_logo.png" },
  ];
  const arrowIcon = "/Images/home/Makers-logos/arrows.png";
  return (
    <section className="w-full bg-[#091b33] flex flex-col py-12">
      <h2
        className="text-[32px] font-normal mb-6"
        style={{ fontFamily: "Audiowide, sans-serif", letterSpacing: "0.04em", color: "#fff" }}
      >
        Transmission FOR YOUR MAKE
      </h2>
      <div className="grid grid-cols-1  items-center sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-6 w-full max-w-6xl">
        {makers.slice(0, 32).map((maker) => (
          <div
            key={maker.name}
            className="flex items-center justify-between border-b"
            style={{ borderColor: "#00A3FF", paddingBottom: 8, marginBottom: 8 }}
          >
            <div className="flex items-center gap-3">
              <Image
                src={maker.logo}
                alt={maker.name}
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
              <span className="text-white text-[15px] font-normal" style={{ fontFamily: "Audiowide, sans-serif" }}>
                {maker.name + " Transmission"}
              </span>
            </div>
            <Image
              src={arrowIcon}
              alt="arrow"
              width={18}
              height={18}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TransmissionPage() {
  return (
    <div className="bg-[#091b33] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[320px] relative">
        <Image src="/transmission/title_img.png" alt="Transmission Banner" fill style={{objectFit:'cover'}} priority />
      </div>
      {/* Main content container for px-6 alignment */}
      <div className="px-6 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4">
          <Image src="/engine/HouseLine.png" alt="Home" width={24} height={24} />
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <span className="text-white text-sm">AutoParts</span>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <span className="text-white text-sm font-semibold">Transmission</span>
        </div>
        {/* Transmission Types */}
        <section className="py-8">
          <h2 className="text-white text-2xl font-bold mb-6">Transmission Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {transmissionTypes.map((type) => (
              <div key={type.name} className="flex flex-col items-center bg-[#13294b] rounded-lg overflow-hidden shadow-md">
                <Image src={type.img} alt={type.name} width={384} height={240} className="object-cover" />
                {/* <span className="text-white text-lg font-medium py-3">{type.name}</span> */}
              </div>
            ))}
          </div>
        </section>
      
      {/* Featured Categories (tweaked) */}
      <div className="max-w-6xl mx-auto w-full">
        <TransmissionFeaturedCategories />
      </div>
      </div>
    </div>
  );
}