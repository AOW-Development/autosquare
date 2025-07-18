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
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 ml-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-6 mt-8 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
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

        {/* Title */}
        <h2
          className="text-2xl font-bold text-white mt-8 mb-8 uppercase tracking-wide"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Engine Types
        </h2>

        {/* Engine Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GASOLINE */}
          <div className="relative flex flex-col items-center bg-[#11213a] rounded-lg overflow-hidden shadow-lg border border-[#1f2e47]">
            <Image
              src="/engine/img-1.png"
              alt="Engine Type 1"
              width={384}
              height={240}
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">GASOLINE</h3>
                <p className="text-white text-sm font-normal leading-snug mb-4">
                  Engines use gasoline as fuel and operate through internal
                  combustion with spark ignition. They are known for their high
                  power output and simplicity in maintenance
                </p>
              </div>
              <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-1 w-40 mt-2 hover:bg-[#0086cc] transition mb-3">
                View
              </button>
            </div>
          </div>

          {/* DIESEL */}
          <div className="relative flex flex-col items-center bg-[#11213a] rounded-lg overflow-hidden shadow-lg border border-[#1f2e47]">
            <Image
              src="/engine/desl.png"
              alt="Diesel Engine"
              width={384}
              height={240}
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">DIESEL</h3>
                <p className="text-white text-sm font-normal leading-snug mb-4">
                  Runs on diesel fuel, operates through internal combustion with
                  ignition from high-temperature compressed air, efficient with
                  high torque
                </p>
              </div>
              <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-1 w-40 mt-2 hover:bg-[#0086cc] transition mb-3">
                View
              </button>
            </div>
          </div>

          {/* HYBRID */}
          <div className="relative flex flex-col items-center bg-[#11213a] rounded-lg overflow-hidden shadow-lg border border-[#1f2e47]">
            <Image
              src="/engine/hybrid-engine.png"
              alt="Hybrid Engine"
              width={384}
              height={240}
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">HYBRID</h3>
                <p className="text-white text-sm font-normal leading-snug mb-4">
                  Hybrid engine combines with an electric motor, providing
                  dual-fuel operation, increased fuel efficiency, lower
                  emissions, and energy source flexibility
                </p>
              </div>
              <button className="bg-[#00A3FF] text-white font-semibold rounded-md py-1 w-40 mt-2 hover:bg-[#0086cc] transition mb-3">
                View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AutoMakes Section */}
      <FeaturedCategories />
    </div>
  );
}
