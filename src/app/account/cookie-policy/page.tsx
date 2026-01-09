"use client";
import Image from "next/image";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 py-4 mt-1 text-[15px] font-medium">
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
          <span className="text-white">Cookie Policy</span>
        </div>

        {/* Heading */}
        <h1
          className="font-audiowide text-white text-xl md:text-4xl mt-4 mb-6 uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Cookie Policy
        </h1>

        {/* Content */}
        <div className="space-y-8">
          {/* Intro */}
          <p className="font-exo2 text-lg md:text-lg leading-relaxed">
            At PartsCentral, your privacy matters to us. We’re committed to being transparent 
            about how we use cookies and similar technologies on our website. 
            This Cookie Policy explains what cookies are, how we use them, 
            and how you can manage your preferences.
          </p>

          {/* What Are Cookies */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">What Are Cookies?</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. 
              They allow the site to function properly, improve your browsing experience, 
              and provide valuable insights into how visitors use the site.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">How We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-2 font-exo2 text-sm md:text-lg leading-relaxed">
              <li>Ensure our website works as intended.</li>
              <li>Remember your preferences and saved settings.</li>
              <li>Improve site speed, security, and overall performance.</li>
              <li>Analyze visitor behavior to enhance your shopping experience.</li>
              <li>Display offers and promotions that are relevant to you.</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Types of Cookies We Use</h2>
            <ol className="list-decimal list-inside space-y-2 font-exo2 text-sm md:text-lg leading-relaxed">
                <li>
                    <strong>Essential Cookies:</strong>&nbsp; necessary for core site functions, such as secure login and shopping cart usage.
                </li>
                <li>
                    <strong>Performance Cookies:</strong>&nbsp; help us understand how visitors use the site so we can improve usability.
                </li>
                <li>
                    <strong>Functional Cookies:</strong>&nbsp; remember your preferences to make your browsing more seamless.
                </li>
                <li>
                    <strong>Advertising Cookies:</strong>&nbsp; deliver tailored promotions and product recommendations.
                </li>
                </ol>

          </section>

          {/* Pixels */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Pixels</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              Pixels are tiny graphics with unique identifiers that help track online activities. 
              Unlike cookies, which are stored on your device, pixels are embedded invisibly 
              in web pages or HTML-based emails. They enable insights into behavior but are 
              controlled by third parties. PartsCentral does not manage how third parties use these pixels.
            </p>
          </section>

          {/* Google Analytics */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Google Analytics</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              We use Google Analytics to better understand how visitors interact with our website. 
              Google may collect data such as:
            </p>
            <ul className="list-disc list-inside space-y-2 font-exo2 text-sm md:text-lg">
              <li>Entry and exit pages</li>
              <li>Pages viewed and time spent on each</li>
              <li>Browser version and operating system</li>
              <li>IP address and geolocation</li>
            </ul>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed mt-3">
              Google aggregates this information and shares insights with us and other website operators, 
              including demographics, interests, regions, and browsing devices. 
              We may also use advanced Google Analytics features, including display advertising. 
              These use first-party cookies (like Google Analytics) and third-party cookies 
              (like the DoubleClick cookie) to optimize and deliver relevant ads.
            </p>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed mt-3">
                To manage your Google Analytics preferences, visit the{" "}
                <Link href="https://policies.google.com/privacy" className="underline">
                    Google Privacy Policy
                </Link>{" "}
                or adjust your settings via the Cookie icon, Cookie link, or Privacy Choices link 
                at the bottom of our site. You can also manage advertising preferences through the{" "}
                <Link href="https://adssettings.google.com/" className="underline">
                    Google Ads Preferences Manager
                </Link>.
                </p>
          </section>

          {/* Online Advertising */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Online Advertising</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              To learn more about interest-based advertising and your choices:
            </p>
            <ul className="list-disc list-inside space-y-2 font-exo2 text-sm md:text-lg mt-2">
              <li>Visit the DAA resources, <Link href="https://aboutads.info/choices" className="underline">aboutads.info/choices</Link></li>
              <li>Visit the NAI resources, <Link href="https://networkadvertising.org/choices" className="underline">networkadvertising.org/choices</Link></li>
              <li>For users in the EEA, UK, or Switzerland, visit <Link href="https://youronlinechoices.eu" className="underline">youronlinechoices.eu</Link></li>
              {/* <li>iOS: Limit Ad Tracking</li>
              <li>Android: Opt-Out of Interest-Based Ads</li>
              <li>Or download the AppChoices app at <Link href="https://youradchoices.com/appchoices" className="underline">youradchoices.com/appchoices</Link></li> */}
            </ul>
            <p className="font-exo2 text-sm md:text-lg mt-4 leading-relaxed">
              You can also adjust mobile settings:
            </p>
            <ul className="list-disc list-inside space-y-2 font-exo2 text-sm md:text-lg mt-2">
                <li>iOS, Limit Ad Tracking</li>
                 <li>Android, Opt-Out of Interest-Based Ads</li>
              
            </ul>
                 <p className="font-exo2 text-sm md:text-lg mt-4 leading-relaxed">
              Or download the AppChoices app at <Link href="https://youradchoices.com/appchoices" className="underline">youradchoices.com/appchoices</Link>
            </p>

            <p className="font-exo2 text-sm md:text-lg leading-relaxed mt-3">
              Note: Opting out does not stop all ads, it only means the ads you see won’t be interest-based. 
              We are not responsible for the effectiveness of third-party opt-out tools.
            </p>
          </section>

          {/* Customer Data */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Customer Data & Traffic Patterns</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
             When you contact us via phone, email, or letter, we may keep a record of the
              correspondence to address issues, resolve disputes, and improve service. If other
               users or third parties provide information about your activities on our site, we
                may also keep those records.
            </p>
             <p className="font-exo2 text-sm md:text-lg leading-relaxed mt-2">
             We also track customer traffic patterns during online sessions,
              including pages viewed, categories browsed, and in some cases, specific URLs.
               Your IP address may be used to diagnose server or software issues and to administer the site.

            </p>
             <p className="font-exo2 text-sm md:text-lg leading-relaxed mt-2">
             We may share aggregated, non-identifiable statistics (such as pages viewed or sales trends)
              with trusted third parties.

            </p>


          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Third-Party Cookies</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              Some cookies may be placed by trusted third-party services, such as analytics providers 
              or payment processors, to support secure transactions and improve our website.
            </p>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Managing Your Cookie Preferences</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              You can manage or disable cookies at any time through your browser settings. 
              Please note: disabling certain cookies may affect how the website functions 
              and may limit your shopping experience.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Updates to This Policy</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              We may update this Cookie Policy periodically. Any changes will be posted here with 
              updated “Last Updated” date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-audiowide font-semibold text-lg md:text-2xl mb-3 uppercase">Contact Us</h2>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">
              If you have any questions about this Cookie Policy, we’re here to help:
            </p>
            <p className="font-exo2 text-sm md:text-lg leading-relaxed">Phone: (888) 338-2540</p>
           <p className="font-exo2 text-sm md:text-lg leading-relaxed">
                Email:{" "}
                <a
                    href="mailto:partscentralus@gmail.com"
                    className="underline"
                >
                    partscentralus@gmail.com
                </a>
                </p>
                </section>

            <section>
                 <h3 className="font-audiowide text-sm md:text-sm mb-3 uppercase">Last Updated: 17/09/2025</h3>
            </section>

        </div>
      </div>
    </div>
  );
}
