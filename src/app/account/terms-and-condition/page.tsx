"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link href="/" className="">
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
          <span className="font-exo2 text-white">Terms and Conditions</span>
        </div>

        {/* Title */}
        <h2
          className="font-audiowide text-white text-lg sm:text-3xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 tracking-wide uppercase text-left w-full whitespace-nowrap"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          TERMS AND CONDITIONS
        </h2>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
            Welcome to PartsCentral. By accessing or using our website and
            purchasing from us, you agree to the following terms and conditions.
            Please read them carefully.
          </p>

          <div>
           <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Use of Website</h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              By using this site, you confirm that you are at least 18 years old
              and agree to comply with all applicable laws. Unauthorized use,
              including attempting to interfere with site operations, is
              strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Products and Fitment Accuracy
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We sell verified OEM auto parts. All items are tested,
              photographed, and documented before shipping. While we ensure
              accuracy, it is the customer’s responsibility to confirm fitment
              with their vehicle using VIN or model details before purchase.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Orders and Payments
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              All orders must be fully paid before shipment. Prices are listed
              in U.S. dollars and subject to change without notice. An invoice
              will be provided for approval prior to processing.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Shipping and Delivery
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Orders are shipped nationwide within 7–9 business days. While we
              make every effort to meet estimated timelines, delays caused by
              carriers or unforeseen circumstances are not guaranteed.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Returns, Refunds, and Warranty
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Returns and refunds are subject to our Return & Refund Policy.
              Standard warranty coverage is 90 days from delivery, with optional
              extensions available. Warranty terms are clearly outlined and
              honored without hidden conditions.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Limitation of Liability
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              PartsCentral is not liable for labor costs, installation errors,
              vehicle damage, or loss of use resulting from the purchase or use
              of any part. Warranty applies to the part only, not associated
              repairs or labor.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Intellectual Property
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              All website content, including images, text, and design, is owned
              by PartsCentral and may not be reproduced or distributed without
              written permission.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Governing Law
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              These terms are governed by the laws of the State of Wyoming, USA.
              Any disputes shall be resolved under the jurisdiction of courts
              located in Wyoming.
            </p>
          </div>

          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Contact Us
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              For any questions regarding these terms, please contact:
              <br />
              Phone: (888) 338-2540
              <br />
              <p className="font-exo2 text-sm md:text-lg leading-relaxed">
                Email:{" "}
                <a
                    href="mailto:partscentralus@gmail.com"
                    className="underline"
                >
                    partscentralus@gmail.com
                </a>
                </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
