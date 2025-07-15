"use client";
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div>
    <div className="w-full h-[320px] relative bg-[#091B33]   overflow-hidden flex items-center justify-center">
      <Image
        src="/autoparts/banner.png"
        alt="Account Banner"
        fill
        className="object-cover object-center "
        
      />
    </div>
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-6 lg:p-8">
      {/* <div className="md:w-1/4">
        <Sidebar activeKey="" />
      </div> */}
      <div className="flex-1 flex flex-col gap-6">
      
        <div className="max-w-6xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-base text-white mb-6">
            <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
              <Image src="/account/HouseLine.png" alt="Home" width={24} height={24} />
              <Image src="/autoparts/arrows (1).png" alt="Arrow" width={16} height={16} />
            </Link>
            {/* <span>&gt;</span> */}
            <span>About us</span>
          </div>
          
          <main className="flex flex-col gap-2">
            {/* WHO ARE WE? Section */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold uppercase ">WHO ARE WE?</h2>
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1">
                  <p className="text-base text-gray-200 leading-relaxed mt-4">
                    AutoSquareCo INC has always been your one-stop shop for replacement high-quality used OEM automotive parts and accessories. Our experts are always a phone call away for quick, real-time advice, and efficiently respond to your queries. Our prices are competitive and we strive to provide the best parts at the most affordable prices. Give us a call today.
                  </p>
                </div>
                <div className="flex-1 flex justify-center md:justify-center">
                  <Image 
                    src="/Images/car.png" 
                    alt="Car" 
                    width={400} 
                    height={300}
                    className="rounded-2xl "
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
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="bg-[#091627] rounded-l shadow-sm p-6 mb-4">
                  <h3 className="font-semibold text-lg mb-2">Shipping's on Us</h3>
                  <p className="text-gray-200">Get your ordered parts delivered expeditiously. Initial shipping on ALL Orders is FREE! (*T&C Apply*)</p>
                </div>
                <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                  {/* add bg img here : about/fst-card.png */}
                  <Image
                    src="/about/Mask group.png"
                    alt=""
                    fill
                    className="object-cover z-0 pointer-events-none"
                    quality={70}
                  />
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2">Easy Replacements</h3>
                    <p className="text-gray-200">Enjoy peace of mind with easy returns and replacements.</p>
                  </div>
                </div>
                <div className="bg-[#091627] rounded-l shadow-sm p-8 mb-4">
                  <h3 className="font-semibold text-lg mb-2">Timely Delivery</h3>
                  <p className="text-gray-200">We strive and fulfill all our customer orders in a timely manner.</p>
                </div>
                <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                  {/* add bg img here : about/card-btn.png */}
                  <Image
                 src="/about/card-betn.png" 
                    alt=""
                    fill
                    className="object-cover z-0 pointer-events-none"
                    quality={70}
                  />
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2">Warranty</h3>
                    <p className="text-gray-200">We provide a standard warranty on all Engines & Transmissions sold by us.</p>
                  </div>
                </div>
                <div className="bg-[#091627] rounded-l shadow-sm p-8 mb-4">
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-gray-200">We offer reliable and quality used OEM Auto Parts, Engines, and Transmissions.</p>
                </div>
                <div className="relative bg-[#091627] rounded-r shadow-sm p-4 mb-4 overflow-hidden">
                  {/* add bg img here : about/Mask group.png */}
                  <Image
                     
                    src="/about/fst-card.png"
                    alt=""
                    fill
                    className="object-cover z-0 pointer-events-none"
                    quality={70}
                  />
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                    <p className="text-gray-200">We provide competitive pricing on all our products with multiple options to meet your budget.</p>
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

