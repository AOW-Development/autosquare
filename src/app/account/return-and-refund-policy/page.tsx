"use client";

import Image from "next/image";
import Link from "next/link";

export default function WarrantyAndReturn() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
         <div className="flex items-center gap-2 py-4 text-sm sm:text-base font-medium">
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
          <span className="font-exo2 text-white">
            Return And Refund Policy
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Return And Refund Policy
        </h1>

      <div className="space-y-12">
        {/* RETURN & REFUND POLICY Section */}
        <section>
            {/* <h2
            className="font-audiowide text-lg lg:text-2xl mb-4"
            style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
            }}
            >
            RETURN & REFUND POLICY
            </h2> */}
            <div className="space-y-6">
            <div>
                <h3 className="font-exo2 font-semibold lg:text-xl mt-4 mb-2">
                15-Day Returns
                </h3>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                We want you to be fully satisfied with your purchase. If for any reason you are not happy with the product, you may return it within 15 days from the date of delivery.
                </p>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Eligibility for Returns
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2 lg:text-xl">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Items must be returned in the same condition as received.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Items should include all original packaging and documentation.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Used or damaged items (not due to transit or product defect) may not be eligible for a refund. </li>
                </ul>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2 lg:text-2xl">
                How to Return
                </h3>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                1. Contact our customer service team at (888) 338-2540 or email partscentralus@gmail.com to request a return.
                </p>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed mt-2">
                2. We will provide you with the return instructions and return address.
                </p>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed mt-2">
                
                 3. Please ship the item back within 15 days of delivery.
                </p>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Refunds
                </h3>
                <ul className="list-disc list-inside space-y-2 mt-2 lg:text-xl">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Once your return is received and inspected, we will process your refund to your original payment method.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Refunds are typically issued within 5-7 business days after we receive the returned product.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Original shipping charges are non-refundable unless the return is due to our error (e.g., wrong or defective item). </li>
                </ul>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Replacements
                </h3>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                If you received a defective or incorrect item, we will send a replacement at no additional cost once the original item is returned.
                </p>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Cancellations
                </h3>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                Orders can be cancelled before shipping at no charge. If your order has already shipped, you may still return it under the standard return policy.
                </p>
            </div>

            <div>
                <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Customer Support
                </h3>
                <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                For all return or refund related queries:
                </p>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                📞 (888) 338-2540 (Mon-Fri, 8:00 am - 7:00 pm EST) <br />
                
                Email:{" "}
                <a
                    href="mailto:partscentralus@gmail.com"
                    className="underline"
                >
                    partscentralus@gmail.com
                </a>

                
                </p>
            </div>
            </div>
        </section>
        </div>


      </div>
    </div>
  );
}
