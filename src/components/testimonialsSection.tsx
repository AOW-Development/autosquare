import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Amma Bloomberg",
    text: "Extremely pleased with my experience at this online auto parts store.  I highly recommend this store to all car enthusiasts!",
    avatar: "/Images/Gender.png",
  },
  {
    name: "Stuart Borer",
    text: "This auto parts store is absolutely fantastic! A wide range of products, a user-friendly website, quick order processing, and on-time delivery. The quality of the parts is outstanding.",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Philip Christiansen",
    text: "Fantastic auto parts shop! Quick service, quality parts, and a user-friendly website. Highly recommended!",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Raymond Rippin",
    text: "Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Isabel D amore",
    text: "Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Virgil Shields",
    text: "Extremely pleased with my experience at this online auto parts store. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Santiago Beer",
    text: "Extremely pleased with my experience at this online auto parts store.  The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Nettie Oberbrunner",
    text: "Extremely pleased with my experience at this online auto parts store. The quality of the parts is top-notch.",
    avatar: "/Images/Gender (1).png",
  },
  {
    name: "Sandro Wehner",
    text: "Extremely pleased with my experience at this online auto parts store.  The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!",
    avatar: "/Images/Gender (1).png",
  },
];

function TestimonialCard({
  name,
  text,
  avatar,
}: {
  name: string;
  text: string;
  avatar: string;
}) {
  return (
    <div className="relative rounded-md border border-blue-400 bg-[#12263A] p-0  flex flex-col shadow-lg w-full max-w-[370px] min-h-[320px] overflow-hidden">
      <Image
        src="/Images/cards-bg.png"
        alt=""
        fill
        className="object-cover z-0 pointer-events-none"
        priority={false}
        quality={70}
      />
      <div className="relative z-10 flex items-center gap-3 px-6 pt-6">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="font-bold text-white text-xl mt-2">{name}</div>
          <div className="flex items-center gap-1 mt-0">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">
                ★
              </span>
            ))}
          </div>
        </div>
        <Image
          src="/account/google.png"
          alt="Google"
          width={34}
          height={34}
          className="ml-2 mb-4"
        />
      </div>
      <div className="relative z-10 px-6 pb-6 pt-4">
        <p className="text-white/80 text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

  // Responsive visible count
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide on mobile
  useEffect(() => {
    if (visibleCount === 1 && isAutoSliding) {
      autoSlideTimeout.current = setInterval(() => {
        setStart((prev) => {
          if (prev + 1 >= testimonials.length) return 0;
          return prev + 1;
        });
      }, 3000);
      return () => {
        if (autoSlideTimeout.current) clearInterval(autoSlideTimeout.current);
      };
    } else {
      if (autoSlideTimeout.current) clearInterval(autoSlideTimeout.current);
    }
  }, [visibleCount, isAutoSliding]);

  // Pause auto-slide for 5s if user interacts
  function handleManualNav(newStart: number) {
    setStart(newStart);
    setIsAutoSliding(false);
    if (autoSlideTimeout.current) clearInterval(autoSlideTimeout.current);
    setTimeout(() => setIsAutoSliding(true), 5000);
  }

  // Clamp start so we don't overflow
  useEffect(() => {
    if (start + visibleCount > testimonials.length) {
      setStart(Math.max(0, testimonials.length - visibleCount));
    }
  }, [visibleCount, start]);

  const visible = testimonials.slice(start, start + visibleCount);
  const canLeft = start > 0;
  const canRight = start + visibleCount < testimonials.length;

  return (
     <section className="w-full bg-[#091b33] flex flex-col items-center justify-center px-2 py-6 ">

      <div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">


        {/* Heading + Arrows Row */}
        <div className="flex items-center justify-between mt-10 mb-8 md:mb-14">
          <h2
            className="font-audiowide text-white text-2xl sm:text-4xl tracking-wide uppercase"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            TESTIMONIALS
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => canLeft && handleManualNav(start - 1)}
              disabled={!canLeft}
              className={`p-1 sm:p-2 ${!canLeft ? "cursor-not-allowed" : ""}`}
              aria-label="Previous"
            >
              <Image
                src="/Images/arrows (1).png"
                alt="Left"
                width={32}
                height={32}
              />
            </button>
            <button
              onClick={() => canRight && handleManualNav(start + 1)}
              disabled={!canRight}
              className={`p-1 sm:p-2 ${!canRight ? "cursor-not-allowed" : ""}`}
              aria-label="Next"
            >
              <Image
                src="/Images/arrows.png"
                alt="Right"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

          <div className="flex w-full justify-center px-2 lg:mx-3 gap-6 sm:px-8 transition-all duration-300">
            {visible.map((t, i) => (
              <div
                key={t.name + i}
                className="w-full max-w-sm sm:max-w-sm md:max-w-md"
              >
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              className="bg-[#00a3ff] text-white px-10 py-3 rounded-md text-lg  shadow-lg hover:bg-[#1558b0] transition"
              href="/Testimonials"
              passHref
            >
              {/* <a className="bg-[#00a3ff] text-white px-10 py-3 rounded-md text-lg font-semibold shadow-lg hover:bg-[#1558b0] transition"> */}
              View more
              {/* </a> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
