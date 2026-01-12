"use client";

import React from "react";
import { CarBrand } from "../data/cars";
import ShopByVehicle from "./shopByVehicle";

interface CarBrandInfoProps {
  car: CarBrand;
}

const CarBrandInfo: React.FC<CarBrandInfoProps> = ({ car }) => {
  if (!car) {
    return (
      <div className="w-full px-6 py-5 bg-[#07142B] text-white">
        Loading...
      </div>
    );
  }

  const { title, heroSection, sections = {} } = car;
  const sectionArray = Object.values(sections);

  return (
    <section className="w-full px-6 py-5 bg-[#07142B]">
      {/* SHOP BY VEHICLE — CENTERED */}
      <div className="max-w-6xl mx-auto flex justify-center mt-28 mb-10">
        <ShopByVehicle initialMake={car.id} />
      </div>

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:mt-28 mb-12">
        {/* LEFT — IMAGE */}
        {heroSection.image && (
          <div className="flex justify-center md:justify-start">
            <img
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              className="w-full max-w-md rounded-2xl shadow-xl"
            />
          </div>
        )}

        {/* RIGHT — TEXT */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-xl md:text-2xl mb-3 text-white">
            {heroSection.headline}
          </h3>

          <p className="text-[18px] leading-[30px] text-[#cecece]">
            {heroSection.description}
          </p>
        </div>
      </div>


      {/* ALL OTHER SECTIONS */}
      <div className="max-w-5xl mx-auto space-y-14">
        {sectionArray.map((sec, i) => (
          <div key={i} className="text-left">
            {sec.headline && (
              <h3 className="text-2xl mb-2 text-white font-semibold">
                {sec.headline}
              </h3>
            )}

            {sec.description && (
              <p className="text-[20px] text-[#cecece] leading-[34px] mb-3">
                {sec.description}
              </p>
            )}

            {sec.list && (
              <ul className="list-disc ml-6 space-y-2 text-[#cecece]">
                {sec.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {sec.points && (
              <ul className="list-disc ml-6 space-y-2 text-[#cecece]">
                {sec.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            )}

            {sec.models && (
              <ul className="list-disc ml-6 space-y-1 text-[#cecece]">
                {sec.models.map((model, idx) => (
                  <li key={idx}>{model}</li>
                ))}
              </ul>
            )}

            {sec.testimonials && (
              <ul className="space-y-3 italic text-[#cecece]">
                {sec.testimonials.map((t, idx) => (
                  <li key={idx}>"{t}"</li>
                ))}
              </ul>
            )}

            {sec.questions && (
              <div className="space-y-4">
                {sec.questions.map((q, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-white">
                      {q.question}
                    </h4>
                    <p className="text-[#cecece]">{q.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {sec.subsections &&
              Object.entries(sec.subsections).map(([_, sub], idx) => (
                <div key={idx} className="mt-6">
                  {sub.headline && (
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {sub.headline}
                    </h4>
                  )}

                  {sub.list && (
                    <ul className="list-disc ml-6 space-y-1 text-[#cecece]">
                      {sub.list.map((l, k) => (
                        <li key={k}>{l}</li>
                      ))}
                    </ul>
                  )}

                  {sub.exteriors && (
                    <ul className="list-disc ml-6 space-y-1 text-[#cecece]">
                      {sub.exteriors.map((l, k) => (
                        <li key={k}>{l}</li>
                      ))}
                    </ul>
                  )}

                  {sub.interiors && (
                    <ul className="list-disc ml-6 space-y-1 text-[#cecece]">
                      {sub.interiors.map((l, k) => (
                        <li key={k}>{l}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            {sec.cta && (
              <p className="mt-4 font-bold text-white">{sec.cta}</p>
            )}
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="w-full mt-20 py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#0E3A75] to-[#0A1F3D] text-center rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Find Quality {title} Parts Today?
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Get fast pricing, expert guidance, and nationwide delivery on quality
          used auto parts for your {title}.
        </p>

        <a
          href="/#lead-form"
          className="inline-block bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white px-7 sm:px-9 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:shadow-[0_0_30px_rgba(0,163,255,0.6)] transition-all duration-300 hover:opacity-90"
        >
          Find My Parts
        </a>
      </div>
    </section>
  );
};

export default CarBrandInfo;
