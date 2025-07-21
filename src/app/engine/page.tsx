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
     <section className="max-w-6xl mx-auto px-6 md:px-6 -py-2 md:py-12 mt-6">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center px-4 sm:px-4 md:px-4 lg:px-3 xl:px-3 2xl:px-3 gap-2 py-4 mt-6 bg-[#091b33] text-[#0F1E35] text-sm sm:text-[15px] font-medium">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-4 md:px-8">
          {/* CARD TEMPLATE */}
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
              className="relative flex flex-col items-center bg-[#11213a] rounded-lg overflow-hidden shadow-lg border border-[#1f2e47]"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={384}
                height={240}
                className="object-cover w-full h-48 sm:h-60 opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm leading-snug mb-4">{item.desc}</p>
                </div>
                <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-2 w-full sm:w-40 mt-2 hover:bg-[#0086cc] transition mb-3">
                  View
                </button>
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
