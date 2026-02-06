"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
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

          <span className="text-white">Privacy Policy</span>
        </div>


        {/* Title */}
        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          PRIVACY POLICY
        </h1>


        <div className="space-y-8 md:space-y-10">


          {/* Overview */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Overview
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit https://partscentral.us ("the Site") or interact with our services.
            </p>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              Parts Central LLC is located at:
              <br />
              76 Imperial Dr Suite E
              <br />
              Evanston, WY 82930, USA
            </p>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We work with trusted third-party providers for payment processing, shipping, and warranty services. By using our Site, you agree to the practices described in this Privacy Policy.
            </p>

          </div>


          {/* Information We Collect */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Information We Collect
            </h2>


            <h3 className="font-audiowide font-semibold text-lg md:text-xl mb-3 mt-4 uppercase">
              Personally Identifiable Information
            </h3>

            <ul className="list-disc list-inside font-exo2 text-sm md:text-base lg:text-lg space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and shipping address</li>
              <li>Payment information (securely processed by trusted providers)</li>
            </ul>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We collect this information when you place orders, contact support, or interact with our services.
            </p>


            <h3 className="font-audiowide font-semibold text-lg md:text-xl mb-3 mt-4 uppercase">
              Non-Personally Identifiable Information
            </h3>

            <ul className="list-disc list-inside font-exo2 text-sm md:text-base lg:text-lg space-y-1">
              <li>IP address</li>
              <li>Browser and device information</li>
              <li>Website usage data</li>
              <li>Pages visited</li>
              <li>Referring URLs</li>
            </ul>

          </div>


          {/* How We Use Information */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              How We Use Your Information
            </h2>

            <ul className="list-disc list-inside font-exo2 text-sm md:text-base lg:text-lg space-y-1">
              <li>Process and fulfill orders</li>
              <li>Provide customer support</li>
              <li>Send order confirmations and updates</li>
              <li>Improve website functionality</li>
              <li>Prevent fraud and ensure security</li>
              <li>Send marketing communications (only with consent)</li>
            </ul>

          </div>


          {/* Sharing */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Sharing Your Information
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC does not sell or rent your personal information.
            </p>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We may share your information with trusted service providers including payment processors, shipping providers, warranty partners, and legal authorities when required by law.
            </p>

          </div>


          {/* Cookies */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Cookies
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Our Site uses cookies to improve functionality, analyze traffic, and enhance user experience. You may disable cookies in your browser settings.
            </p>

          </div>


          {/* Security */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Data Security
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We use SSL encryption, secure servers, and trusted third-party providers to protect your personal information.
            </p>

          </div>


          {/* Children */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Children's Privacy
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Our website is intended for users aged 18 and older. We do not knowingly collect personal information from minors.
            </p>

          </div>


          {/* Contact */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Contact Information
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">

              Parts Central LLC
              <br />
              76 Imperial Dr Suite E
              <br />
              Evanston, WY 82930, USA
              <br /><br />

              Phone:{" "}
              <a href="tel:+18883382540" className="underline">
                (888) 338-2540
              </a>

              <br />

              Email:{" "}
              <a href="mailto:support@partscentral.us" className="underline">
                support@partscentral.us
              </a>

            </p>

          </div>


          {/* Updates */}
          <div>

            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Policy Updates
            </h2>

            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              This Privacy Policy may be updated periodically. Updates will be posted on this page.
            </p>

          </div>


        </div>

      </div>

    </div>
  );
}
