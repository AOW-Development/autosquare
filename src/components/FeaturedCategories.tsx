

"use client";
import Image from "next/image";
import React from "react";

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

export default function FeaturedCategories() {
  return (
    <section className="w-full min-h-screen bg-[#091b33] flex flex-col items-center py-12">
      <h2
        className="text-[32px] font-normal mb-6"
        style={{
          fontFamily: "Audiowide, sans-serif",
          letterSpacing: "0.04em",
          color: "#fff",
        }}
      >
        AUTO PARTS FOR YOUR MAKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-6 w-full max-w-6xl">
        {makers.slice(0, 32).map((maker, i) => (
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
    </section>
  );
}