"use client";

import Image from "next/image";
import FeaturedCategories from "@/components/FeaturedCategories";
import React from "react";
import ShopByVehicle from "@/components/shopByVehicle";

const transmissionTypes = [
  { name: "Manual Reset", img: "/transmission/images/manual.png" },
  { name: "Automatic", img: "/transmission/images/automatic.png" },
  { name: "CVT", img: "/transmission/images/cvt.png" },
  { name: "AMT", img: "/transmission/images/amt.png" },
  { name: "Electric", img: "/transmission/images/electric.png" },
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
        style={{
          fontFamily: "Audiowide, sans-serif",
          letterSpacing: "0.04em",
          color: "#fff",
        }}
      >
        Transmission FOR YOUR MAKE
      </h2>
      <div className="grid grid-cols-2  items-center md:grid-cols-4 gap-x-5 gap-y-6 w-full max-w-6xl">
        {makers.slice(0, 32).map((maker) => (
          <div
            key={maker.name}
            className="flex items-center justify-between border-b"
            style={{
              borderColor: "#00A3FF",
              paddingBottom: 8,
              marginBottom: 8,
            }}
          >
            <div className="flex items-center gap-3">
              <Image
                src={maker.logo}
                alt={maker.name}
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
              />
              <span
                className="text-white text-[12px] md:text-[15px] font-normal"
                style={{ fontFamily: "Audiowide, sans-serif" }}
              >
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
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative">
        <Image
          src="/transmission/title_img.png"
          alt="Transmission Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mt-6">
        <ShopByVehicle />
      </div>

      {/* Main content container for px-6 alignment */}
      <div className="px-6 max-w-6xl mx-auto md:mx-35">
        {/* Transmission Types */}
        <section className="py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 py-4 mt-8 mb-4">
            <a href="/">
              <Image
                src="/engine/HouseLine.png"
                alt="Home"
                width={24}
                height={24}
              />
            </a>
            <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
            <a href="/autoParts">
              <span className="text-gray-400 text-sm">AutoParts</span>
            </a>
            <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
            <span className="text-white text-sm">Transmission</span>
          </div>
          <h2
            className="text-white text-2xl  mb-6"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Transmission Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Manual Transmission */}
            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md h-full min-h-[240px]">
              <Image
                src="/transmission/images/manual.png"
                alt="Manual Transmission"
                fill
                className="object-cover opacity-75"
                style={{ zIndex: 0 }}
                priority={false}
              />
              <div className="absolute inset-0 flex flex-col p-4  z-10">
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    MANUAL TRANSMISSION
                  </h3>
                  <p className="text-white text-sm font-normal  mb-1">
                    Manual transmission where the driver manually selects gears,
                    providing more control and less energy loss
                  </p>
                </div>
                <button className="bg-[#00A3FF] text-white rounded-md py-1 w-full mt-auto  hover:bg-[#0086cc] transition">
                  View
                </button>
              </div>
            </div>
            {/* Automatic Transmission */}
            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md h-full min-h-[240px]">
              <Image
                src="/transmission/images/automatic.png"
                alt="Automatic Transmission"
                fill
                className="object-cover opacity-75"
                style={{ zIndex: 0 }}
                priority={false}
              />
              <div className="absolute inset-0 flex flex-col  p-4  z-10">
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    AUTOMATIC TRANSMISSION
                  </h3>
                  <p className="text-white text-sm font-normal leading-snug mb-4">
                    Transmission that automatically shifts gears without driver
                    intervention, offering convenience, especially in urban
                    driving
                  </p>
                </div>
                <button className="bg-[#00A3FF] text-white rounded-md py-1 w-full mt-auto hover:bg-[#0086cc] transition">
                  View
                </button>
              </div>
            </div>
            {/* CVT */}
            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md h-full min-h-[340px]">
              <Image
                src="/transmission/images/cvt.png"
                alt="CVT"
                fill
                className="object-cover opacity-75"
                style={{ zIndex: 0 }}
                priority={false}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4  z-10">
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    CONTINUOUSLY VARIABLE TRANSMISSION (CVT)
                  </h3>
                  <p className="text-white text-sm font-normal leading-snug mb-4">
                    Utilizes belts or chains to smoothly change the gear ratio,
                    ensuring smooth transitions and fuel efficiency
                  </p>
                </div>
                <button className="bg-[#00A3FF] text-white rounded-md py-1 w-full mt-auto hover:bg-[#0086cc] transition">
                  View
                </button>
              </div>
            </div>
            {/* AMT */}
            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md h-full min-h-[340px]">
              <Image
                src="/transmission/images/amt.png"
                alt="AMT"
                fill
                className="object-cover opacity-75"
                style={{ zIndex: 0 }}
                priority={false}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4  z-10">
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    AUTOMATED MANUAL TRANSMISSION (AMT)
                  </h3>
                  <p className="text-white text-sm font-normal leading-snug mb-4">
                    Automated manual transmission with manual mode, offering
                    auto convenience and manual control.
                  </p>
                </div>
                <button className="bg-[#00A3FF] text-white rounded-md py-1 w-full mt-auto hover:bg-[#0086cc] transition">
                  View
                </button>
              </div>
            </div>
            {/* Electric Transmission */}
            <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md h-full min-h-[340px]">
              <Image
                src="/transmission/images/electric.png"
                alt="Electric Transmission"
                fill
                className="object-cover opacity-75"
                style={{ zIndex: 0 }}
                priority={false}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4  z-10">
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{
                      fontFamily: "Audiowide, sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ELECTRIC TRANSMISSION
                  </h3>
                  <p className="text-white text-sm font-normal leading-snug mb-4">
                    Transmission for electric vehicles regulating the electric
                    motor's gears, featuring seamless shifting and high
                    efficiency
                  </p>
                </div>
                <button className="bg-[#00A3FF] text-white rounded-md py-1 w-full mt-auto hover:bg-[#0086cc] transition">
                  View
                </button>
              </div>
            </div>
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
