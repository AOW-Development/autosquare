"use client";

import Image from "next/image";
import ShopByVehicle from "@/components/shopByVehicle";
import FeaturedCategories from "@/components/FeaturedCategories";

type Props = {
  part: any;
};

/* -------- helper to bold **double-star text** -------- */
const renderWithBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

export default function PartDetailPage({ part }: Props) {
  const sections = part.desc ? Object.values(part.desc) : [];

  return (
    <div className="bg-[#091b33] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[160px] sm:h-[240px] md:h-[280px] lg:h-[320px] relative">
        <Image
          src="/engine/only_engine.png"
          alt={`${part.name} Banner`}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-audiowide uppercase text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl text-center px-4 tracking-wide">
            {part.name}
          </h1>
        </div>
      </div>

      <ShopByVehicle />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pt-24 pt-16">
        <h2 className="font-audiowide uppercase tracking-wide text-2xl sm:text-4xl text-white mb-8">
          {part.name}
        </h2>

        <div className="bg-[#11213a] rounded-xl shadow-lg border border-[#1f2e47] p-6 md:p-8">
          {sections.map((section: any, index: number) => (
            <div key={index} className="mb-10">
              <h3 className="font-audiowide text-base md:text-lg font-bold text-white mb-4">
                {section.title}
              </h3>

              {section.text?.map((t: string, i: number) => (
                <p
                  key={i}
                  className="font-exo2 text-white text-sm md:text-lg mb-4 leading-relaxed"
                >
                  {renderWithBold(t)}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <FeaturedCategories />
    </div>
  );
}
