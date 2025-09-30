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
            Warranty Policy
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
          WARRANTY POLICY
        </h1>

        <div className="space-y-12">
          {/* WARRANTY POLICY Section */}
        <section>
          {/* <h2
            className="font-audiowide text-lg lg:text-2xl mb-4"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            WARRANTY POLICY
          </h2> */}
          <div className="space-y-6">
            <div>
              <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                We stand behind the quality of the parts we sell. All parts are carefully inspected and come with warranty coverage for your peace of mind.
              </p>
            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Standard Warranty
              </h3>
               <ul className="list-disc list-inside lg:text-xl space-y-2 mt-2">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">All used parts, including engines and transmissions, are covered by a 90-day limited warranty from the date of delivery. </li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">This warranty covers manufacturing defects in key components such as the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps. </li>
               
              </ul>
            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Extended Warranty
              </h3>
              <ul className="list-disc list-inside lg:text-xl space-y-2 mt-2">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Extended warranty options are available on most parts.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Please contact our sales team at (888) 338-2540 for details and availability.</li>
               
              </ul>
            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                What Is Not Covered
              </h3>
              <p className="font-exo2 text-base lg:text-xl leading-relaxed mb-2">
                The warranty does not cover issues arising from:
              </p>
              <ul className="list-disc list-inside lg:text-xl space-y-2 mt-2">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Improper installation, misuse, or modification of the part.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Lack of proper maintenance, including failure to maintain lubrication and cooling.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Damage resulting from accidents, racing, or off-road use.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Normal wear items and accessories such as belts, hoses, sensors, switches, gaskets, electronics, or wiring.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Cosmetic factors such as paint color, finish, or upholstery.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Warranty Process
              </h3>

              <ul className="list-disc list-inside lg:text-xl space-y-2 mt-2">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">If you experience a problem with your part, please contact our customer service team at (888) 338-2540 or email partscentralus@gmail.com. </li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">You may be asked to return the defective part for inspection.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">If the warranty claim is approved, we will provide a replacement part or a refund depending on the situation.</li>
              </ul>

            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Important Notes
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">Warranty is valid only for items installed and used within the United States.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">All warranty claims require proof of purchase.</li>
                <li className="font-exo2 text-base lg:text-xl leading-relaxed">The warranty applies only to the original purchaser and is not transferable.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-exo2 font-semibold lg:text-2xl mt-4 mb-2">
                Customer Support
              </h3>
              <p className="font-exo2 text-base lg:text-xl leading-relaxed">
                For warranty-related questions, please contact us:
              </p>
              <p className="font-exo2 text-base lg:text-lg leading-relaxed mt-2">
                📞 (888) 338-2540 (Mon-Fri, 8:00 am - 7:00 pm EST) <br />
                 Email:{" "}
                <a
                    href="mailto:partscentralus@gmail.com"
                    className="underline"
                >
                    partscentralus@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      </div>
    </div>
  );
}
