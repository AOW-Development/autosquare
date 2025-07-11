"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Stepper from "@/components/Stepper";
import Image from "next/image";

const steps = ["Order accepted", "Packed", "Shipped", "Delivered"];
const currentStep = 3;
const items = [
  {
    image: "/Images/photo-1.png",
    title: "Title of part",
    description:
      "Ford Bronco 1991 | 4.9L | from 2/3/91 (AIR inner manifold) | E4OD transmission",
    qty: 1,
    price: "$800",
  },
];
const payment = { methodLogo: "/Images/mcard.png", last4: "8888" };
const summary = {
  cart: "$1600",
  shipping: "Free Shipping",
  tax: "$46",
  total: "$1646",
};
const shippingAddress = {
  name: "Kseniiia Melnyk",
  email: "example@gmail.com",
  phone: "(888) 000-0000",
  address: "123 Main St, Apt 4B, New York, NY 10001, USA",
};
const billingAddress = { ...shippingAddress };

export default function OrderDetailsPage() {
  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row overflow-hidden">
      {/* <div className="md:w-1/4">
        <Sidebar activeKey="Order History" />
      </div> */}
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <div className="flex flex-col md:flex-row w-full max-w-8xl md:mx-[10%] md:my-4">
          <div className="mb-6 md:mb-0">
            <Sidebar activeKey="Order History" />
          </div>
          <div className="flex flex-col px-3 md:pl-6 md:w-[60%]">
            <div className="flex border-b-2 border-blue-400 pb-2 flex-row justify-between w-full">
              <div className="flex flex-col">
                <h1
                  className="text-xl md:text-2xl font-bold"
                  style={{
                    fontFamily: "Audiowide, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ORDER: #123456
                </h1>
                <h2 className="text-sm md:text-lg">11 july 2025</h2>
              </div>
              <span className="font-semibold text-yellow-400 text-lg">
                In progress
              </span>
            </div>
            <div className="md:flex md:items-center md:justify-center md:w-[125%]">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>
            <div className="mb-4 text-sm text-white">
              Your order has been delivered: DHL (tracking number
              9988774455661122)
            </div>
            <div className="flex flex-col gap-4 border-b-2 border-blue-400 pb-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-gray-300">
                      {item.description}
                    </div>
                  </div>
                  <div className="text-sm font-semibold md:mr-10">
                    {item.qty} pc
                  </div>
                  <div className="font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-6 border-b-2 border-blue-400 pb-2">
              <div className="flex-1 p-4 flex flex-col gap-2">
                <div className="font-bold mb-2">Payment Method</div>
                <div className="flex items-center gap-2 justify-between">
                  <span className="text-lg font-semibold">
                    **** **** **** {payment.last4}
                  </span>
                  <Image
                    src={payment.methodLogo}
                    alt="Payment"
                    width={32}
                    height={20}
                  />
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-2">
                <div className="font-bold mb-2">Summary</div>
                <div className="flex justify-between">
                  <span>Cart total:</span>
                  <span>{summary.cart}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>{summary.shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sales Tax:</span>
                  <span>{summary.tax}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>TOTAL:</span>
                  <span>{summary.total}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-6 pb-2">
              <div className="flex-1 p-4">
                <div className="font-bold mb-2">Shipping Address</div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Name</span>
                  <span>{shippingAddress.name}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Email</span>
                  <span>{shippingAddress.email}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Phone Number</span>
                  <span>{shippingAddress.phone}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Shipping Address</span>
                  <span>{shippingAddress.address}</span>
                </div>

                {/* <div>{shippingAddress.email}</div>
                <div>{shippingAddress.phone}</div>
                <div>{shippingAddress.address}</div> */}
              </div>
              <div className="flex-1 p-4">
                <div className="font-bold mb-2">Billing Address</div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Name</span>
                  <span>{billingAddress.name}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Email</span>
                  <span>{billingAddress.email}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Phone Number</span>
                  <span>{billingAddress.phone}</span>
                </div>
                <div className="flex flex-col mb-1">
                  <span className="font-bold">Shipping Address</span>
                  <span>{billingAddress.address}</span>
                </div>

                {/* <div>{billingAddress.name}</div>
                <div>{billingAddress.email}</div>
                <div>{billingAddress.phone}</div>
                <div>{billingAddress.address}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
