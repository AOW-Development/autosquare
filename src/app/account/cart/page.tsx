"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  make: string;
  model: string;
  year: string;
  part: string;
  subPart: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const router = useRouter();
  const [error, setError] = useState("");
  const cartItems = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const isCartEmpty = cartItems.length === 0;
   const { items } = useCartStore()
   const addToCartFiredRef = useRef(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (isCartEmpty) {
      setError("No Products in the cart");
      setTimeout(() => setError(""), 2000);
    } else {
      // router.push("/account/checkout");
       window.location.href = "/account/checkout";
    }
  };

useEffect(() => {
  if (typeof window === "undefined") return;
  if (!cartItems || cartItems.length === 0) return;

  // prevent duplicate firing
  if (addToCartFiredRef.current) return;
  // let itemUrl=`/product/engines/?make=${cartItems[0].make}&model=${cartItems[0].model}&year=${cartItems[0].year}&part=${cartItems[0].part}`;
  const urlParams = new URLSearchParams(window.location.search);
  const make = urlParams.get("make") 
  const model = urlParams.get("model")
  const year = urlParams.get("year") 
  const part = urlParams.get("part") 

  const ecommerceItems = cartItems.map((item) => ({
    item_id: item.id.toString(),          // GA4 requires string
    item_name: item.title,
    item_url: `https://partscentral.us/product/engines/?make=${make}&model=${model}&year=${year}&part=${part}`, 
    price: item.price,
    quantity: item.quantity,
  }));

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "USD",
      value: ecommerceItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      items: ecommerceItems,
    },
  });

  addToCartFiredRef.current = true;

  console.log("✅ GA4 add_to_cart fired", ecommerceItems);
}, [cartItems]);


  return (
    <div className="min-h-screen bg-[#091B33] text-[#FFFFFF] pt-8 pb-22">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image src="/Images/HouseLine.png" alt="Home" width={24} height={24} />
          </Link>
          <Image src="/Images/arrows.png" alt="Arrow" width={16} height={16} />
          <span className="font-exo2 text-sm">Cart</span>
        </div>

        {/* Title */}
        <h1
          className="font-audiowide text-2xl md:text-3xl lg:text-4xl mb-2 text-left"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Shopping Cart
        </h1>

        {/* Continue Shopping Button (Responsive positioning) */}
        <div className="flex justify-start md:justify-end mt-4 md:mt-0">
          <Link href="/" passHref>
            <button className="flex items-center space-x-2 bg-[#02305A] text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-exo2 text-base md:text-lg hover:bg-[#023B6B] transition-colors">
              <span className="text-xl">←</span>
              <span>Continue Shopping</span>
            </button>
          </Link>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 w-full md:mt-10 ">
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">1</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm text-center">
              Cart
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">2</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm text-center">
              Shipping
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">3</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm text-center">
              Payment
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">4</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm text-center">
              Confirm
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
        </div>

        {/* Main Content Grid (Responsive stacking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {/* LEFT: Cart Items */}
           <div className="lg:col-span-2 space-y-4 bg-[#02305A] rounded-lg p-4 md:p-6">
            {/* Header */}
            {!isCartEmpty && (
              <div className="hidden md:grid grid-cols-12 gap-4 py-2 border-b border-gray-400 text-sm md:text-lg font-exo2 font-semibold text-white">
                <div className="col-span-6">Item</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">QTY</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>
            )}

            {/* Cart Items */}
            {isCartEmpty ? (
              <div className="text-center text-white font-exo2 text-lg py-16">
                No products in cart.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center text-white p-4 bg-[#252525E5] rounded-lg shadow"
                >
                  {/* Item Info */}
                  <div className="flex items-center space-x-4 mb-4 md:mb-0 md:col-span-6">
                    <Image
                      src={
                        item.title?.includes("Transmission")
                          ? "/catalog/Trasmission_.png"
                          : "/catalog/Engine 1.png"
                      }

                      alt={item.title||"default"}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-30 md:h-30 object-cover rounded"
                    />
                   <div className="flex-1">
                    <h3 className="font-exo2 font-bold text-white text-lg break-words">
                      {item.title?.includes("Used") ? (
                        <>
                          {item.title.split(/Used/i)[0].trim()}
                          <br />
                          {"Used" + item.title.split(/Used/i)[1]}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-sm text-white break-words">{item.subtitle}</p>
                  </div>

                  </div>

                  {/* Price, Qty, Subtotal (stacked on mobile) */}
                  <div className="flex flex-col md:flex-row md:col-span-6 justify-between items-center w-full">
                    {/* Price */}
                    <div className="flex justify-between w-full md:w-auto md:col-span-2 md:text-center font-exo2 text-lg text-white mb-2 md:mb-0">
                      <span className="md:hidden">Price:</span>
                      <span>${item.price}.00</span>
                    </div>

                    {/* Qty */}
                  <div className="flex justify-between w-full md:w-auto md:col-span-2 md:justify-center mb-2 md:mb-0">
                  <div className="flex items-center space-x-1 text-white rounded-md border border-gray-400 bg-gray-800 px-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center text-white rounded hover:bg-gray-200"
                    >
                      –
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-8 text-center bg-transparent text-lg text-white focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center text-white rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                    {/* Subtotal + Remove */}
                    <div className="relative flex justify-between md:justify-end items-start space-x-2 font-exo2 font-bold text-white text-lg w-full md:w-auto md:col-span-2">
                      <span className="md:hidden">Subtotal:</span>
                      <span className="flex-1 md:flex-initial text-right md:text-left">${item.price * item.quantity}.00</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-[-240px] right-0 text-white hover:text-red-500 md:top-[-50px] md:right-0"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT: Summary */}
          <div className="lg:col-span-1 bg-[#02305A] rounded-lg p-6 py-10 space-y-4 text-white md:mt-6 lg:mt-0">
            {/* Block 1: Totals */}
            <div className="bg-[#252525E5] rounded-lg p-4 shadow space-y-3 md:mt-4">
              <div className="flex justify-between font-exo2 text-base">
                <span>Items:</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between font-exo2 text-base">
                <span>Shipping:</span>
                <span>free shipping</span>
              </div>
              {/* <div className="flex justify-between font-exo2 text-base">
                <span>Taxes:</span>
                <span>TBD</span>
              </div> */}
            </div>

            <div className="pt-2 flex justify-between font-exo2 px-2 font-bold text-white text-xl">
              <span>Estimated Total:</span>
              <span>${total}.00</span>
            </div>

            {/* Block 2: Coupon */}
            <div className="bg-[#252525E5] rounded-lg p-4 shadow space-y-3">
              <label className="text-base font-exo2 font-medium mb-2">
                Enter Coupon Code (Limit 1 coupon):
              </label>
              <div className="grid md:grid-cols-1 md:mt-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-3 py-2 rounded-md border border-gray-400 text-sm "
                />
                <button className="bg-[#02305A] px-4 py-2 mt-4 rounded-md text-white hover:bg-[#02305A] text-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Checkout Button (Responsive positioning) */}
        <div className="flex justify-center md:justify-start md:mt-10">
          <button
            onClick={handleCheckout}
            className="bg-[#00C853] text-white px-6 py-3 rounded-md font-exo2 text-lg hover:bg-green-600 transition-colors w-full md:w-auto"
          >
            Proceed To Checkout →
          </button>
          {error && (
            <p className="mt-2 text-red-500 font-exo2 font-semibold text-center w-full">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}