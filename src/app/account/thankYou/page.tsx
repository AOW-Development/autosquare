"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useBillingStore from "@/store/billingStore";
import { useCartStore } from "@/store/cartStore";
import { generateOrderNumber } from "@/utils/order";
import ProtectedRoute from "@/components/ProtectedRoute";
import { log } from "console";
import { useShippingStore } from '@/store/shippingStore';
import { createOrderInBackend } from '@/utils/orderUtils';
import { toast } from 'react-hot-toast'; // Add this import
import useAuthStore from "@/store/authStore";

export default function ThankYouPage() {
  const { billingInfo } = useBillingStore();
  const cartItems = useCartStore((s) => s.items);
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const { shippingInfo } = useShippingStore();
  const [paymentInfo, setPaymentInfo] = useState<{
    method: string;
    lastFour?: string;
  }>({ method: "card" });
  const [cardType, setCardType] = useState("unknown");
  const isSameAddress = JSON.stringify(billingInfo) === JSON.stringify(shippingInfo);
  const { user } = useAuthStore();
  console.log(isSameAddress, shippingInfo?.address)

  // Card image mapping (top-level so it’s accessible)
  const cardImageMap: Record<string, string> = {
    Visa: "visa-inverted_82058.png",
    MasterCard: "mastercard_82049.png",
    "American Express": "americanexpress_82060 1.png",
    Discover: "discover_82082.png",
  };

  useEffect(() => {
    // Generate order number and date
    setOrderNumber(generateOrderNumber());
    setOrderDate(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );

    // Get payment info from localStorage
    const storedPaymentMethod = localStorage.getItem("paymentMethod") || "card";
    const storedCardData = localStorage.getItem("cardData");

    if (storedPaymentMethod === "card" && storedCardData) {
      try {
        const cardData = JSON.parse(storedCardData);
        const lastFour = cardData.cardNumber?.slice(-4) || "****";
        setPaymentInfo({ method: "card", lastFour });

        // Detect card type from number (basic check)
        if (/^4/.test(cardData.cardNumber)) setCardType("Visa");
        else if (/^5[1-5]/.test(cardData.cardNumber)) setCardType("MasterCard");
        else if (/^3[47]/.test(cardData.cardNumber)) setCardType("American Express");
        else if (/^6/.test(cardData.cardNumber)) setCardType("Discover");
      } catch {
        setPaymentInfo({ method: "card", lastFour: "****" });
      }
    } else {
      setPaymentInfo({ method: storedPaymentMethod });
    }

    const createOrder = async () => {
      try {
        // Get order data from session storage
        const orderData = sessionStorage.getItem('orderData');
        if (!orderData) {
          console.error('No order data found in session storage');
          return;
        }

        const parsedOrderData = JSON.parse(orderData);

        // Ensure user data exists in order payload
        if (!parsedOrderData.user && user) {
          parsedOrderData.user = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name
          };
        }

        if (!parsedOrderData.user?.email) {
          console.error('No user email found in order data');
          return;
        }

        // Create order in backend
        await createOrderInBackend(parsedOrderData);

        // Clear session storage after successful order creation
        sessionStorage.removeItem('orderData');

      } catch (error) {
        console.error('Error creating order:', error);
        toast.error('Failed to process order. Please contact support.');
      }
    };

    createOrder();
  }, [user]);

  const cardImage = cardImageMap[cardType];


  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const salesTax = Math.round(subtotal * 0.029); // 2.9% tax
  const total = subtotal + salesTax;

  return (

    <div className="min-h-screen w-full bg-[#0B1422] relative overflow-hidden flex items-center justify-center">
      {/* Background Car Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[624px] relative">
          <Image
            src="/Images/thx_car.png"
            alt="Car background"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Thank You Content */}
      <main className="relative z-10 w-full flex justify-center md:justify-end md:pr-100 px-4">

        <div className="w-full max-w-xl bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 flex flex-col">
          {/* Logo and Title */}
          <div className="flex flex-col items-center mb-6">
            {/* <Image src="/Images/logo.svg" alt="Brand Logo" width={80} height={80} className="mb-2" priority /> */}
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center leading-tight tracking-wide " style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>
              Thank you
            </h1>
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-normal text-center mt-1" style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}>
              for shopping with us!
            </div>
          </div>
          {/* Header: Deliver To / Payment */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 mb-1">
            <div>
              <div className="uppercase text-sm text-gray-300 font-semibold">
                Deliver To
              </div>
              <div className="text-white text-sm mt-1 leading-tight">
                {billingInfo && Object.keys(billingInfo).length > 0 ? (
                  <>
                    {/* Billing Info */}
                    <div>
                      <strong>Billing Information</strong>
                      <br />
                      {billingInfo.firstName} {billingInfo.lastName}
                      <br />
                      {billingInfo.address}
                      {billingInfo.apartment && (
                        <>
                          <br />
                          {billingInfo.apartment}
                        </>
                      )}
                      <br />
                      {billingInfo.company && (
                        <>
                          {billingInfo.company}
                          <br />
                        </>
                      )}
                      {billingInfo.city}, {billingInfo.state}, {billingInfo.zipCode}, {billingInfo.country}
                      <br />
                      {billingInfo.phone}
                    </div>

                    {/* Shipping Info — Only show if addresses are different */}
                    {!isSameAddress && shippingInfo && Object.keys(shippingInfo).length > 0 && (
                      <div className="mt-3">
                        <strong>Shipping Information</strong>
                        <br />
                        {shippingInfo.firstName} {shippingInfo.lastName}
                        <br />
                        {shippingInfo.address}
                        {shippingInfo.apartment && (
                          <>
                            <br />
                            {shippingInfo.apartment}
                          </>
                        )}
                        <br />
                        {shippingInfo.company && (
                          <>
                            {shippingInfo.company}
                            <br />
                          </>
                        )}
                        {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zipCode}, {shippingInfo.country}
                        <br />
                        {shippingInfo.phone}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    No billing information available
                    <br />
                    Please contact support
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <div className="uppercase text-sm text-gray-300 font-semibold pr-12">
                Payment Method
              </div>
              <div className="flex items-center gap-3 mt-1">
                {paymentInfo.method === 'card' ? (
                  <>
                    <span className="text-white text-sm tracking-widest">
                      **** **** **** {paymentInfo.lastFour || '****'}
                    </span>
                    {cardImage && (
                      <img
                        src={`/images/home/${cardImage}`}
                        alt={cardType}
                        className="h-auto w-6 sm:w-8 md:w-10 lg:w-12 object-contain"
                      />
                    )}
                  </>
                ) : (
                  <span className="text-white text-sm">
                    PayPal
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-white my-4" />
          {/* Order Details */}
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="uppercase text-sm text-white font-semibold">
              Order Details <span className="font-normal">#{orderNumber}</span>
            </div>
            <div className="text-sm text-white">{orderDate}</div>
          </div>
          {/* Cart Items */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-row items-start gap-4 py-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <div className="text-base text-white font-semibold">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-300">{item.subtitle}</div>
                  <div className="text-sm text-gray-300">{item.quantity} pc{item.quantity > 1 ? 's' : ''}.</div>
                </div>
                <div className="text-base text-white font-semibold min-w-[60px] text-right">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-row items-start gap-4 py-2">
              <div className="text-white text-center w-full">
                No items in cart
              </div>
            </div>
          )}
          <div className="border-t border-white my-3" />
          {/* Summary Totals */}
          <div className="flex flex-col gap-1 text-base text-white mt-2">
            <div className="flex justify-between">
              <span>Cart total:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-white">Free Shipping</span>
            </div>
            {/* <div className="flex justify-between">
                <span>Sales Tax:</span>
                <span>${salesTax}</span>
              </div> */}
          </div>
          <div className="border-t border-white my-4" />
          <div className="flex justify-between items-center text-lg font-semibold text-white uppercase">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          {/* Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
            <Link href="/account/trackOrder">
              <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white rounded-md py-2 px-6  w-full md:w-auto transition">
                Track order
              </button>
            </Link>
            <Link
              href="/"
              className="text-blue-400 cursor-pointer hover:underline ml-0 md:ml-4 mt-2 md:mt-0 inline-block text-base"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </main>
    </div>


  );
}
