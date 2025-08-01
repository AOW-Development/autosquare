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
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  30-Day Money Back Guarantee:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  You may return any item in its original condition for a full
                  refund within 30 days of receipt of your shipment, less
                  shipping charges. It typically takes us approximately 3–5
                  business days to process a credit back to your account and 2–3
                  business days for the credit to appear on your account.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Return & Cancellation Policy:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  You can return or cancel your order by calling our customer
                  service desk at (888) 338-2540. Note all returns and
                  cancellations require a prior authorization and are subjected
                  to a 30% restocking fee. The return address where the part
                  needs to be returned is 76 Imperial Dr Suite E Evanston, WY
                  82930, USA.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Replacement Policy:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Received a defective part? No problem, we will replace it 100%
                  FREE. For more information, visit our replacement policy page.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">Terms:</h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  All returns and cancellations may be subject to shipping
                  charges, unless caused by our error or cancelled by the
                  customer prior to shipping. No returns without prior
                  authorization from the Supplier (see Contact Us page). You
                  need to contact a customer service representative to arrange
                  for a Return Merchandise Authorization form: Call (888)
                  338-2540 Press 2 for 'Returns' (open Monday–Friday 8 am – 5 pm
                  EST) Reference your 5 digit Order Number.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Replacements:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  It is company policy that we receive the original auto part
                  back before sending you a replacement auto part. The original
                  auto part must be returned using the provided shipping label.
                  The shipping cost for both the original and the replacement
                  auto part is a cost attributed to the shipper at hand. Note,
                  if these auto parts are not shipped back to the supplier
                  within 30 days of the delivery date of the replacement part,
                  the buyer's credit card is subject to a recharge for the
                  initial cost of the original auto part (minus the initial
                  shipping cost). If you have any questions about the shipping
                  back of the original part, please contact your personal sales
                  representative or the customer service team at (888) 338-2540
                  Press 2 for 'Returns' (open Monday–Friday 8 am – 5 pm EST) Or
                  email partscentralus@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Disclaimer:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  -Some of our units (used engine, transmission, axle, etc.) may
                  come with wear parts and accessories but are not guaranteed in
                  the sale. They will need to be replaced before installation.
                  Common items that are not guaranteed include but not limited
                  to nuts, bolts, links, seals, bushings, ball joints, brackets,
                  bezels, wiring, cables, sensors and other applicable items
                  depending on the part. If they are not serviceable, such as a
                  pressed-in ball joint, they will be guaranteed.
                </p>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                  -We cannot guarantee color on any part we sell. The purchased
                  item may need to be repainted, refinished, or reupholstered
                  for proper color match.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Customer Service:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  (888) 338-2540
                </p>
              </div>

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

          {/* WARRANTY Section */}
          <section>
            <h2 className="font-audiowide text-lg lg:text-2xl mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}>
              WARRANTY
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  60 days Warranty:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  We offer 60 days limited warranty on all our used parts,
                  engines and transmissions. Our parts, engines and
                  transmissions are unmatched for their level of quality,
                  warranty and price. Buy with confidence with us knowing the
                  parts you're buying are insurance-grade OEM quality,
                  guaranteed to fit and warranty by a solid company. Click here
                  to access our full warranty disclaimer.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Extended Warranty:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  We offer extended warrantees on most parts, engines and
                  transmission, at competitive prices. Inquire directly with our
                  sales agent at (888) 338-2540 for options and availability.
                </p>
              </div>

              <div>
                <h3 className="font-exo2 font-semibold mt-4 mb-2">
                  Warranty Terms:
                </h3>
                <p className="font-exo2 text-base lg:text-lg leading-relaxed">
                  Claims related to the overheating and/or improper lubrication
                  of the engine or its components are not covered by this
                  warranty. Engine warranties are limited to manufacturing
                  defects in the block, heads, pistons, crankshafts, camshafts,
                  rockers, and oil pumps. All other parts that may be provided
                  are Accessories and Extra Parts. No warranty is provided for
                  any such parts that are attached, including parts such as
                  switches, sensors, cables, electronics, belts, hoses, water
                  pumps, and manifolds. All warranties are null and void if:
                </p>
                <ul className="list-none space-y-2 mt-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      The vehicle is converted from a private passenger use to
                      commercial or fleet use, or is used for racing or other
                      competition or off-road recreational purposes.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      Failure is caused by abuse, misuse, or modifications.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      Failure is caused by using the part for any use other than
                      what was intended or recommended by the manufacturer.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      The part fails or becomes defective due to the vehicle
                      being involved in a collision.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      The part is installed or operated outside the United
                      States.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="font-exo2 text-base lg:text-lg leading-relaxed">
                      The part is sold "As Is" as indicated on the front of
                      invoice or in a website's terms.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
