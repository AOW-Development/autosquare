"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function AddedCartPopup() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="fixed top-6 right-6 z-50 w-[370px] bg-[#091b33] rounded-md shadow-lg text-white font-exo2 animate-fade-in">
      <div className="border-b border-white flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-lg font-bold tracking-wide">SHOPPING CART</span>
        <button onClick={() => setOpen(false)} className="text-xl hover:text-[#1E90FF]">×</button>
      </div>
      <div className="flex px-5 pb-4 pt-4 ">
        <Image src="/Images/main.png" alt="part" width={70} height={70} className="rounded mr-4 object-contain" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <span className="font-semibold text-base">Title name of part</span>
            <span className="font-bold text-lg">$800</span>
          </div>
          <div className="text-[#A3B6CC] text-sm mt-1">
            Ford Bronco 1991<br />
            4.9L<br />
            from 2/3/91 (AIR inner manifold)<br />
            E4OD transmission<br />
            1 pc.
          </div>
        </div>
      </div>
      <div className="border-t  border-white px-5 py-3 flex flex-col gap-2">
        <div className="flex justify-between text-base">
          <span>Total:</span>
          <span className="font-bold">$1600</span>
        </div>
        <div className="flex gap-3 mt-2">


          <Link href="/account/cart" className="flex-1">
            <button className="w-full border border-[#1E90FF] rounded-md py-2 text-[#A3B6CC] hover:bg-[#1E90FF]/10 transition">Go to cart</button>
          </Link>
          <Link href="/account/checkout" className="flex-1">
            <button className="w-full bg-[#1E90FF] rounded-md py-2 text-white font-semibold hover:bg-[#1877CC] transition">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
