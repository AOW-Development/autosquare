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
      question: "What information do we collect from you?",
      answer:
        "You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3–5 business days to process a credit back to your account and 2–3 business days for the credit to appear on your account. Engine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.",
    },
    {
      question: "Where and how we collect and use your information?",
      answer:
        "We collect information through various channels including when you visit our website, make purchases, create an account, or contact our customer service. This information helps us process your orders, provide customer support, and improve our services.",
    },
    {
      question: "With whom do we share your information?",
      answer:
        "We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent.",
    },
    {
      question:
        "How can you update or correct your Personally Identifiable Information?",
      answer:
        "You can update or correct your personal information by logging into your account and editing your profile information, or by contacting our customer service team directly.",
    },
    {
      question:
        "What are your choices regarding collection, use and distribution of your information?",
      answer:
        "You have the right to opt out of certain communications, request deletion of your data, and control how your information is used. You can manage these preferences through your account settings or by contacting us.",
    },
    {
      question: 'Use of "cookies"',
      answer:
        "We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser preferences.",
    },
  ];

  const rightFAQItems: FAQItem[] = [
    {
      question:
        "What security precautions are in place to protect against the loss, misuse or alteration of your information?",
      answer:
        "We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.",
    },
    {
      question:
        "You should carefully review privacy policies of any third party sites accessible from the site.",
      answer:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.",
    },
    {
      question: "Children's Privacy",
      answer:
        "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.",
    },
    {
      question: "partscentral.us General Privacy Policy",
      answer:
        "This privacy policy applies specifically to our website and services. For information about how partscentral.us handles your data across all platforms, please refer to our general privacy policy available on our main website.",
    },
    {
      question: "Contacting Us About our Privacy Policy",
      answer:
        "If you have any questions about this Privacy Policy or our privacy practices, please contact us through our customer service channels or email us at privacy@partscentral.us",
    },
    {
      question: "Privacy Policy Changes",
      answer:
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this policy periodically.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto md:mx-35 px-6 py-10">
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
          <span className="text-white">Privacy Policy</span>
        </div>

        {/* <div className="px-3 md:px-4 lg:px-8 "> */}
        {/* Main Heading */}
        {/* <h1 className="font-audiowide text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
          Privacy Policy
        </h1> */}
        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Privacy Policy
        </h1>

        {/* Intro Paragraph */}
        <div className="mb-6 text-left mx-auto">
          <p className="font-exo2 text-sm md:text-base leading-relaxed text-left">
            This Site is managed by a third party service provider of
            partscentral.us (the "Online Store" and collectively with
            partscentral.us "we" or "us"). We are committed to protecting our
            customers' privacy. Your privacy through the use of the Web site
            located at URL https://www.partscentral.us ("the Site") is paramount
            in that goal. Other service providers we use on the site include
            credit card processors and shipping services.
          </p>
          <p className="font-exo2 text-sm md:text-base leading-relaxed ">
            The purpose of this Privacy Policy ("Policy") is to inform you about
            the types of information we gather about you and your organization,
            how we may use that information, whether we disclose it to anyone,
            and the choices you have regarding our use of, and your ability to
            correct, that information. This Policy may change from time to time,
            so please check back periodically.
          </p>
          <p className="font-exo2 text-sm md:text-base leading-relaxed ">
            In addition to our Privacy Policy, we also recommend you read our
            Terms & Conditions for important information regarding your rights
            and obligations, as well as limitations and exclusions, that apply
            to your purchases on the Site and the use of the Site.
          </p>
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
          {/* Left Column */}
          <div className="space-y-2 md:space-y-4">
            {leftFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF] ">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
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
                  <div className="text-left pb-3 md:pb-4 font-exo2 text-xs md:text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2 md:space-y-4">
            {rightFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF]">
                <button
                  onClick={() => toggleItem(index + leftFAQItems.length)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
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
                  <div className="pb-3 md:pb-4 font-exo2 text-xs md:text-sm leading-relaxed">
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
