"use client"
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
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="font-audiowide text-white text-[64px] tracking-widest"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              letterSpacing: '0.1em',
            }}
          >
            Move forward with us
          </h1>
          <div className=" flex flex-row items-center">
            <span
              className="font-audiowide text-[32px]"
              style={{ color: '#fff', fontFamily: 'Audiowide, sans-serif' }}
            >
              Your car, your choice,
            </span>
            <span
              className="font-audiowide text-[32px] ml-2"
              style={{ color: '#00A3FF', fontFamily: 'Audiowide, sans-serif' }}
            >
              our parts
            </span>
          </div>
        </div>
      </section>
      <ShopByVehicle />
      <CategoriesSection /> 
      <WhyChooseUs />
      <TestimonialsSection />
      <FeaturedCategories />
     
    </div>
  );
}
