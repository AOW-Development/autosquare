"use client";
import Image from "next/image";
// import FFeaturedCategories from "@/components/FeaturedCategories.tsx";
import FeaturedCategories from "@/components/FeaturedCategories";

export default function EnginePage() {
  return (
    <div className="bg-[#091b33] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[320px] relative">
        <Image
          src="/engine/title_img.png"
          alt="Engine Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-6 py-4 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
        <Image src="/engine/HouseLine.png" alt="Home" width={20} height={20} />
        <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
        <span className="text-white">AutoParts</span>
        <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
        <span className="text-white">Engine</span>
      </div>
      {/* Engine Types Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">Engine Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Image src="/engine/img-1.png" alt="Engine Type 1" width={384} height={240} className="rounded-lg object-cover" />
            <span className="mt-2 text-base font-medium text-[#1E4A8F]">Engine Type 1</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/engine/hybrid.png" alt="Hybrid Engine" width={384} height={240} className="rounded-lg object-cover" />
            <span className="mt-2 text-base font-medium text-[#1E4A8F]">Hybrid Engine</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/engine/gasoline.png" alt="Gasoline Engine" width={384} height={240} className="rounded-lg object-cover" />
            <span className="mt-2 text-base font-medium text-[#1E4A8F]">Gasoline Engine</span>
          </div>
        </div>
      </section>
      {/* AutoMakes Section */}
      <FeaturedCategories />
    </div>
  );
}