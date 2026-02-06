"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function PrivacyPolicy() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

const leftFAQItems: FAQItem[] = [
  {
    question: "How can I find the right part for my vehicle?",
    answer:
      "Enter your vehicle’s make, model, and year in our search tool to find compatible OEM parts. If you need assistance, you can contact our support team at (888) 338-2540 for fitment verification.",
  },
  {
    question: "Do you offer parts for all vehicle makes and models?",
    answer:
      "We supply OEM parts for a wide range of domestic and imported vehicles, including cars, trucks, and SUVs. If your vehicle is not listed, contact our team and we will assist in sourcing the correct part.",
  },
  {
    question: "Why should I buy used OEM parts instead of new or aftermarket parts?",
    answer:
      "Used OEM parts are manufactured by the original vehicle manufacturer, ensuring proper fit, reliability, and performance. They are more cost-effective than new parts and more reliable than aftermarket alternatives.",
  },
  {
    question: "Are the transmissions new or refurbished?",
    answer:
      "We sell genuine used OEM transmissions. Each unit is inspected and tested for quality and functionality before being made available for sale.",
  },
  {
    question: "What types of used engines are available at Parts Central?",
    answer:
      "We offer OEM used engines for various vehicle brands including Toyota, Ford, Honda, Nissan, and more. Each engine listing includes compatibility details and specifications.",
  },
  {
    question: "Can I be sure the engine or transmission will fit my vehicle?",
    answer:
      "Yes. Our compatibility system verifies fitment using vehicle make, model, year, and engine specifications. Our support team can also confirm compatibility before purchase.",
  },
  {
    question: "Do engines and transmissions come with a warranty?",
    answer:
      "Yes. All engines and transmissions include a warranty. Warranty coverage details vary by product and are provided on the product page.",
  },
  {
    question: "How can I be sure of the quality of your parts?",
    answer:
      "All OEM parts are inspected and tested to meet quality and performance standards before being listed for sale.",
  },
  {
    question: "How long will it take for my order to arrive?",
    answer:
      "Most orders are processed and shipped within 7–8 business days. Delivery time may vary depending on your location.",
  },
  {
    question: "Will I receive tracking information?",
    answer:
      "Yes. Once your order ships, you will receive tracking information via email.",
  },
];


  const rightFAQItems: FAQItem[] = [
   
  {
    question: "How are shipping charges calculated?",
    answer:
      "Shipping costs depend on the order size and delivery location. Shipping terms are displayed during checkout.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States.",
  },
  {
    question: "What payment methods do you accept? and is checkout secure?",
    answer:
      "We accept all major credit and debit cards, as well as PayPal. Your information is always protected with SSL encryption, so you can shop with complete peace of mind.",
  },
  {
    question: "Do you offer bulk purchase discounts?",
    answer:
      "Yes. If you’re buying multiple parts, our sales team can work out better pricing. Just let us know what you need.",
  },
  {
    question: "Can I get a quote before purchasing?",
    answer:
      "Of course. Call (888) 338-2540 or submit a request online, and we’ll give you a clear, upfront quote—no hidden fees",
  },
  {
    question: "Can I change my order after it's been placed?",
    answer:
      "Once it’s moving through the warehouse, changes are tricky. But if you contact us quickly, we’ll do our best to update it before it ships.",
  },

  {
    question: "What should I do if I didn’t receive all my parts?",
    answer:
      "Keep your order number handy and call us at (888) 338-2540. We’ll get things sorted right away.",
  },
  {
    question: "What if my parts were damaged during shipment?",
    answer:
      "Give us a call as soon as you spot the issue. With your order info, we’ll handle the replacement so you’re not left stuck.",
  },
  {
    question: "Can I install parts myself, or should I seek professional help?",
    answer:
      " It depends on the part. Some are DIY-friendly, while engines and transmissions are best left to a mechanic. If you’re unsure, professional installation is always safer",
  },

  {
    question: "Why are used engines and transmissions more affordable than new ones?",
    answer:
      "Used OEM components deliver reliability at a fraction of the cost of new ones. They’re tested, verified, and built to last—without the steep price tag of brand-new or aftermarket alternatives.",
  },
];


  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2  py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Images/HouseLine.png"
              alt="Home"
              width={24}
              height={24}
              // className="w-4 h-4"
            />
          </Link>
          <Image
            src="/Images/arrows (1).svg"
            alt="Arrow"
            width={16}
            height={16}
            // className="w-3 h-3"
          />
          <span className="text-white">FAQ</span>
        </div>

         <h2
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          FAQ
        </h2>
        {/* FAQ Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
         
          <div className="space-y-2 md:space-y-4">
            {leftFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF] ">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-xl">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-left pb-3 md:pb-4 font-exo2 text-xs md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div> 

           <div className="space-y-2 md:space-y-4">
            {rightFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF]">
                <button
                  onClick={() => toggleItem(index + leftFAQItems.length)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-xl">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openItems.includes(index + leftFAQItems.length)
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index + leftFAQItems.length)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-3 md:pb-4 font-exo2 text-xs md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </div> 
    </div>
  );
}
