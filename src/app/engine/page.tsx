"use client";
import Image from "next/image";
// import FFeaturedCategories from "@/components/FeaturedCategories.tsx";
import FeaturedCategories from "@/components/FeaturedCategories";
import ShopByVehicle from "@/components/shopByVehicle";

export default function EnginePage() {
  return (
    <div className="bg-[#091b33] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative">
        <Image
          src="/engine/title_img.png"
          alt="Engine Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="z-10 absolute top-[30%] left-[30%] translate-x-[-30%] traslate-y-[-30%] md:top-[60%] md:left-[60%] md:translate-x-[-60%] md:translate-y-[-60%] w-full">
        <ShopByVehicle />
      </div>
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 px-4 pt-8 sm:px-28 md:pt-10 bg-[#091b33] text-xs sm:text-[15px] font-medium">
        <Image src="/engine/HouseLine.png" alt="Home" width={18} height={18} />
        <Image src="/engine/arrows.png" alt=">" width={14} height={14} />
        <span className="text-white">AutoParts</span>
        <Image src="/engine/arrows.png" alt=">" width={14} height={14} />
        <span className="text-white">Engine</span>
      </div>
      {/* Engine Types Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-wide">
          Engine Types
        </h2> */}
        <h2
          className="font-audiowide text-white text-xl sm:text-3xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 tracking-wide uppercase text-left w-full whitespace-nowrap"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Engine Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <Image
              src="/engine/img-1.png"
              alt="Engine Type 1"
              width={384}
              height={240}
              className="rounded-lg object-cover w-full h-[140px] sm:h-[180px] md:h-[200px]"
            />
            {/* <span className="mt-2 text-base font-medium text-[#1E4A8F]">Engine Type 1</span> */}
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/engine/desl.png"
              alt="Diesel Engine"
              width={384}
              height={240}
              className="rounded-lg object-cover w-full h-[140px] sm:h-[180px] md:h-[200px]"
            />
            {/* <span className="mt-2 text-base font-medium text-[#1E4A8F]">Hybrid Engine</span> */}
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/engine/hybrid-engine.png"
              alt="hybrid Engine"
              width={384}
              height={240}
              className="rounded-lg object-cover w-full h-[140px] sm:h-[180px] md:h-[200px]"
            />
            {/* <span className="mt-2 text-base font-medium text-[#1E4A8F]">Gasoline Engine</span> */}
          </div>
        </div>
      </section>
      {/* AutoMakes Section */}
      <FeaturedCategories />
    </div>
  );
}
