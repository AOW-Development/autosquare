"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      <div className="md:w-1/4">
        <Sidebar activeKey="" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <div className="max-w-6xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span>About us</span>
          </div>
          
          <main className="flex flex-col gap-8">
            {/* WHO ARE WE? Section */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold uppercase mb-4 md:mb-6">WHO ARE WE?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <p className="text-base text-gray-200 leading-relaxed mb-6">
                  AutoSquareCo INC has always been your one-stop shop for replacement high-quality used OEM automotive parts and accessories. Our experts are always a phone call away for quick, real-time advice, and efficiently respond to your queries. Our prices are competitive and we strive to provide the best parts at the most affordable prices. Give us a call today.
                </p>
                <div className="flex justify-center">
                  <Image 
                    src="/Images/car.png" 
                    alt="Car" 
                    width={400} 
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* OUR GOAL Section */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold uppercase mb-4 md:mb-6">OUR GOAL</h2>
              <p className="text-base text-gray-200 leading-relaxed mb-6">
                To make the buying process as seamless and worry-free as possible for our customers and to provide after-sales service in a professional manner. We want to treat you like we would want to be treated.
              </p>
            </section>

            {/* Feature Grid */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Shipping's on Us</h3>
                  <p className="text-gray-200">Get your ordered parts delivered expeditiously. Initial shipping on ALL Orders is FREE! (*T&C Apply*)</p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Easy Replacements</h3>
                  <p className="text-gray-200">Enjoy peace of mind with easy returns and replacements.</p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Timely Delivery</h3>
                  <p className="text-gray-200">We strive and fulfill all our customer orders in a timely manner.</p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Warranty</h3>
                  <p className="text-gray-200">We provide a standard warranty on all Engines & Transmissions sold by us.</p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-gray-200">We offer reliable and quality used OEM Auto Parts, Engines, and Transmissions.</p>
                </div>
                <div className="bg-gray-800 rounded-2xl shadow-sm p-4">
                  <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                  <p className="text-gray-200">We provide competitive pricing on all our products with multiple options to meet your budget.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

