

import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B1422] flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Side-by-side layout for md+ */}
      <div className="w-full flex items-center justify-center min-h-screen relative">
        {/* Car image full width */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/Images/thx_car.png"
              alt="Car background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        {/* Content card centered */}
        <main className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-8">
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
              <Link href="/account/trackOrder">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-6  w-full md:w-auto transition">Track order</button>
              </Link>
              <Link href="/" className="text-blue-400 hover:underline ml-0 md:ml-4 mt-2 md:mt-0 inline-block text-base">Continue shopping</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
