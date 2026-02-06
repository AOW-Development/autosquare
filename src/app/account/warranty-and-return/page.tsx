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
            />
          </Link>

          <Image
            src="/Images/arrows (1).svg"
            alt="Arrow"
            width={16}
            height={16}
          />

          <span className="font-exo2 text-white">
            Warranty and Return Policy
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
          WARRANTY AND RETURN POLICY
        </h1>


        <div className="space-y-12">

          {/* RETURN POLICY Section */}
          <section>

            <h2
              className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              RETURN POLICY
            </h2>

            <div className="space-y-6">

              {/* Returns */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  15-Day Returns (Conditions Apply):
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  You may request a return within 15 days of receiving your shipment,
                  provided the item remains in its original condition. This return
                  period is separate from warranty coverage. Approved refunds are issued to the original payment method used during purchase within 3–5 business days after the returned item is received and inspected. Shipping charges may be
                  non-refundable unless the return is due to a defective or incorrectly
                  supplied part.
                </p>
              </div>


              {/* Restocking */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Return & Cancellation Policy:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  You can return or cancel your order by calling our customer service desk at{" "}
                  <a href="tel:+18883382540">(888) 338-2540</a>. All returns and cancellations
                  require prior authorization. Approved returns for non-defective items may
                  be subject to a restocking fee of up to 30%. Defective or incorrectly supplied
                  parts are eligible for replacement or refund without restocking fees. The return
                  address is 76 Imperial Dr Suite E Evanston, WY 82930, USA.
                </p>
              </div>


              {/* Replacement */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Replacement Policy:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  If you receive a defective or incorrect part, you may request a replacement.
                  Replacement eligibility and shipping responsibility will be communicated during
                  the replacement authorization process. Replacement shipping is provided at no
                  additional cost when the issue is due to a defective or incorrectly supplied part.
                </p>
              </div>


              {/* Terms */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Terms:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Returns and cancellations require prior authorization. Customers must contact
                  customer service to obtain a Return Merchandise Authorization (RMA). Please call{" "}
                  <a href="tel:+18883382540" className="underline">(888) 338-2540</a> Press 2 for Returns
                  (Monday–Friday, 8 am – 5 pm EST) and reference your Order Number.
                </p>
              </div>


              {/* Replacement return */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Replacements:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Replacement parts may require the return of the original part.
                  Return instructions and shipping responsibilities will be communicated
                  during the replacement process. Failure to return the original part when
                  required may affect replacement eligibility. For assistance, contact
                  customer support at <a href="tel:+18883382540" className="underline">(888) 338-2540</a> or email 
                 <a href= " mailto:support@partscentral.us " className="underline" > support@partscentral.us </a>.
                </p>
              </div>


              {/* Disclaimer */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Disclaimer:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Some used auto parts may include wear components or accessories that are
                  not covered under warranty. Customers may need to replace wear items before
                  installation depending on part condition.
                </p>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                  Cosmetic aspects such as color may vary. Parts may require refinishing to
                  match the customer's vehicle.
                </p>
              </div>


              {/* Customer Service */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Customer Service:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  <a href="tel:+18883382540">(888) 338-2540</a>
                </p>
              </div>


              {/* Hours */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Operation Hours:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Mon – Friday (8:00 am – 7:00 pm EST)
                </p>
              </div>

            </div>
          </section>



          {/* WARRANTY SECTION */}
          <section>

            <h2
              className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              WARRANTY
            </h2>

            <div className="space-y-6">

              {/* Correct Warranty */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Limited Warranty Coverage:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Warranty coverage varies based on the type of part purchased.
                  Engines and transmissions include a 90-day limited warranty from
                  the date of delivery. Smaller parts and accessories include a
                  30-day limited warranty from the date of delivery. Warranty coverage
                  applies only to eligible defects in materials and workmanship under
                  normal use, as outlined in the warranty terms below.
                </p>
              </div>


              {/* Extended Warranty */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Extended Warranty:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Extended warranty options may be available for select parts.
                  Contact our sales team at <a href="tel:+18883382540">(888) 338-2540</a> for details.
                </p>
              </div>


              {/* Warranty Terms */}
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Warranty Terms:
                </h3>

                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Warranty coverage applies only to eligible defects in materials and
                  workmanship under normal use. Warranty exclusions include damage
                  caused by misuse, improper installation, accidents, modifications,
                  or external causes beyond normal operating conditions.
                </p>

              </div>

            </div>

          </section>

        </div>

      </div>
    </div>
  );
}
