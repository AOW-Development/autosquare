// src/components/whyChooseUs.tsx

import Image from "next/image";

const cards = [
  {
    icon: "/Images/home/whychooseus/Vector.png",
    title: "Shipping's on Us",
    desc: "Get your ordered parts delivered expeditiously. Initial shipping on All Orders is FREE! (*T&C Apply)",
  },
  {
    icon: "/Images/home/whychooseus/easy-replacement-logo.png",
    title: "Easy Replacements",
    desc: "Enjoy peace of mind with easy returns and replacements",
  },
  {
    icon: "/Images/home/whychooseus/reliability.png",
    title: "Reliability",
    desc: "We offer reliable and quality used OEM Auto Parts, Engines and Transmissions",
  },
  {
    icon: "/Images/home/whychooseus/waranty.png",
    title: "Warranty",
    desc: "We provide a standard warranty on all Engines & Transmissions sold by us",
  },
  {
    icon: "/Images/home/whychooseus/timelogo.png",
    title: "Timely Delivery",
    desc: "We strive and fulfill all our customer orders in a timely manner",
  },
  {
    icon: "/Images/home/whychooseus/Why Us.png",
    title: "Competitive Pricing",
    desc: "We provide competitive pricing on all our products with multiple options to meet your budget",
  },
  
];

export default function WhyChooseUs() {
  return (
     <section className="w-full bg-[#091b33] flex flex-col items-center justify-center px-2 py-2 md:px-6 lg:px-0 ">

      <div className="max-w-6xl mx-auto px-0">

        <h2
          className="font-audiowide text-white text-2xl sm:text-4xl mt-10 md:mt-6 lg:mt-10 mb-6 md:mb-10 tracking-wide uppercase text-left w-full pl-0"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.04em",
            color: "#fff",
          }}
        >
          WHY CHOOSE US
        </h2>

        <p className="text-white font-exo2 mb-6 md:mb-10">
          Our goal is to make the buying process as seamless and worry free as
          possible for our customers and to provide after sales service in a
          professional manner. We want to treat you like we would want to be
          treated.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-blue-500 rounded-lg p-4 md:p-8 flex flex-col items-center text-center bg-transparent"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3
                className="font-audiowide text-base md:text-lg font-bold text-white mb-2"
                // style={{
                //   fontFamily: "Audiowide, sans-serif",
                //   letterSpacing: "0.04em",
                // }}
              >
                {card.title}
              </h3>
              <p className=" text-white md:text-lg text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
