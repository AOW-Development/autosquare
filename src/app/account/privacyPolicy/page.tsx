"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

export default function PrivacyPolicy() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // const toggleItem = (index: number) => {
  //   setOpenItems((prev) =>
  //     prev.includes(index)
  //       ? prev.filter((item) => item !== index)
  //       : [...prev, index]
  //   );
  // };

  // const leftFAQItems: FAQItem[] = [
  //   {
  //     question: "What information do we collect from you?",
  //     answer:
  //       "You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3–5 business days to process a credit back to your account and 2–3 business days for the credit to appear on your account. Engine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.",
  //   },
  //   {
  //     question: "Where and how we collect and use your information?",
  //     answer:
  //       "We collect information through various channels including when you visit our website, make purchases, create an account, or contact our customer service. This information helps us process your orders, provide customer support, and improve our services.",
  //   },
  //   {
  //     question: "With whom do we share your information?",
  //     answer:
  //       "We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent.",
  //   },
  //   {
  //     question:
  //       "How can you update or correct your Personally Identifiable Information?",
  //     answer:
  //       "You can update or correct your personal information by logging into your account and editing your profile information, or by contacting our customer service team directly.",
  //   },
  //   {
  //     question:
  //       "What are your choices regarding collection, use and distribution of your information?",
  //     answer:
  //       "You have the right to opt out of certain communications, request deletion of your data, and control how your information is used. You can manage these preferences through your account settings or by contacting us.",
  //   },
  //   {
  //     question: 'Use of "cookies"',
  //     answer:
  //       "We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser preferences.",
  //   },
  // ];

  // const rightFAQItems: FAQItem[] = [
  //   {
  //     question:
  //       "What security precautions are in place to protect against the loss, misuse or alteration of your information?",
  //     answer:
  //       "We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information from unauthorized access, alteration, or disclosure.",
  //   },
  //   {
  //     question:
  //       "You should carefully review privacy policies of any third party sites accessible from the site.",
  //     answer:
  //       "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.",
  //   },
  //   {
  //     question: "Children's Privacy",
  //     answer:
  //       "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.",
  //   },
  //   {
  //     question: "partscentral.us General Privacy Policy",
  //     answer:
  //       "This privacy policy applies specifically to our website and services. For information about how partscentral.us handles your data across all platforms, please refer to our general privacy policy available on our main website.",
  //   },
  //   {
  //     question: "Contacting Us About our Privacy Policy",
  //     answer:
  //       "If you have any questions about this Privacy Policy or our privacy practices, please contact us through our customer service channels or email us at privacy@partscentral.us",
  //   },
  //   {
  //     question: "Privacy Policy Changes",
  //     answer:
  //       "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this policy periodically.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2  py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
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
          <span className="text-white">Privacy Policy</span>
        </div>

        {/* <div className="px-3 md:px-4 lg:px-8 "> */}
        {/* Main Heading */}
        {/* <h1 className="font-audiowide text-2xl md:text-3xl lg:text-4xl mb-4 text-left">
          Privacy Policy
        </h1> */}
        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Privacy Policy
        </h1>

        {/* Intro Paragraph */}
         <div className="space-y-8 md:space-y-10">
          {/* Overview */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Overview
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Parts Central LLC and its third-party service providers (together
              referred to as "we" or "us") are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              share information when you use our website at
              https://usedpartscentral.com ("the Site").
            </p>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              Our services include credit card processing, shipping, and other
              third-party operations necessary to fulfill orders. By using the
              Site, you agree to the practices described in this Privacy Policy.
              We recommend reviewing this policy periodically as it may change
              over time.
            </p>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              For additional information regarding your rights and obligations
              when purchasing from the Site, please also review our Terms and
              Conditions.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Information We Collect
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We collect two types of information from visitors: Personally
              Identifiable Information and Non-Personally Identifiable
              Information.
            </p>

            <h2 className="font-audiowide font-semibold text-lg md:text-xl mb-3 mt-4 uppercase">
              Personally Identifiable Information
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              This is information that identifies you directly. We collect it
              when you:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg font-exo2 mt-2 space-y-1">
              <li>Place an order</li>
              <li>Participate in surveys, contests, or sweepstakes</li>
              <li>Contact us via email, phone, or live chat</li>
            </ul>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              This may include your name, mailing address, email address, phone
              number, and payment details. This information allows us to process
              orders, provide personalized service, and communicate order
              updates. Payment information is securely processed through trusted
              third-party providers.
            </p>

            <h3 className="font-audiowide font-semibold text-lg md:text-xl mb-3 mt-4 uppercase">
              Non-Personally Identifiable Information
            </h3>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              This includes information that does not identify you directly. We
              collect it to improve your experience on the Site and may include:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg font-exo2 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Referring and next URL</li>
              <li>Search terms used</li>
            </ul>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We analyze this data in aggregate to enhance our website content,
              improve services, and understand customer preferences.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg font-exo2 space-y-1">
              <li>Process and deliver your orders</li>
              <li>Provide customer service and respond to inquiries</li>
              <li>Send updates, newsletters, and promotions with your consent</li>
              <li>Analyze website traffic and improve the Site experience</li>
            </ul>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We may also use your information to administer contests, surveys,
              and warranty programs.
            </p>
          </div>

          {/* Sharing Your Information */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Sharing Your Information
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. Information may be shared with:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg font-exo2 mt-2 space-y-1">
              <li>Payment processors to authorize and process transactions</li>
              <li>Shipping partners to deliver your orders</li>
              <li>
                Third-party warranty providers if you purchase extended coverage
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We may also share information as part of a business transfer,
              merger, or sale of assets, but only in compliance with this
              Privacy Policy.
            </p>
          </div>

          {/* Updating or Correcting */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Updating or Correcting Your Information
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              You can update or correct your personal information at any time
              through your account page on the Site. If you wish, you may
              request deletion of your information, subject to legal obligations
              and records of past transactions.
            </p>
          </div>

          {/* Marketing Communications */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Marketing Communications
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              With your consent, we may send newsletters, promotions, or product
              updates. You can opt out at any time by:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base lg:text-lg font-exo2 mt-2 space-y-1">
              <li>Unchecking the opt-in box in your account settings</li>
              <li>Following the unsubscribe instructions in emails</li>
              <li>Replying STOP or HELP to SMS notifications</li>
            </ul>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              We do not share your contact information for external marketing
              purposes.
            </p>
          </div>

          {/* Security Measures */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Security Measures
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              We take the security of your information seriously. The Site uses
              advanced encryption, secure servers, and firewall technology to
              protect your data. SSL encryption is used for sensitive
              information such as payment details.
            </p>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed mt-2">
              Third-party service providers handling payment and shipping are
              bound by confidentiality agreements and use secure practices to
              protect your information.
            </p>
          </div>

          {/* Use of Cookies */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Use of Cookies
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              Our Site uses cookies to enhance your browsing experience, store
              preferences, and improve site functionality. Cookies cannot access
              personal information from your computer and cannot transmit
              viruses. You can disable cookies in your browser settings, but
              this may limit certain Site features.
            </p>
          </div>

          {/* Children’s Privacy */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Children’s Privacy
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              The Site is intended for users 18 years or older. We do not
              knowingly collect information from children under 18. If you
              believe a minor has submitted personal information to us, please
              contact us to have it removed.
            </p>
          </div>

          {/* Contact Information */}
          <div>
             <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Contact Information
            </h2>
            <p className="font-exo2 text-sm md:text-base lg:text-lg leading-relaxed">
              For questions about this Privacy Policy or your personal data,
              please contact us at:  (888) 338-2540
            </p>
              <p className="font-exo2 text-sm md:text-lg leading-relaxed">
                Email:{" "}
                <a
                    href="mailto:partscentralus@gmail.com"
                    className="underline"
                >
                    partscentralus@gmail.com
                </a>
                </p>
          </div>

          {/* Privacy Policy Updates */}
          <div>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">
              Privacy Policy Updates
            </h2>
            <p className="font-exo2 text-sm md:text-base leading-relaxed">
              This Privacy Policy was last updated in August 2025. Material
              changes will be posted on our homepage. We encourage you to review
              this page regularly to stay informed about our privacy practices.
            </p>
          </div>
        </div>
      

        {/* <h2
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          FAQ
        </h2>
        {/* FAQ Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Left Column */}
          {/* <div className="space-y-2 md:space-y-4">
            {leftFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF] ">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-left pb-3 md:pb-4 font-exo2 text-xs md:text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Right Column */}
          {/* <div className="space-y-2 md:space-y-4">
            {rightFAQItems.map((item, index) => (
              <div key={index} className="border-b border-[#FFFFFF]">
                <button
                  onClick={() => toggleItem(index + leftFAQItems.length)}
                  className="w-full py-3 md:py-4 text-left font-exo2 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-sm md:text-base">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openItems.includes(index + leftFAQItems.length)
                        ? "rotate-180"
                        : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index + leftFAQItems.length)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-3 md:pb-4 font-exo2 text-xs md:text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  */}
      </div> 
    </div>
  );
}
