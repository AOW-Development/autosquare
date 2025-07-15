"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

import FeaturedCategories from "@/components/FeaturedCategories";
import WhyChooseUs from "@/components/whyChooseUs";

import ShopByVehicle from "@/components/shopByVehicle";
import CategoriesSection from "@/components/categories";
import TestimonialsSection from "@/components/testimonialsSection";

export default function Home() {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const headingRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const tl = gsap.timeline();
      tl.fromTo(
        headingRef.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          leftTextRef.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          rightTextRef.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<"
        );
    }
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <section className="relative w-full h-[250px] md:h-[450px] lg:h-[710px]">
        <Image
          src="/Images/img_banner.png"
          alt="Autoparts banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          <h1
            ref={headingRef}
            className="text-white text-2xl md:text-4xl lg:text-[64px] tracking-widest text-center"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            Move forward with us
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-2 pb-4">
            <span
              ref={leftTextRef}
              className="font-audiowide text-lg md:text-2xl lg:text-[32px] text-white text-center md:text-left"
              style={{ fontFamily: "Audiowide, sans-serif" }}
            >
              Your car, your choice,
            </span>
            <span
              ref={rightTextRef}
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
