"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="mt-0 pt-0">
      <div className="w-full h-[160px] sm:h-[240px] md:h-[320px] relative ">
        <Image
          src="/autoparts/banner.png"
          alt="Account Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={100}
        />
      </div>

      <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 lg:p-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-base text-white mb-6 px-2 sm:px-4 md:px-0">
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Image
                  src="/account/HouseLine.png"
                  alt="Home"
                  width={24}
                  height={24}
                />
                <Image
                  src="/autoparts/arrows (1).png"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </Link>
              <h1>About us</h1>
            </div>

            <main className="flex flex-col gap-2">

              {/* WHO ARE WE? */}
              <section>
                <h2
                  className="text-xl md:text-[32px] font-semibold uppercase"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  WHO ARE WE?
                </h2>

                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-1">
                    <p className="text-base text-gray-200 leading-relaxed mt-4 text-[16px] justify-left">
                      Parts Central LLC is an automotive parts retailer based in
                      Evanston, Wyoming, United States. We specialize in supplying
                      inspected used OEM auto parts, including engines and
                      transmissions, sourced from verified suppliers and recycling
                      partners. Our team provides customer support, compatibility
                      assistance, and order fulfillment services for customers
                      across the United States.
                    </p>
                  </div>

                  <div className="flex-1 flex justify-center md:justify-center mt-4 md:-mt-48 md:z-10 md:relative">
                    <Image
                      src="/Images/car.png"
                      alt="Car"
                      width={490}
                      height={410}
                      className="rounded-2xl w-full h-auto max-w-[400px] md:max-w-none"
                    />
                  </div>
                </div>
              </section>


              {/* BUSINESS INFORMATION (GMC REQUIRED) */}
              <section className="mt-10">
                <h2
                  className="text-xl md:text-[32px] font-semibold uppercase mb-4 md:mb-6"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  BUSINESS INFORMATION
                </h2>

                <p className="text-base text-gray-200 leading-relaxed text-[16px]">
                  Parts Central LLC operates from Evanston, Wyoming, USA, and
                  supplies used OEM automotive parts including engines and
                  transmissions. Our inventory is sourced from verified suppliers
                  and automotive recycling partners. We provide customer support,
                  order assistance, and post-purchase service for customers
                  throughout the United States.
                </p>

                {/* Policy Links */}
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href="/account/shipping-payment-policy"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    Shipping Policy
                  </Link>

                  <Link
                    href="/account/warranty-and-return"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    Warranty & Returns Policy
                  </Link>

                  <Link
                    href="/account/privacy-policy"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </section>


              {/* OUR GOAL */}
              <section className=" mt-10">
                <h2
                  className="text-xl md:text-[32px] font-semibold uppercase mb-4 md:mb-6"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  OUR GOAL
                </h2>

                <p className="text-base text-gray-200 leading-relaxed mb-6 text-[16px]">
                  Our goal is to provide a transparent and reliable buying
                  experience by offering inspected used OEM automotive parts,
                  along with responsive customer support and after-sales service.
                  We aim to help customers find compatible parts and complete
                  their purchases with clarity and confidence.
                </p>
              </section>


              {/* HOW WE OPERATE (GMC REQUIRED) */}
              <section className=" mt-10">
                <h2
                  className="text-xl md:text-[32px] font-semibold uppercase mb-4 md:mb-6"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  HOW WE OPERATE
                </h2>

                <p className="text-base text-gray-200 leading-relaxed mb-6 text-[16px]">
                  Orders are handled by our support team, who assist customers
                  with compatibility verification, order processing, and delivery
                  coordination. Warranty and return options are available as
                  described in our policy pages. Customers can contact us for
                  product assistance, order updates, and post-purchase support.
                </p>
              </section>


              {/* Feature Grid (UNCHANGED UI) */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-10">

                  <div className="bg-[#091627] rounded-l shadow-sm p-6 mb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Shipping's on Us
                    </h3>
                    <p className="text-gray-200">
                      Get your ordered parts delivered expeditiously. Initial
                      shipping on ALL Orders is FREE! (*T&C Apply*)
                    </p>
                  </div>

                  <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                    <Image
                      src="/about/Mask group.png"
                      alt=""
                      fill
                      className="object-cover z-0 pointer-events-none"
                      quality={70}
                    />
                    <div className="relative z-10">
                      <h3 className="font-semibold text-lg mb-2">
                        Easy Replacements
                      </h3>
                      <p className="text-gray-200">
                        Enjoy peace of mind with easy returns and replacements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#091627] rounded-l shadow-sm p-8 mb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Timely Delivery
                    </h3>
                    <p className="text-gray-200">
                      We strive and fulfill all our customer orders in a timely
                      manner.
                    </p>
                  </div>

                  <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                    <Image
                      src="/about/card-betn.png"
                      alt=""
                      fill
                      className="object-cover z-0 pointer-events-none"
                      quality={70}
                    />
                    <div className="relative z-10">
                      <h3 className="font-semibold text-lg mb-2">
                        Warranty
                      </h3>
                      <p className="text-gray-200">
                        We provide a standard warranty on all Engines &
                        Transmissions sold by us.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#091627] rounded-l shadow-sm p-8 mb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Reliability
                    </h3>
                    <p className="text-gray-200">
                      We offer reliable and quality used OEM Auto Parts,
                      Engines, and Transmissions.
                    </p>
                  </div>

                  <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                    <Image
                      src="/about/fst-card.png"
                      alt=""
                      fill
                      className="object-cover z-0 pointer-events-none"
                      quality={70}
                    />
                    <div className="relative z-10">
                      <h3 className="font-semibold text-lg mb-2">
                        Competitive Pricing
                      </h3>
                      <p className="text-gray-200">
                        We provide competitive pricing on all our products with
                        multiple options to meet your budget.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
