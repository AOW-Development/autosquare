"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function TrackOrderPage() {
  const [show, setShow] = useState(true);
  const [trackOrder, setTrackOrder] = useState(false);
  // const cartItems = [
  //   {
  //     id: 1,
  //     title: "Title name of part",
  //     subtitle:
  //       "Ford Bronco 1991 | 4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission",
  //     price: 800,
  //     quantity: 1,
  //     image: "/Images/photo-1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Title name of part",
  //     subtitle: "Ford Bronco 1991",
  //     price: 800,
  //     quantity: 1,
  //     image: "/Images/photo-1.png",
  //   },
  // ];
  // if (!show) return null;

  const cartItems = [
    {
      id: 1,
      image: "/Images/photo-1.png",
      title: "Ford Bronco 1991",
      model: "4.9L",
      engine: "from 2/3/91 (AIR inner manifold)",
      transmission: "E4OD transmission",
      quantity: "1 pc.",
      price: 800,
    },
    {
      id: 2,
      image: "/Images/photo-1.png",
      title: "Ford Bronco 1991",
      model: "4.9L",
      engine: "from 2/3/91 (AIR inner manifold)",
      transmission: "E4OD transmission",
      quantity: "1 pc.",
      price: 800,
    },
  ];
  return (
    <>
      {trackOrder && (
        <>
          <div className="min-h-screen bg-[#091B33] text-white pt-8 pb-16 font-exo2">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm text-white mb-6">
                <Link href="/" className="flex items-center hover:opacity-80">
                  <Image
                    src="/Images/HouseLine.png"
                    alt="Home"
                    width={24}
                    height={24}
                  />
                </Link>
                <Image
                  src="/Images/arrows.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
                <span className="text-sm">Track your order</span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl lg:text-4xl uppercase mb-6"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Track your order
              </h1>

              {/* Order Header */}
              <div className="flex justify-between px-2 mb-6">
                <span className="text-sm font-semibold">
                  Order number: #123456
                </span>
                <span className="text-sm font-semibold">
                  Date: 11 July 2024
                </span>
              </div>

              {/* Stepper */}
              <div className="flex items-center justify-between mb-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <span className="mt-2 text-[#009AFF] font-semibold text-sm">
                    Order accepted
                  </span>
                </div>

                <div className="flex-1 h-0.5 bg-[#009AFF] mx-2" />

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <span className="mt-2 text-[#009AFF] font-semibold text-sm">
                    Packed
                  </span>
                </div>

                <div className="flex-1 h-0.5 bg-white mx-2" />

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <span className="mt-2 text-white font-semibold text-sm">
                    Shipped
                  </span>
                </div>

                <div className="flex-1 h-0.5 bg-white mx-2" />

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <span className="mt-2 text-white font-semibold text-sm">
                    Delivered
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-white font-semibold text-sm">
                  Your order has been delivered: DHL (tracking number
                  9988774455661122)
                </span>
              </div>

              {/* Content Section */}
              <div className="md:flex md:space-x-6">
                {/* Left Column: Order Details */}
                <div className="w-full md:w-2/3">
                  <h3 className="font-semibold text-xl mb-4 uppercase">
                    Order Details
                  </h3>

                  <div className="space-y-6 border-b border-white/20 pb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-start space-x-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 space-y-1 text-sm">
                          <p className="font-semibold">{item.title}</p>
                          <p>{item.model}</p>
                          <p>{item.engine}</p>
                          <p>{item.transmission}</p>
                          <p>{item.quantity}</p>
                        </div>
                        <span className="text-white font-semibold">
                          ${item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">Cart total:</span>
                      <span>$1600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Shipping:</span>
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sales Tax:</span>
                      <span>$46</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold mt-2">
                      <span>Total:</span>
                      <span>$1646</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Deliver To */}
                <div className="w-full md:w-1/3 mt-10 md:mt-0 bg-[#0E2A47] p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 uppercase">
                    Deliver To
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Name:</span> Ksenia Melnyk
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      example@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone Number:</span> (888)
                      000-00000
                    </p>
                    <p>
                      <span className="font-semibold">Shipping Address:</span>{" "}
                      Street, 1, City, State, ZIP code, Country
                    </p>
                    <p>
                      <span className="font-semibold">Billing Address:</span>{" "}
                      Same as shipping address
                    </p>
                    <p>
                      <span className="font-semibold">Payment Method:</span>{" "}
                      MasterCard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
          <div className="relative bg-[#11213A] rounded-lg shadow-xl p-8 w-full max-w-lg md:max-w-2xl mx-4">
            {/* Close Button */}
            <button
              className="absolute top-3 md:top-6 right-3 text-gray-400 hover:text-white text-xl"
              onClick={() => {
                redirect("/");
                // setShow(false);
              }}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Title */}
            <h2 className="text-xl font-audiowide mb-2 tracking-wide text-white">
              ORDER TRACKING
            </h2>
            {/* Description */}
            <p className="mb-5 text-gray-300 text-sm">
              Please provide the order number as indicated in the invoice copy
              sent to your email to check the current status of your order.
            </p>
            {/* Form */}
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // handle submit here
              }}
            >
              <input
                type="text"
                placeholder="Order Number"
                className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="flex-1 bg-[#1A2B47] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <button
                type="submit"
                onClick={() => {
                  setShow(false);
                  setTrackOrder(true);
                }}
                className="bg-sky-600 cursor-pointer hover:bg-sky-700 text-white px-5 py-2 rounded transition-colors font-semibold"
              >
                Track Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
