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
        "We accept major credit and debit cards including Visa, MasterCard, American Express, and Discover. Payments are processed securely through trusted payment providers using encrypted payment technology.",
    },
    {
      question: "Do you accept payments with international credit/debit cards?",
      answer:
        "Yes, international credit and debit cards may be accepted. Additional verification or currency conversion fees may apply depending on your bank or card provider.",
    },
    {
      question:
        "What other payment options are available on Parts Central LLC?",
      answer:
        "In addition to credit and debit cards, we may accept PayPal or bank transfers for select orders. Available payment methods are shown during checkout or provided during order confirmation.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes. Payments are processed using 256-bit SSL encryption and industry-standard security protocols. Parts Central LLC does not store full credit card details on its servers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Images/HouseLine.png"
              alt="Home"
              width={24}
              height={24}
            />
          </Link>

          <Image
            src="/Images/arrows (1).svg"
            alt="Arrow"
            width={16}
            height={16}
          />

          <span className="font-exo2 text-white">
            Shipping and Payment
          </span>
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
              SHIPPING INFORMATION
            </h2>


            <div className="space-y-6">

              <div>
                <h3 className="font-exo2 font-semibold">
                  Shipping Within the Continental United States:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Eligible orders ship free of charge within the 48 contiguous United States to residential and commercial addresses. Orders are typically processed within 1–3 business days after payment confirmation. After processing, estimated delivery is approximately 7–8 business days depending on destination and carrier availability.
                </p>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                  Shipping may be handled by licensed freight carriers such as FedEx Freight, UPS Freight, or similar logistics providers depending on part size and destination.
                </p>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                  Lift gate service may be available upon request during checkout. Additional services, if required, will be communicated during order confirmation.
                </p>
              </div>


              <div>
                <h3 className="font-exo2 font-semibold">
                  Shipping to Canada:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Canadian customers may receive shipments from Canadian or U.S. warehouse locations. Orders shipped from the United States into Canada may be subject to customs duties, taxes, or transfer costs. Any applicable charges are communicated before order confirmation.
                </p>
              </div>


              <div>
                <h3 className="font-exo2 font-semibold">
                  Shipping to Alaska, Hawaii, and Puerto Rico:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Orders shipped outside the continental United States, including Alaska, Hawaii, and Puerto Rico, may involve additional freight charges. Any additional shipping costs are disclosed before order confirmation.
                </p>
              </div>


              <div>
                <h3 className="font-exo2 font-semibold">
                  Special Shipping Considerations:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Some parts may require special handling due to size, weight, or shipping requirements. Available shipping options and applicable costs will be communicated before order confirmation.
                </p>
              </div>

            </div>

          </section>



          {/* PAYMENT Section */}
          <section>

            <h2
              className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              PAYMENT INFORMATION
            </h2>


            {/* Intro */}
            <div className="mb-8 space-y-0">

              <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                Payments are processed using 256-bit SSL encryption and industry-standard security protocols to protect your payment information during transmission.
              </p>

              <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                We accept major credit and debit cards through secure payment providers. Additional identity verification such as 3D Secure authentication may be required depending on your payment method.
              </p>

            </div>


            {/* FAQ */}
            <div className="grid md:grid-cols-2 gap-6">

              {paymentFAQItems.map((item, index) => (
                <div key={index} className="border-b border-[#ffffff]">

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
