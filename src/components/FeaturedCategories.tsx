"use client";
import Image from "next/image";
import React from "react";

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

  

  // { name: "Dodge", logo: "/Images/home/Makers-logos/car_logo (28).png" },
  // { name: "Ford", logo: "/Images/home/Makers-logos/car_logo (3).png" },
  // { name: "Infiniti", logo: "/Images/home/Makers-logos/car_logo (4).png" },
  // { name: "Kia", logo: "/Images/home/Makers-logos/car_logo (5).png" },
  // { name: "Mazda", logo: "/Images/home/Makers-logos/car_logo (6).png" },
  // { name: "Pontiac", logo: "/Images/home/Makers-logos/car_logo (7).png" },
  // { name: "Subaru", logo: "/Images/home/Makers-logos/car_logo (8).png" },
  // { name: "Volvo", logo: "/Images/home/Makers-logos/car_logo (9).png" },
  // { name: "Suzuki", logo: "/Images/home/Makers-logos/car_logo (10).png" },
  // { name: "Porsche", logo: "/Images/home/Makers-logos/car_logo (11).png" },
  // // { name: "Hyundai", logo: "/Images/home/Makers-logos/car_logo (12).png" },
  // { name: "mercedes", logo: "/Images/home/Makers-logos/car_logo (13).png" },
  // { name: "Landrover", logo: "/Images/home/Makers-logos/car_logo (14).png" },
  // { name: "Isuzu", logo: "/Images/home/Makers-logos/car_logo (15).png" },
  // { name: "Toyota", logo: "/Images/home/Makers-logos/car_logo (16).png" },
  // { name: "Saab", logo: "/Images/home/Makers-logos/car_logo (17).png" },
  // { name: "Lexus", logo: "/Images/home/Makers-logos/car_logo (18).png" },
  // { name: "Jaguar", logo: "/Images/home/Makers-logos/car_logo (19).png" },
  // { name: "Honda", logo: "/Images/home/Makers-logos/car_logo (20).png" },
  // { name: "Volkswagen", logo: "/Images/home/Makers-logos/car_logo (22).png" },
  // { name: "Saturn", logo: "/Images/home/Makers-logos/car_logo (23).png" },
  // { name: "Nissan", logo: "/Images/home/Makers-logos/car_logo (24).png" },
  // { name: "Lincoln", logo: "/Images/home/Makers-logos/car_logo (25).png" },
  // { name: "Jeep", logo: "/Images/home/Makers-logos/car_logo (26).png" },
  // { name: "Hyundai", logo: "/Images/home/Makers-logos/car_logo (27).png" },
  // // { name: "Chrysler", logo: "/Images/home/Makers-logos/car_logo (30).png" },
  // { name: "Chevrolet", logo: "/Images/home/Makers-logos/car_logo (31).png" },
  



  // { name: "Buick", logo: "/Images/home/Makers-logos/car_logo (29).png" },
  // { name: "Suzuki", logo: "/Images/home/Makers-logos/car_logo (30).png" },
  // { name: "Toyota", logo: "/Images/home/Makers-logos/car_logo (31).png" },
  // { name: "Volkswagen", logo: "/Images/home/Makers-logos/car_logo (32).png" },
  
];

const arrowIcon = "/Images/home/Makers-logos/arrows.png";

export default function FeaturedCategories() {
  return (
    <section className="w-full bg-[#091b33] flex flex-col items-center justify-center px-2 py-6 md:py-10">
      <div className="w-full max-w-7xl mx-auto px-2 md:px-14">

        <h2
          className="font-audiowide text-white text-2xl sm:text-4xl mt-10 mb-6 md:mb-0 tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.04em",
            color: "#fff",
          }}
        >
          AUTO PARTS FOR YOUR MAKE
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 md:mt-16 md:mb-20 md:gap-x-16 gap-y-4 md:gap-y-6 w-full max-w-6xl">
          {makers.slice(0, 33).map((maker, i) => (
            <div
              key={maker.name}
              className="flex items-center p-4 cursor-pointer justify-between text-white border-[#00A3FF] border-b hover:bg-[rgba(59,131,246,0.32)] hover:border-0 hover:rounded-md hover:shadow-[0_0_24px_4px_rgba(59,130,246,0.4)]  hover:outline-2 hover:outline-blue-500  hover:text-blue-400 transition-all"
              style={{ paddingBottom: 8, marginBottom: 8 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={maker.logo}
                  alt={maker.name}
                  width={24}
                  height={24}
                  style={{ objectFit: "contain" }}
                />
                <span
                  className=" text-sm sm:text-[18px]"
                  // style={{ fontFamily: "Audiowide, sans-serif" }}
                >
                  {maker.name}
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
      </div>
    </section>
  );
}
