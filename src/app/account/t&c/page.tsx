"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2  py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link href="/" className="">
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
          <span className="font-exo2 text-white">Terms and Conditions</span>
        </div>

        {/* Title */}
        {/* <h1 className="font-audiowide text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 mt-4 md:mt-8 text-left">
          TERMS AND CONDITIONS
        </h1> */}
        <h2
          className="font-audiowide text-white text-lg sm:text-3xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 tracking-wide uppercase text-left w-full whitespace-nowrap"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          TERMS AND CONDITIONS
        </h2>

        {/* Last updated */}
        <p className="font-exo2 font-semibold mb-1 md:mb-2 mt-2 md:mt-4 text-sm md:text-base">
          Last updated: 08/27/20:
        </p>

        {/* Intro paragraph */}
        <div className="space-y-5 md:space-y-8">
          <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
            Please read these Terms of Use ("Terms", "Terms of Use") carefully
            before using the partscentral.us website (the "Service") operated by
            Parts Central LLC ("us", "we", or "our"). Your access to and use of
            the Service is conditioned on your acceptance of and compliance with
            these Terms. These Terms apply to all visitors, users and others who
            access or use the Service. By accessing or using the Service you
            agree to be bound by these Terms. If you disagree with any part of
            the terms then you may not access the Service.
          </p>

          {/* Intellectual Property */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Intellectual Property:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              The Service and its original content, features and functionality
              are and will remain the exclusive property of partscentral.us and
              its licensors.
            </p>
          </div>

          {/* Links To Other Web Sites */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Links To Other Web Sites:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by partscentral.us.
              partscentral.us has no control over, and assumes no responsibility
              for, the content, privacy policies, or practices of any third
              party web sites or services. You further acknowledge and agree
              that partscentral.us shall not be responsible or liable, directly
              or indirectly, for any damage or loss caused or alleged to be
              caused by or in connection with use of or reliance on any such
              content, goods or services available on or through any such web
              sites or services. We strongly advise you to read the terms and
              conditions and privacy policies of any third-party web sites or
              services that you visit.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Termination:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms. All
              provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Disclaimer:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Your use of the Service is at your sole risk. The Service is
              provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement or course of performance.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Governing Law:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              These Terms shall be governed and construed in accordance with the
              laws of United States without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights. If any
              provision of these Terms is held to be invalid or unenforceable by
              a court, the remaining provisions of these Terms will remain in
              effect. These Terms constitute the entire agreement between us
              regarding our Service, and supersede and replace any prior
              agreements we might have had between us regarding the Service.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Changes:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion. By continuing to access or use our Service
              after those revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, please
              stop using the Service.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="font-exo2 font-semibold mt-6 md:mt-8 mb-1 md:mb-2 text-base md:text-lg">
              Contact Us:
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
