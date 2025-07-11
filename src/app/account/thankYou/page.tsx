// <!-- thank-you.md -->
// # Order Confirmation (“Thank You”) Page Prompt

// Generate a **mobile-first**, fully responsive “Thank You” / Order Confirmation page using Tailwind CSS (React or plain HTML+Tailwind):

// - **Shared Shell**  
//   - **background image**: Images/thx_img.png w-2825px h-2496px car image background, overlaid centered `brand-logo.svg` and title on card Not on image**“Thank you for shopping with us!”**  
//     - Title styling: uppercase, text-2xl mobile → text-3xl md → text-4xl lg, font-semibold, white.  
//   - **No sidebar** on this post-purchase page.  
//   - **Breadcrumb** under banner (optional): "Home > Thank you" in small, gray-400.

// - **Content Card** (centered, max-width `md:max-w-lg` on mobile → `lg:max-w-xl`, `bg-gray-900`, rounded-2xl, shadow-lg, p-6 mobile → p-8 md → p-12 lg):
//   1. **Header**  
//      - Left: **DELIVER TO** label (uppercase, text-sm, gray-300)  
//      - Under it, recipient info (white, text-base):
//        ```
//        Kseniiia Melnyk  
//        Street 1, City, State, ZIP code, Country  
//        (888) 000-0000
//        ```  
//      - Right (on md/lg side-by-side, mobile stacked): **PAYMENT METHOD** label + masked card "**** **** **** 8888" and `mastercard.svg path: Images/mcard.png` logo.
//   2. **Order Details** block:
//      - Divider line (border-gray-700, my-4).  
//      - Title row: **ORDER DETAILS #12345** (uppercase, text-sm, gray-400) on left, date **"21 July 2024"** (text-sm, gray-400) on right.  
//      - For each item:
//        - Thumbnail (64×64) on left.  path: Images/photo-1.png
//        - In the middle:  
//          - **Title name of part** (text-base, white)  
//          - "Ford Bronco 1991" (text-sm, gray-300)  
//          - "4.9L" (text-sm, gray-300)  
//          - "from 2/3/91 (AIR inner manifold)" (text-sm, gray-300)  
//          - "E4OD transmission" (text-sm, gray-300)  
//          - "1 pc." (text-sm, gray-300)  
//        - On right: price **"$800"** (text-base, white)  
//        - After each item: small divider (border-gray-700, my-3).
//   3. **Summary Totals**:
//      - Cart total: **$1600**  
//      - Shipping: **Free Shipping**  
//      - Sales Tax: **$46**  
//      - Divider (border-gray-700, my-4)  
//      - **TOTAL: $1646** (uppercase, text-lg, font-semibold, white)
//   4. **Actions**:
//      - Primary button: **"Track order"** (`bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 mt-6`)  
//      - Secondary link: **"Continue shopping"** (text-blue-400 hover:underline ml-4 mt-6 inline-block)
  
// - **Responsiveness**:
//   - On mobile all sections stack vertically with full width.  
//   - On md/lg, header (Deliver To / Payment) is a two-column row; order details and summary remain full-width inside the card.  
//   - Typography scales fluidly: text-sm → text-base → text-lg at breakpoints; padding increases as defined.

// Ensure all text, logos, and placeholders match exactly as specified.```

// Save this snippet as `thank-you.md` and feed it to your code generator.

import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B1422] flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Side-by-side layout for md+ */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen relative">
        {/* Car image left, fixed size, only visible on md+ */}
        <div className="hidden md:flex items-center justify-end flex-1 relative min-h-[600px]">
          <div className="relative w-[520px] h-[480px] xl:w-[700px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px]">
            <Image
              src="/Images/thx_img.png"
              alt="Car background"
              fill
              className="object-cover object-left rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
        {/* Content card right, overlapping car image */}
        <main className="relative z-10 w-full md:w-auto flex flex-col items-center justify-center px-2 py-8 md:py-6 md:-ml-32 lg:-ml-40 xl:-ml-56 2xl:-ml-72">
          <div className="mx-auto w-full max-w-lg lg:max-w-xl bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 flex flex-col">
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-6">
              {/* <Image src="/Images/logo.svg" alt="Brand Logo" width={80} height={80} className="mb-2" priority /> */}
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center leading-tight tracking-wide">
                Thank you
              </h1>
              <div className="text-white text-xl md:text-2xl lg:text-3xl font-normal italic text-center mt-1">
                for shopping with us!
              </div>
            </div>
            {/* Header: Deliver To / Payment */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 mb-1">
              <div>
                <div className="uppercase text-sm text-gray-300 font-semibold">Deliver To</div>
                <div className="text-white text-sm mt-1 leading-tight">
                  Kseniia Melnyk<br />
                  Street, 1, City, State, ZIP code, Country<br />
                  (888) 000-0000
                </div>
              </div>
              <div className="flex flex-col items-start md:items-center">
                <div className="uppercase text-sm text-gray-300 font-semibold pr-12">Payment Method</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-white text-sm tracking-widest">**** **** **** 8888</span>
                  <Image src="/Images/mcard.png" alt="Mastercard" width={32} height={20} />
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="border-t border-white my-4" />
            {/* Order Details */}
            <div className="flex flex-row justify-between items-center mb-2">
              <div className="uppercase text-sm text-white font-semibold">Order Details <span className="font-normal">  #12345</span></div>
              <div className="text-sm text-white">21 July 2024</div>
            </div>
            {/* Item 1 */}
            <div className="flex flex-row items-start gap-4 py-2">
              <Image src="/Images/photo-1.png" alt="Part" width={64} height={64} className="rounded-lg" />
              <div className="flex-1">
                <div className="text-base text-white font-semibold">Title name of part</div>
                <div className="text-sm text-gray-300">Ford Bronco 1991</div>
                <div className="text-sm text-gray-300">4.9L</div>
                <div className="text-sm text-gray-300">from 2/3/91 (AIR inner manifold)</div>
                <div className="text-sm text-gray-300">E4OD transmission</div>
                <div className="text-sm text-gray-300">1 pc.</div>
              </div>
              <div className="text-base text-white font-semibold min-w-[60px] text-right">$800</div>
            </div>
            {/* <div className="border-t border-gray-700 my-3" /> */}
            {/* Item 2 */}
            <div className="flex flex-row items-start gap-4 py-2">
              <Image src="/Images/photo-1.png" alt="Part" width={64} height={64} className="rounded-lg" />
              <div className="flex-1">
                <div className="text-base text-white font-semibold">Title name of part</div>
                <div className="text-sm text-gray-300">Ford Bronco 1991</div>
                <div className="text-sm text-gray-300">1 pc.</div>
              </div>
              <div className="text-base text-white font-semibold min-w-[60px] text-right">$800</div>
            </div>
            <div className="border-t border-white my-3" />
            {/* Summary Totals */}
            <div className="flex flex-col gap-1 text-base text-white mt-2">
              <div className="flex justify-between"><span>Cart total:</span><span>$1600</span></div>
              <div className="flex justify-between"><span>Shipping:</span><span className="text-white">Free Shipping</span></div>
              <div className="flex justify-between"><span>Sales Tax:</span><span>$46</span></div>
            </div>
            <div className="border-t border-white my-4" />
            <div className="flex justify-between items-center text-lg font-semibold text-white uppercase">
              <span>Total:</span>
              <span>$1646</span>
            </div>
            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 font-semibold w-full md:w-auto transition">Track order</button>
              <Link href="/" className="text-blue-400 hover:underline ml-0 md:ml-4 mt-2 md:mt-0 inline-block text-base">Continue shopping</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
