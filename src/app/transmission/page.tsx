"use client";

import Image from "next/image";
import React from "react";
import ShopByVehicle from "@/components/shopByVehicle";
import Link from "next/link";

// Local wrapper for tweaks
function TransmissionFeaturedCategories() {
  // Copy makers array from FeaturedCategories
  const makers = [
  { name: "Acura", logo: "/Images/home/Makers-logos/car_logo (1).png" },
  { name: "Audi", logo: "/Images/home/Makers-logos/audi.png" },
  { name: "BMW", logo: "/Images/home/Makers-logos/car_logo (21).png" },
  { name: "Buick", logo: "/Images/home/Makers-logos/car_logo (29).png" },
  { name: "Cadillac", logo: "/Images/home/Makers-logos/car_logo (2).png" },
  { name: "Chevrolet", logo: "/Images/home/Makers-logos/chevrolet.png" },
  { name: "Chrysler", logo: "/Images/home/Makers-logos/car_logo (31).png" },
  { name: "Dodge", logo: "/Images/home/Makers-logos/car_logo (28).png" },
  { name: "Ford", logo: "/Images/home/Makers-logos/car_logo (3).png" },
  { name: "GMC", logo: "/Images/home/Makers-logos/car_logo (27).png" },
  { name: "Honda", logo: "/Images/home/Makers-logos/car_logo (20).png" },
  { name: "Hyundai", logo: "/Images/home/Makers-logos/car_logo (27).png" },
  { name: "Infiniti", logo: "/Images/home/Makers-logos/car_logo (4).png" },
  { name: "Isuzu", logo: "/Images/home/Makers-logos/car_logo (15).png" },
  { name: "Jaguar", logo: "/Images/home/Makers-logos/car_logo (19).png" },
  { name: "Jeep", logo: "/Images/home/Makers-logos/car_logo (26).png" },
  { name: "Kia", logo: "/Images/home/Makers-logos/car_logo (5).png" },
  { name: "Land Rover", logo: "/Images/home/Makers-logos/car_logo (14).png" },
  { name: "Lexus", logo: "/Images/home/Makers-logos/car_logo (18).png" },
  { name: "Lincoln", logo: "/Images/home/Makers-logos/car_logo (25).png" },
  { name: "Mazda", logo: "/Images/home/Makers-logos/car_logo (6).png" },
  { name: "Mercedes-Benz", logo: "/Images/home/Makers-logos/car_logo (13).png" },
  { name: "Mitsubishi", logo: "/Images/home/Makers-logos/car_logo.png" },
  { name: "Nissan", logo: "/Images/home/Makers-logos/car_logo (24).png" },
  { name: "Pontiac", logo: "/Images/home/Makers-logos/car_logo (7).png" },
  { name: "Porsche", logo: "/Images/home/Makers-logos/car_logo (11).png" },
  { name: "Saab", logo: "/Images/home/Makers-logos/car_logo (17).png" },
  { name: "Saturn", logo: "/Images/home/Makers-logos/car_logo (23).png" },
  { name: "Subaru", logo: "/Images/home/Makers-logos/car_logo (8).png" },
  { name: "Suzuki", logo: "/Images/home/Makers-logos/car_logo (10).png" },
  { name: "Toyota", logo: "/Images/home/Makers-logos/car_logo (16).png" },
  { name: "Volkswagen", logo: "/Images/home/Makers-logos/car_logo (22).png" },
  { name: "Volvo", logo: "/Images/home/Makers-logos/car_logo (9).png" },

  ];
  const arrowIcon = "/Images/home/Makers-logos/arrows.png";
  return (
    <section className="w-full bg-[#091b33] py-8 md:py-16">
      {" "}
      {/* Adjusted vertical padding */}
      <h2
        className="text-xl sm:text-2xl md:text-[32px] font-normal mb-8 md:mb-12 md:-ml-6 text-white" // Adjusted font size and margin
        style={{
          fontFamily: "Audiowide, sans-serif",
          letterSpacing: "0.04em",
        }}
      >
        TRANSMISSION FOR YOUR MAKE
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-4 md:gap-x-12 gap-y-3 sm:gap-y-4 max-w-7xl md:mx-2 mx-auto">
        {" "}
        {/* Adjusted gap-x and gap-y */}
        {makers.slice(0, 33).map((maker) => (
          <div
            key={maker.name}
            className="flex items-center md:p-4 cursor-pointer justify-between text-white border-[#00A3FF] border-b hover:bg-[rgba(59,131,246,0.32)] hover:border-0 hover:rounded-md hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.4)]  hover:outline-2 hover:outline-blue-500  hover:text-blue-400 transition-all"
            style={{ paddingBottom: 8, marginBottom: 8 }}
          >
            <div className="flex items-center gap-2">
              {" "}
              {/* Simplified gap */}
              <Image
                src={maker.logo}
                alt={maker.name}
                width={18} // Adjusted image size for small screens
                height={18} // Adjusted image size for small screens
                className="object-contain "
              />
              <span
                className="text-xs sm:text-[18px]" // Adjusted font size
               
              >
                {maker.name + " Transmission"}
              </span>
            </div>
            <Image
              src={arrowIcon}
              alt="arrow"
              width={12} // Adjusted arrow size
              height={12} // Adjusted arrow size
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TransmissionPage() {
  return (
    <div className="bg-[#091b33] min-h-screen overflow-hidden">
      {/* Banner */}
      <div className="w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[320px] relative ">
        {" "}
        {/* Made banner height more responsive */}
        <Image
          src="/transmission/title_img.png"
          alt="Transmission Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mt-4 sm:mt-6 pl-4">
        {" "}
        {/* Adjusted top margin */}
        <ShopByVehicle />
      </div>

      {/* Main content container for px-6 alignment */}
      <div className=" max-w-7xl mx-auto px-4">
        {" "}
        {/* Adjusted horizontal padding */}
        {/* Transmission Types */}
         <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:pt-2">
          {/* Adjusted vertical padding */}
          {/* Breadcrumb */}
          <div className="md:mt-30 ">
            {" "}
            {/* Adjusted top padding */}
            <div className="flex items-center gap-1 sm:gap-2 py-2 sm:py-4 -mt-2 sm:mt-8 mb-2 sm:mb-4">
              {" "}
              {/* Adjusted gap, vertical padding, and margins */}
              <Link href="/">
                <Image
                  src="/engine/HouseLine.png"
                  alt="Home"
                  width={20}
                  height={20}
                />
              </Link>
              <Image src="/engine/arrows.png" alt=">" width={12} height={12} />{" "}
              {/* Adjusted arrow size */}
              <a href="/autoParts">
                <span className="text-gray-400 text-xs sm:text-lg">
                  AutoParts
                </span>{" "}
                {/* Adjusted font size */}
              </a>
              <Image src="/engine/arrows.png" alt=">" width={12} height={12} />{" "}
              {/* Adjusted arrow size */}
              <span className="text-white text-xs sm:text-lg">
                Transmission
              </span>{" "}
              {/* Adjusted font size */}
            </div>
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-[32px] mb-4 sm:mb-6 text-white"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            TRANSMISSION TYPES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 p-2 sm:p-4 pb-0">
            {" "}
            {/* Adjusted grid columns and gap */}
            {[
              {
                title: "MANUAL TRANSMISSION",
                desc: "Manual transmission where the driver manually selects gears, providing more control and less energy loss.",
                img: "/transmission/images/manual.png",
              },
              {
                title: "AUTOMATIC TRANSMISSION",
                desc: "Transmission that automatically shifts gears without driver intervention, offering convenience, especially in urban driving.",
                img: "/transmission/images/automatic.png",
              },
              {
                title: "CONTINUOUSLY VARIABLE TRANSMISSION (CVT)",
                desc: "Utilizes belts or chains to smoothly change the gear ratio, ensuring smooth transitions and fuel efficiency.",
                img: "/transmission/images/cvt.png",
              },
              {
                title: "AUTOMATED MANUAL TRANSMISSION (AMT)",
                desc: "Automated manual transmission with manual mode, offering auto convenience and manual control.",
                img: "/transmission/images/amt.png",
              },
              {
                title: "ELECTRIC TRANSMISSION",
                desc: "Transmission for electric vehicles regulating the electric motor's gears, featuring seamless shifting and high efficiency.",
                img: "/transmission/images/electric.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[270px] bg-black/50" // Adjusted card height
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60"
                  priority={false}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 z-10">
                  {" "}
                  {/* Adjusted padding */}
                  <div>
                    <h3
                      className="text-white text-base sm:text-[16px] md:text-[18px] font-extrabold leading-tight mt-4 sm:mt-8" // Adjusted font size and margin
                      style={{
                        fontFamily: "exo-2, sans-serif",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-lg font-light leading-snug mt-2 sm:mt-3 line-clamp-4">
                      {" "}
                      {/* Adjusted font size and margin */}
                      {item.desc}
                    </p>
                  </div>
                  <button className="bg-[#00A3FF] text-white rounded-md w-[140px] h-[34px] sm:w-[160px] sm:h-[36px] mb-2 md:mb-5 text-sm hover:bg-[#0086cc] transition">
                    {" "}
                    {/* Adjusted button size */}
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Featured Categories (tweaked) */}
        <div className="max-w-6xl mx-auto px-6 md:px-2 w-full md:mx-15 pt-0 pb-4 mt-0">
          {" "}
          {/* Removed px to avoid double padding */}
          <TransmissionFeaturedCategories />
        </div>
      </div>
    </div>
  );
}
