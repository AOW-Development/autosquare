"use client";
import Image from "next/image";

import FeaturedCategories from "@/components/FeaturedCategories";
import WhyChooseUs from "@/components/whyChooseUs";

import ShopByVehicle from "@/components/shopByVehicle";
import CategoriesSection from "@/components/categories";
import TestimonialsSection from "@/components/testimonialsSection";

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-[710px]">
        <Image
          src="/Images/img_banner.png"
          alt="Autoparts banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <h1
            className="font-audiowide text-white text-2xl md:text-4xl lg:text-[64px] tracking-widest text-center"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Move forward with us
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <span
              className="font-audiowide text-lg md:text-2xl lg:text-[32px] text-white text-center md:text-left"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Your car, your choice,
            </span>
            <span
              className="font-audiowide text-lg md:text-2xl lg:text-[32px] md:ml-2 text-[#00A3FF] text-center md:text-left"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              our parts
            </span>
          </div>
        </div>
      </section>
      {/* <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] traslate-y-[-50%] md:top-[130%] md:left-[130%] md:translate-x-[-130%] md:translate-y-[-130%] w-full"> */}
      <ShopByVehicle />
      {/* </div> */}
      <CategoriesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FeaturedCategories />
    </div>
  );
}
