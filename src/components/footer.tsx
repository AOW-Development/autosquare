import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (   //py-[60px] md:py-[40px] sm:py-[32px]
    <footer className="w-full bg-[#090D15] font-exo2">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[16px] sm:px-[12px] py-[80px] md:py-[60px] sm:py-[32px] ">
        {/* Top Grid: 4 columns in a single row */}
        <div className="flex flex-row space-x-4">
          {/* Grid 1: Company Info */}
          <div className="grid w-[350px] min-w-0">
            <div>
              <Image
                src="/images/home/logo-auto.png"
                alt="AutoSquare logo"
                width={200}
                height={60}
                className="mb-[15px] bg-[#090D15]"
              />
              <ul className="space-y-[8px] text-[14px] text-white leading-[1.5]">
                <li>AutoSquareCo INC DBA AutoSquare</li>
                <li>Toll Free: (888) 748–0882</li>
                <li>Fax: (312) 845–9711</li>
                <li>Email: <a href="mailto:support@autosquare.us" className="underline">support@autosquare.us</a></li>
                <li>Website: <a href="https://www.autosquare.us" className="underline">www.autosquare.us</a></li>
                <li>Location: 6335 Contessa Dr Orlando, FL 32829, USA</li>
              </ul>
              <div className="flex space-x-[16px] mt-[16px]">
                <div className="flex items-center space-x-1">
                  <Image src="/images/home/social media (5).svg" alt="Facebook" width={24} height={24} />
                  <span className="text-white text-[14px]">Facebook</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image src="/images/home/social media (4).svg" alt="Instagram" width={24} height={24} />
                  <span className="text-white text-[14px]">Instagram</span>
                </div>
              </div>
            </div>
          </div>
          {/* Grid 2: 3 columns */}
          <div className="grid grid-cols-3 gap-2 w-[600px] min-w-0">
            {/* Column 2: Online Store */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">Online Store</h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/auto-parts" className="hover:text-white">Auto parts</a></li>
                <li><a href="/engine" className="hover:text-white">Engine</a></li>
                <li><a href="/transmission" className="hover:text-white">Transmission</a></li>
                <li><a href="/contacts" className="hover:text-white">Contacts</a></li>
              </ul>
            </div>
            {/* Column 3: Information */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">Information</h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li><a href="/about-us" className="hover:text-white">About us</a></li>
                <li><a href="/delivery-payment" className="hover:text-white">Delivery and Payment</a></li>
                <li><a href="/warranty-returns" className="hover:text-white">Warranty and Returns</a></li>
                <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            {/* Column 4: Resources */}
            <div>
              <h3 className="text-white uppercase font-exo2 font-bold text-[16px] mb-[16px]">Resources</h3>
              <ul className="space-y-[8px] text-[14px] text-[#CCCCCC] leading-[1.6]">
                <li><a href="/track-order" className="hover:text-white">Track my order</a></li>
                <li><a href="/make-payment" className="hover:text-white">Make a payment</a></li>
                <li><a href="/submit-ticket" className="hover:text-white">Submit a ticket</a></li>
                <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
                <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Row: 3 columns (Payments, Affiliates, Copyright) */}
        <div className="flex flex-row md:grid-cols-3 gap-[60px]  items-start mt-[40px]">
          {/* Payments */}
          <div className="flex flex-col items-start space-y-2">
            <span className="uppercase text-[14px] text-white mb-2">Pay securely with</span>
                {/* First row of payment icons */}
                <div className="flex space-x-[8px]">
                <Image src="/images/home/visa-inverted_82058.png" alt="Visa" width={48} height={30} className="bg-[#1E2A44] object-contain" />
                <Image src="/images/home/mastercard_82049.png" alt="Mastercard" width={48} height={30} className="bg-[#1E2A44] object-contain" />
                <Image src="/images/home/americanexpress_82060 1.png" alt="Amex" width={48} height={30} className="bg-[#1E2A44] object-contain" />
                <Image src="/images/home/discover_82082.png" alt="Discover" width={48} height={30} className="bg-[#1E2A44] object-contain" />
                </div>
                {/* Second row of payment icons */}
                <div className="flex space-x-[8px] mt-1">
                <Image src="/images/home/authorize-net-seeklogo 1.png" alt="Authorize.Net" width={60} height={48} className="bg-[#1E2A44] object-contain" />
                <Image src="/images/home/visa-inverted_82058 (1).png" alt="Visa 2" width={80} height={48} className="bg-[#1E2A44] object-contain" />
                </div>
          </div>
          {/* Member */}
          <div className="flex flex-col items-start space-x-[2px]  ">
            {/* aliegn memebr horizontally with left colon top*/}
              <span className="uppercase font-exo2  text-[14px]  text-white mb-2">Member</span>
              <Image src="/images/home/icon.png" alt="Member Icon" width={64} height={30} className="bg-[#1E2A44] object-contain" />
            </div>
          {/* Affiliates */}
          <div className="flex flex-col items-start">
            <span className="uppercase font-exo2  text-[14px]  text-white mb-2 ">Affiliates</span>
            <div className="flex flex-row space-x-[16px]">
              <Image src="/images/home/white-logo.png" alt="Affiliate 1" width={64} height={30} className="bg-[#1E2A44] object-contain" />
              <Image src="/images/home/white-logo.png" alt="Affiliate 2" width={64} height={30} className="bg-[#1E2A44] object-contain" />
              <Image src="/images/home/white-logo.png" alt="Affiliate 3" width={64} height={30} className="bg-[#1E2A44] object-contain" />
            </div>
          </div>
          
        </div>
        {/* Copyright */}
        <div className="text-center mt-10">
            <p className="text-[12px] text-[#666D80]">
              © 2024 Auto Square – All Rights Reserved.
            </p>
          </div>
      </div>
    </footer>
  );
}
