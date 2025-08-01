"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ShippingPaymentPolicy() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const paymentFAQItems: FAQItem[] = [
    {
      question: "What credit/debit cards are accepted on Parts Central LLC?",
      answer:
        "We accept all major credit and debit cards including Visa, MasterCard, American Express, and Discover. All transactions are processed securely through our trusted payment gateways managed by leading banks.",
    },
    {
      question: "Do you accept payments with international credit/debit cards?",
      answer:
        "Yes, we accept international credit and debit cards. However, international transactions may be subject to additional verification processes and currency conversion fees depending on your card issuer.",
    },
    {
      question:
        "What other payment options are available on Parts Central LLC?",
      answer:
        "In addition to credit and debit cards, we also accept PayPal and bank transfers for certain orders. For large orders or commercial customers, we may offer additional payment terms upon request.",
    },
    {
      question: "Privacy Policy",
      answer:
        "Your payment information is protected with the highest levels of transaction security currently available on the Internet. Parts Central LLC uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing. All credit card and debit card payments are processed through secure and trusted payment gateways managed by leading banks.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
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
          <span className="font-exo2 text-white">Shipping and Payment</span>
        </div>

        {/* Title */}
        <h1
          className="font-audiowide text-white overflow-hidden text-l md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 tracking-wide uppercase text-left w-full whitespace-nowrap"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          SHIPPING AND PAYMENT
        </h1>

        <div className="space-y-12">
          {/* SHIPPING Section */}
          <section>
            <h2
              className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              SHIPPING
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-exo2 font-semibold ">
                  FREE Shipping Nationwide:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  We offer FREE shipping on all orders to the U.S. continental
                  48 U.S. states. We can ship anywhere in the contiguous U.S.,
                  including residential and commercial addresses. We do not
                  require a core charge or the return of the engine core. If you
                  need a lift gate, we also offer it for free upon request at
                  checkout. Our standard delivery time is 7–8 business days
                  after processing your order. Want it faster? Shop for items
                  nearest you.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold ">Canadian Orders:</h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  We ship for free to Canadian buyers from our Canadian
                  locations. Other Canadian orders will be subject to product
                  transfer cost, Canadian duties and taxes.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold ">
                  Alaska/Hawaii/Puerto Rico orders:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Orders outside of the continental 48 states (Alaska, Hawaii,
                  and Puerto Rico) may be subject to additional shipping charges
                  for extra freight costs.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold ">*Note:</h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Some part types have shipping restrictions based on their size
                  or fragile nature. We have different options to accommodate
                  the shipment of these part types, and will work with you to
                  find the best solution.
                </p>
              </div>
            </div>
          </section>

          {/* PAYMENT Section */}
          <section>
            <h2 className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}>
              PAYMENT
            </h2>

            {/* Intro paragraphs */}
            <div className="mb-8 space-y-0">
              <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                Your online transaction on Parts Central LLC is secure with the
                highest levels of transaction security currently available on
                the Internet. Parts Central LLC uses 256-bit encryption
                technology to protect your card information while securely
                transmitting it to the respective banks for payment processing.
              </p>
              <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                All credit card and debit card payments on Parts Central LLC are
                processed through secure and trusted payment gateways managed by
                leading banks. Banks now use the 3D Secure password service for
                online transactions, providing an additional layer of security
                through identity verification.
              </p>
            </div>

            {/* FAQ Accordions */}
            <div className="grid md:grid-cols-2 gap-6">
              {paymentFAQItems.map((item, index) => (
                <div key={index} className="border-b border-[#ffffff] ">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${
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
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      openItems.includes(index)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-left pb-4 font-exo2 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
