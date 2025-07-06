"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  subtitle: string;
  details: string[];
  price: number;
  quantity: number;
  image: string;
}

export default function PayMethod() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billingAddressExpanded, setBillingAddressExpanded] = useState(false);
  const [billingFormData, setBillingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: ""
  });

  const cartItems: CartItem[] = [
    {
      id: 1,
      title: "Title name of part",
      subtitle: "Ford Bronco 1991",
      details: ["4.9L", "from 2/3/91 (AIR inner manifold)", "E4OD transmission", "1 pc."],
      price: 800,
      quantity: 1,
      image: "/Images/photo-1.png"
    },
    {
      id: 2,
      title: "Title name of part",
      subtitle: "Ford Bronco 1991",
      details: ["4.9L", "from 2/3/91 (AIR inner manifold)", "E4OD transmission", "1 pc."],
      price: 800,
      quantity: 1,
      image: "/Images/photo-1.png"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const salesTax = Math.round(subtotal * 0.029); // 2.9% tax
  const total = subtotal + salesTax;

  const handleBillingInputChange = (field: string, value: string) => {
    setBillingFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCardInputChange = (field: string, value: string) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    if (paymentMethod === "card") {
      return cardData.cardNumber && cardData.cardholderName && 
             cardData.expirationDate && cardData.securityCode;
    }
    return true; // PayPal doesn't require additional fields
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-[#FFFFFF] pt-16 pb-22">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/Images/HouseLine.png" 
              alt="Home" 
              width={16} 
              height={16}
              className="w-4 h-4"
            />
          </Link>
          <Image 
            src="/Images/arrows.png" 
            alt="Arrow" 
            width={12} 
            height={12}
            className="w-3 h-3"
          />
          <span className="font-exo2">Cart</span>
        </div>

        {/* Title */}
        <h1 className="font-audiowide text-3xl lg:text-4xl mb-4 text-left">
          PAYMENT
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 w-full">
          {/* Connector 1 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">✓</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">Cart</span>
          </div>
          
          {/* Connector 2 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          
          {/* Step 2 - Completed */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">✓</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">Information</span>
          </div>
          
          {/* Connector 3 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          
          {/* Step 3 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">3</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">Payment</span>
          </div>
          {/* Connector 4 */}
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Summary Table */}
            <div className="border border-blue-400 p-4 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-exo2 font-medium">Contact</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-exo2 font-semibold">example@gmail.com</span>
                    <Link href="/account/checkout" className="text-blue-400 hover:underline text-sm font-exo2">Change</Link>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-exo2 font-medium">Ship to</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-exo2 font-semibold">Street 1, City, State, ZIP code, Country</span>
                    <Link href="/account/checkout" className="text-blue-400 hover:underline text-sm font-exo2">Change</Link>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-exo2 font-medium">Shipping method</span>
                  <div className="flex items-center space-x-4">
                    <span className="font-exo2 font-semibold">Free</span>
                    <Link href="/account/checkout" className="text-blue-400 hover:underline text-sm font-exo2">Change</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <h2 className="text-lg font-semibold mb-4 font-exo2">PAYMENT METHOD</h2>
              <div className="space-y-4">
                {/* Credit/Debit Card Option */}
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-[#009AFF] focus:ring-blue-300"
                  />
                  <span className="font-exo2">Pay with Credit or Debit card</span>
                  <Image 
                    src="/Images/payment.png" 
                    alt="Payment Methods"
                    width={120}
                    height={24}
                    className="h-6 inline-block ml-4"
                  />
                </label>

                {paymentMethod === "card" && (
                  <fieldset className="border border-gray-700 rounded-lg p-6 space-y-4">
                    {/* Google Pay Button */}
                    <button className="bg-black text-white py-3 rounded-md flex items-center justify-center w-full font-exo2 hover:bg-gray-800 transition-colors">
                      <Image 
                        src="/Images/g-logo.png" 
                        alt="Google Pay"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      G Pay
                    </button>

                    {/* Card Number */}
                    <div>
                      <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardData.cardNumber}
                        onChange={(e) => handleCardInputChange('cardNumber', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>

                    {/* Cardholder Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={cardData.cardholderName}
                        onChange={(e) => handleCardInputChange('cardholderName', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>

                    {/* Expiration and Security Code */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardData.expirationDate}
                        onChange={(e) => handleCardInputChange('expirationDate', e.target.value)}
                        className="bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardData.securityCode}
                        onChange={(e) => handleCardInputChange('securityCode', e.target.value)}
                        className="bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </fieldset>
                )}

                {/* PayPal Option */}
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio text-[#009AFF] focus:ring-blue-300"
                    />
                    <span className="font-exo2">Paypal</span>
                  </div>
                  <Image 
                    src="/Images/paypal.png" 
                    alt="PayPal"
                    width={60}
                    height={20}
                  />
                </label>
              </div>
            </div>

            {/* Billing Address Accordion */}
            <div>
              <button
                onClick={() => setBillingAddressExpanded(!billingAddressExpanded)}
                className="font-exo2 font-semibold cursor-pointer flex justify-between items-center w-full text-left"
              >
                <span>billing address (where you receive your credit card bills)</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    billingAddressExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {billingAddressExpanded && (
                <div className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-exo2 mb-2">First Name *</label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={billingFormData.firstName}
                        onChange={(e) => handleBillingInputChange('firstName', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block font-exo2 mb-2">Last Name *</label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={billingFormData.lastName}
                        onChange={(e) => handleBillingInputChange('lastName', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-exo2 mb-2">Email *</label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={billingFormData.email}
                        onChange={(e) => handleBillingInputChange('email', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block font-exo2 mb-2">Phone *</label>
                      <input
                        type="tel"
                        placeholder="(    )   -    "
                        value={billingFormData.phone}
                        onChange={(e) => handleBillingInputChange('phone', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-exo2 mb-2">Country *</label>
                    <select
                      value={billingFormData.country}
                      onChange={(e) => handleBillingInputChange('country', e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      <option value="">Choose country…</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-exo2 mb-2">Street Address *</label>
                      <input
                        type="text"
                        placeholder="Address"
                        value={billingFormData.streetAddress}
                        onChange={(e) => handleBillingInputChange('streetAddress', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block font-exo2 mb-2">Apartment, etc. (optional)</label>
                      <input
                        type="text"
                        placeholder="Apartment, etc. (optional)"
                        value={billingFormData.apartment}
                        onChange={(e) => handleBillingInputChange('apartment', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-exo2 mb-2">City *</label>
                      <input
                        type="text"
                        placeholder="City"
                        value={billingFormData.city}
                        onChange={(e) => handleBillingInputChange('city', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                    <div>
                      <label className="block font-exo2 mb-2">State *</label>
                      <select
                        value={billingFormData.state}
                        onChange={(e) => handleBillingInputChange('state', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        <option value="">Choose state…</option>
                        <option value="FL">Florida</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-exo2 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={billingFormData.zipCode}
                        onChange={(e) => handleBillingInputChange('zipCode', e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Products & Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#091627] rounded-lg p-4 space-y-6">
              {/* Card Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold font-exo2">PRODUCTS IN CART</h3>
                <Link href="/account/cart" className="text-sm text-white hover:underline font-exo2">
                  Edit cart
                </Link>
              </div>

              {/* Product Items */}
              <div className="space-y-2 border-b border-white">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-3 pb-4">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-exo2 font-semibold">{item.title}</h4>
                          <p className="font-exo2 text-sm text-gray-400">{item.subtitle}</p>
                          <div className="mt-1 space-y-1">
                            {item.details.map((detail, index) => (
                              <p key={index} className="font-exo2 text-xs text-gray-400">{detail}</p>
                            ))}
                          </div>
                        </div>
                        <p className="font-exo2 font-semibold">${item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-exo2">Cart total:</span>
                  <span className="font-exo2">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-exo2">Shipping:</span>
                  <span className="font-exo2 text-white">Free Shipping</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-exo2">Sales Tax:</span>
                  <span className="font-exo2">${salesTax}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white">
                  <span className="font-exo2 text-2xl font-bold">TOTAL:</span>
                  <span className="font-exo2 text-2xl font-bold">${total}</span>
                </div>
              </div>

              {/* Payment Button */}
              <button
                disabled={!isFormValid()}
                className={`w-full py-3 rounded-md font-exo2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  isFormValid()
                    ? 'bg-[#009AFF] text-white hover:bg-blue-500'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                Payment
              </button>

              {/* Back Link */}
              <div className="text-center">
                <Link href="/account/checkout" className="text-sm text-gray-400 hover:underline font-exo2">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 