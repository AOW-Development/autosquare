"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    //py-[60px] md:py-[40px] sm:py-[32px]
    <footer className="w-full bg-[#090D15] font-exo-2">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-16 lg:px-30 md:py-8 lg:py-16">
        {/* Top Grid: Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:space-x-4 gap-y-6">
          {/* Company Info */}
          <div className="w-full md:w-[350px] mb-6 md:mb-0">
            <div>
              <Image
                src="/logos/pc2.png"
                alt="AutoSquare logo"
                width={200}
                height={60}
                className="mb-[15px] bg-[#090D15]"
              />
              <ul className="space-y-[8px] text-[14px] md:text-[16px] lg:text-[18px] text-white leading-[1.5]">
                <li>Parts Central LLC</li>
                <li>
                  Address: 76 Imperial Dr Suite E Evanston, WY 82930, USA
                </li>
                {/* <li>Toll Free: (888) 748–0882</li> */}
                <li>
                      Toll Free:&nbsp;
                      <a
                        href="tel:8883382540"
                        onClick={() => {
                          if (typeof window !== "undefined" && typeof window.gtag === "function") {
                            window.gtag('event', 'conversion', {
                              send_to: 'AW-17273467579/H6LQCJmP36kbELvl0KxA',
                            });
                          }
                        }}
                        className="text-white hover:underline"
                      >
                        (888) 338-2540
                      </a>
                    </li>

                <li>Fax: (312) 845–9711</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:support@partscentral.us"
                    className="underline"
                  >
                    support@partscentral.us
                  </a>
                </li>
                 
 
                <li>
                  Website:{" "}
                  <a href="https://partscentral.us/" className="underline">
                    www.partscentral.us
                  </a>
                </li>
                
              </ul>
              <div className="flex gap-4 mt-4 md:gap-10 ">
                <a
                  href="https://www.facebook.com/profile.php?id=61569958892836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/Images/home/social media (5).svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  <span className="text-white text-[12px] md:text-[14px] lg:text-[16px] ">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/partscentral.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 "
                >
                  <Image
                    src="/Images/home/social media (4).svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                  <span className="text-white text-[12px] md:text-[14px] lg:text-[16px]">Instagram</span>
                </a>
                 <a
                  href="https://www.linkedin.com/company/partscentral/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/linkedin.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  <span className="text-white text-[12px] md:text-[14px] lg:text-[16px]">Linkedin</span>
                  </a>
              </div>
            </div>
          </div>
          {/* Navigation Columns */}
          <div className="w-full md:w-[600px] grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Column 2: Online Store */}
            <div>
              <h3 className="text-white uppercase font-exo-2 font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-[16px]">
                Online Store
              </h3>
              <ul className="space-y-[8px] text-[14px] md:text-[16px] lg:text-[18px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/auto-parts" className="hover:text-white">
                    Used Auto parts
                  </a>
                </li>
                <li>
                  <a href="/engine" className="hover:text-white">
                    Used Engine
                  </a>
                </li>
                <li>
                  <a href="/transmission" className="hover:text-white">
                    Used Transmission
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-white">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3: Information */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-[16px]">
                Information
              </h3>
              <ul className="space-y-[8px] text-[14px] md:text-[16px] lg:text-[18px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <a href="/about-us" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="/account/shipping-payment-policy"
                    className="hover:text-white"
                  >
                    Delivery and Payment
                  </a>
                </li>
                <li>
                  <a
                    href="/account/warranty-and-return"
                    className="hover:text-white"
                  >
                    Warranty and Returns
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/account/refund-and-return-policy"
                    className="hover:text-white"
                  >
                    Refund And Return Policy
                  </a>
                </li> */}
                <li>
                  <a href="/account/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/account/cookie-policy" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4: Resources */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[14px] md:text-[16px] lg:text-[18px] mb-[16px]">
                Resources
              </h3>
              <ul className="space-y-[8px] text-[14px] md:text-[16px] lg:text-[18px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <Link href="/account/track-order" className="hover:text-white">
                    Track my order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account/submit-ticket"
                    className="hover:text-white"
                  >
                    Submit a ticket
                  </Link>
                </li>
                <li>
                  <Link href="/account/Testimonials" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                {/* <li>
                  <Link href="/account/payment-details" className="hover:text-white">
                    Make a payment
                  </Link>
                </li> */}
                <li>
                  <Link href="/account/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog/blog-listing" className="hover:text-white">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Row: Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-16 items-start mt-8">
          {/* Payments */}
          <div className="w-full md:w-auto flex flex-col items-start space-y-2 mb-6 md:mb-0">
            <span className="uppercase text-[14px] text-white mb-2">
              Pay securely with
            </span>
            {/* First row of payment icons */}
             <div className="flex space-x-[8px]">
            {/* <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/Images/home/visa-inverted_82058.png"
                alt="Visa"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            {/* </a> */}
            {/* <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/Images/home/mastercard_82049.png"
                alt="Mastercard"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            {/* </a> */}
            {/* <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/Images/home/americanexpress_82060.png"
                alt="Amex"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            {/* </a> */}
            {/* <a href="https://www.discover.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/Images/home/discover_82082.png"
                alt="Discover"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            {/* </a> */}
          </div>

          {/* Second row of payment icons */}
          <div className="flex space-x-[8px] mt-1">
            {/* <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/Images/home/visa-inverted_82058 (1).png"
                alt="Visa 2"
                width={48}
                height={30}
                className="bg-[#1E2A44]  w-12 h-8 md:w-12 md:h-8  object-contain"
              />
            {/* </a> */}
            {/* <a href="https://venmo.com" target="_blank" rel="noopener noreferrer"> */}
              <Image
                src="/account/venmo-ar21.svg"
                alt="Venmo"
                width={48}
                height={35}
                className=" bg-[#1E2A44] w-12 h-8 md:w-12 md:h-8 object-contain"
              />
            {/* </a> */}
          </div>
        </div>
          <div className="flex flex-row md:grid md:grid-cols-2 md:gap-8">
            {/* Member */}
            <div className="w-full flex flex-col items-start mb-6 md:mb-0">
              <span className="uppercase font-exo2 text-[14px] text-white">
                Member
              </span>
              <Image
                src="/Images/home/icon.png"
                alt="Member Icon"
                width={120}
                height={100}
                className=" object-contain w-12 h-8 md:w-14 md:h-12"
              />
            </div>
            {/* Affiliates */}
            {/* <div className=" md:w-full flex flex-col items-start ">
              <span className="uppercase font-exo2 text-[14px] text-white mb-2">
                Affiliates
              </span>
              <div className="flex flex-row gap-1 md:gap-4">
                <Image
                  src="/Images/home/white-logo.png"
                  alt="Affiliate 1"
                  width={64}
                  height={30}
                  className="bg-[#1E2A44] object-contain"
                />
                <Image
                  src="/Images/home/white-logo.png"
                  alt="Affiliate 2"
                  width={64}
                  height={30}
                  className="bg-[#1E2A44] object-contain"
                />
                <Image
                  src="/Images/home/white-logo.png"
                  alt="Affiliate 3"
                  width={64}
                  height={30}
                  className="bg-[#1E2A44] object-contain"
                />
              </div>
            </div> */}
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-[#666D80]">
            © 2026 Parts Central – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
