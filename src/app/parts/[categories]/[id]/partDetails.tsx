"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import ShopByVehicle from "@/components/shopByVehicle";
import FeaturedCategories from "@/components/FeaturedCategories";
import { PARTS } from "@/data/parts";

/* ---------------- helpers ---------------- */
const normalize = (value?: string | string[]) => {
   if (!value) return "";

  const val = Array.isArray(value) ? value[0] : value;

  return val
    .toLowerCase()
    // IMPORTANT: longest first
    .replace(/--/g, "/")  // slash
    .replace(/-/g, " ")   // space
    .replace(/\s+/g, " ")
    .trim();
};

const renderBoldText = (text: string) => {
  return text.split(/(\*\*.*?\*\*)/g).map((chunk, index) => {
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return (
        <strong key={index}>
          {chunk.replace(/\*\*/g, "")}
        </strong>
      );
    }
    return chunk;
  });
};

const ContentSection = ({
  title,
  text,
  points,
  conclusion,
}: {
  title: string;
  text?: string[];
  points?: string[];
  conclusion?: string;
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-white text-lg md:text-xl font-semibold mb-4">
        {title}
      </h3>

      {text?.map((paragraph, idx) => (
        <p
          key={idx}
          className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4"
        >
          {renderBoldText(paragraph)}
        </p>
      ))}

      {points && (
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-[15px] mb-4">
          {points.map((point, idx) => (
            <li key={idx}>{renderBoldText(point)}</li>
          ))}
        </ul>
      )}

      {conclusion && (
        <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mt-4">
          {renderBoldText(conclusion)}
        </p>
      )}
    </div>
  );
};

/* ---------------- component ---------------- */

export default function PartDetailPage() {
  const params = useParams();

  const normalizedCategory = normalize(params?.categories);
  const normalizedPartName = normalize(params?.id);


  const part = PARTS.find(
    (p) =>
      p.name.toLowerCase() === normalizedPartName &&
      p.category?.toLowerCase() === normalizedCategory
  );

  if (!part) {
    notFound();
  }

  return (
    <div className="bg-[#091b33] min-h-screen">
      {/* Banner */}
      <div className="w-full h-[160px] sm:h-[240px] md:h-[280px] lg:h-[320px] relative">
        {/* Background Image */}
        <Image
          src="/engine/only_engine.png"
          alt={`${part.name} Banner`}
          fill
          className="object-cover"
          priority
        />


        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-center px-4" style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}>
            {part.name}
          </h1>
        </div>
      </div>


      <ShopByVehicle />

      {/* Main Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 lg:pt-24 pt-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/">
            <Image
              src="/engine/HouseLine.png"
              alt="Home"
              width={20}
              height={20}
            />
          </a>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <a href="/autoParts">AutoParts</a>
          <Image src="/engine/arrows.png" alt=">" width={16} height={16} />
          <span className="text-white">{part.name}</span>
        </div>

        {/* Heading */}
        <h2
          className="text-[24px] sm:text-[28px] md:text-[32px] text-white mb-8 uppercase tracking-wide"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          {part.name}
        </h2>

        {/* Content */}
        <div className="bg-[#11213a] rounded-xl shadow-lg border border-[#1f2e47] p-6 md:p-8">
          {Object.values(part.desc).map((section: any, index) => (
            <ContentSection
              key={index}
              title={section.title}
              text={section.text}
              points={section.points}
              conclusion={section.conclusion}
            />
          ))}
        </div>
      </section>

      <FeaturedCategories />
    </div>
  );
}
