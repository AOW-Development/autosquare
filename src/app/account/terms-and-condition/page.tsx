"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link href="/">
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
            Terms and Conditions
          </span>
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

          {/* Intro */}
          <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
            Welcome to Parts Central LLC. By accessing or using our website or purchasing products from us, you agree to the following terms and conditions. Please review them carefully before placing an order.
          </p>


          {/* Use of Website */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Use of Website
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              By accessing this website, you confirm that you are at least 18 years old and agree to comply with all applicable laws and regulations. Unauthorized use of this website, including attempts to disrupt operations or access restricted systems, is strictly prohibited.
            </p>
          </div>


          {/* Products */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Products and Fitment Accuracy
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC supplies used OEM auto parts sourced from licensed automotive recyclers and suppliers. Parts are inspected prior to shipment. Customers are responsible for confirming compatibility using vehicle information such as VIN, make, model, and year before completing a purchase. Our support team is available to assist with compatibility verification.
            </p>
          </div>


          {/* Orders */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Orders and Payments
            </h2>

            <ul className="space-y-2 font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              <li>• Full payment is required before shipment unless otherwise agreed in writing.</li>
              <li>• All prices are listed in U.S. dollars.</li>
              <li>• Prices, availability, and specifications may change without notice.</li>
              <li>• Customers will receive order confirmation and payment details prior to shipment.</li>
            </ul>
          </div>


          {/* Shipping */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Shipping and Delivery
            </h2>

            <ul className="space-y-2 font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              <li>• Orders are typically processed within 1–3 business days after payment confirmation.</li>
              <li>• Estimated delivery time is generally 7–9 business days depending on location and availability.</li>
              <li>• Delivery timelines are estimates and not guaranteed.</li>
              <li>• Customers will be notified of significant shipping delays when applicable.</li>
            </ul>
          </div>


          {/* Returns */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Returns, Refunds, and Warranty
            </h2>

            <ul className="space-y-2 font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              <li>• Returns may be requested within 15 days of delivery, subject to authorization and applicable conditions.</li>
              <li>• Engines and transmissions include a 90-day limited warranty from delivery.</li>
              <li>• Smaller parts may include a 30-day limited warranty depending on part type.</li>
              <li>• Extended warranty options may be available for select products.</li>
              <li>• Warranty applies only to the purchased part and does not include labor or installation costs.</li>
            </ul>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-3">
              Full details are available on our Warranty and Return Policy page.
            </p>
          </div>


          {/* Liability */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Limitation of Liability
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC is not liable for labor costs, installation expenses, vehicle downtime, or indirect damages resulting from the use of purchased parts. Liability is limited to the purchase price of the part.
            </p>
          </div>


          {/* IP */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Intellectual Property
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              All website content, including text, images, graphics, and design, is the property of Parts Central LLC and may not be reproduced or distributed without written permission.
            </p>
          </div>


          {/* Governing law */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Governing Law
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              These terms and conditions are governed by the laws of the State of Wyoming, United States. Any disputes will be handled within the jurisdiction of Wyoming courts.
            </p>
          </div>


          {/* Contact */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Contact Information
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC
              <br />
              76 Imperial Dr Suite E
              <br />
              Evanston, WY 82930, USA
              <br /><br />
              Phone:{" "}
              <a href="tel:+18883382540" className="underline">
                (888) 338-2540
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:support@partscentral.us"
                className="underline"
              >
                support@partscentral.us
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
