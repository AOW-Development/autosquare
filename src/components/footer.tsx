import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    //py-[60px] md:py-[40px] sm:py-[32px]
    <footer className="w-full bg-[#090D15] font-exo2">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-30 md:py-16">
        {/* Top Grid: Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:space-x-4 gap-y-6">
          {/* Company Info */}
          <div className="w-full md:w-[350px] mb-6 md:mb-0">
            <div>
              <Image
                src="/Images/home/logo-auto.png"
                alt="AutoSquare logo"
                width={200}
                height={60}
                className="mb-[15px] bg-[#090D15]"
              />
              <ul className="space-y-[8px] text-[14px] text-white leading-[1.5]">
                <li>AutoSquareCo INC DBA AutoSquare</li>
                <li>Toll Free: (888) 748–0882</li>
                <li>Fax: (312) 845–9711</li>
                <li>
                  Email:{" "}
                  <a href="mailto:support@autosquare.us" className="underline">
                    support@autosquare.us
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a href="https://www.autosquare.us" className="underline">
                    www.autosquare.us
                  </a>
                </li>
                <li>Location: 6335 Contessa Dr Orlando, FL 32829, USA</li>
              </ul>
              <div className="flex space-x-[16px] mt-[16px]">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/Images/home/social media (5).svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  <span className="text-white text-[14px]">Facebook</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/Images/home/social media (4).svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                  <span className="text-white text-[14px]">Instagram</span>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Columns */}
          <div className="w-full md:w-[600px] grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Column 2: Online Store */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">
                Online Store
              </h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/autoParts" className="hover:text-white">
                    Auto parts
                  </a>
                </li>
                <li>
                  <a href="/engine" className="hover:text-white">
                    Engine
                  </a>
                </li>
                <li>
                  <a href="/transmission" className="hover:text-white">
                    Transmission
                  </a>
                </li>
                <li>
                  <a href="/contactUs" className="hover:text-white">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3: Information */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">
                Information
              </h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <a href="/aboutUs" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/account/shippingPaymentPolicy" className="hover:text-white">
                    Delivery and Payment
                  </a>
                </li>
                <li>
                  <a href="/account/warrantyAndReturn" className="hover:text-white">
                    Warranty and Returns
                  </a>
                </li>
                <li>
                  <a href="/account/privacyPolicy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4: Resources */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">
                Resources
              </h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li>
                  <Link href="/account/trackOrder" className="hover:text-white">Track my order</Link>
                </li>
                <li>
                  <Link href="/account/paymentInfo" className="hover:text-white">Make a payment</Link>
                </li>
                <li>
                  <Link href="/account/submitTicket" className="hover:text-white">Submit a ticket</Link>
                </li>
                <li>
                  <Link href="/Testimonials" className="hover:text-white">Testimonials</Link>
                </li>
                <li>
                  <Link href="/Blog/blogListing" className="hover:text-white">Blogs</Link>
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
              <Image
                src="/Images/home/visa-inverted_82058.png"
                alt="Visa"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
              <Image
                src="/Images/home/mastercard_82049.png"
                alt="Mastercard"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
              <Image
                src="/Images/home/americanexpress_82060 1.png"
                alt="Amex"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
              <Image
                src="/Images/home/discover_82082.png"
                alt="Discover"
                width={48}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            </div>
            {/* Second row of payment icons */}
            <div className="flex space-x-[8px] mt-1">
              <Image
                src="/Images/home/authorize-net-seeklogo 1.png"
                alt="Authorize.Net"
                width={60}
                height={48}
                className="bg-[#1E2A44] object-contain"
              />
              <Image
                src="/Images/home/visa-inverted_82058 (1).png"
                alt="Visa 2"
                width={80}
                height={48}
                className="bg-[#1E2A44] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row md:grid md:grid-cols-2 md:gap-8">
            {/* Member */}
            <div className="w-[40%] md:w-full flex flex-col items-start mb-6 md:mb-0">
              <span className="uppercase font-exo2 text-[14px] text-white mb-2">
                Member
              </span>
              <Image
                src="/Images/home/icon.png"
                alt="Member Icon"
                width={64}
                height={30}
                className="bg-[#1E2A44] object-contain"
              />
            </div>
            {/* Affiliates */}
            <div className=" md:w-full flex flex-col items-start ">
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
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs text-[#666D80]">
            © 2024 Auto Square – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
