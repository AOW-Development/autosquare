"use client";
import Image from "next/image";
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

      <ShopByVehicle />

      {/* Engine Types Section */}
     <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 sm:py-8 md:pt-18">

        {/* Breadcrumb */}
    <div className="flex flex-wrap items-center px-2 sm:px-4 md:px-8 lg:px-3 xl:px-3 2xl:px-3 gap-2 md:py-6 bg-[#091b33] text-[#0F1E35] text-sm sm:text-[15px] font-medium">
      <a href="/">
        <Image src="/engine/HouseLine.png" alt="Home" width={20} height={20} />
      </a>
      <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
      <a href="/autoParts">
        <span className="text-gray-500">AutoParts</span>
      </a>
      <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
      <span className="text-white">Engine</span>
    </div>

    <h2
      className="text-[24px] sm:text-[28px] md:text-[32px] text-white mt-4 mb-6 px-2 sm:px-4 md:px-4 lg:px-3 xl:px-3 2xl:px-3 uppercase tracking-wide"
      style={{
        fontFamily: "Audiowide, sans-serif",
        letterSpacing: "0.1em",
      }}
    >
      Engine Types
    </h2>


        {/* Engine Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-4 md:px-6">
          {[
            {
              title: "GASOLINE",
              img: "/engine/img-1.png",
              desc:
                "Engines use gasoline as fuel and operate through internal combustion with spark ignition. They are known for their high power output and simplicity in maintenance.",
            },
            {
              title: "DIESEL",
              img: "/engine/desl.png",
              desc:
                "Runs on diesel fuel, operates through internal combustion with ignition from high-temperature compressed air, efficient with high torque.",
            },
            {
              title: "HYBRID",
              img: "/engine/hybrid-engine.png",
              desc:
                "Hybrid engine combines with an electric motor, providing dual-fuel operation, increased fuel efficiency, lower emissions, and energy source flexibility.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative bg-[#11213a] rounded-lg overflow-hidden shadow-lg border border-[#1f2e47] w-full max-w-[384px] h-[240px] mx-auto"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover w-full h-full opacity-60"
              />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-3">
              <div>
                <h3 className="text-white text-xl sm:text-base font-bold mb-1 mt-6 md:mt-8">
                  {item.title}
                </h3>
                <p className="text-white text-[14px] leading-snug line-clamp-4 sm:line-clamp-5">
                  {item.desc}
                </p>
              </div>

              <div className="w-full flex justify-left">
                <button className="w-34 h-8 md:h-10 sm:w-40 mb-4  bg-[#00A3FF] text-white text-xs sm:text-sm font-semibold rounded-md py-1.5 hover:bg-[#0086cc] transition duration-200">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      </section>

      {/* AutoMakes Section */}
      <FeaturedCategories />
    </div>
  );
}
