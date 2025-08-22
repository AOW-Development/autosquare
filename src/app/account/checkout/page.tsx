"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import useBillingStore from "@/store/billingStore";
import { useCartStore, CartItem } from "@/store/cartStore";
import { State } from "country-state-city"; 
import { useShippingStore } from "@/store/shippingStore";

export default function Checkout() {
  const { billingInfo, setBillingInfo } = useBillingStore();
  const { shippingInfo,setShippingInfo } = useShippingStore();
  const { items } = useCartStore();

  const [formData, setFormData] = useState(
    shippingInfo || {
      firstName: "",
      lastName: "",
      // email: "",
      phone: "",
      company: "",
      country: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      // orderNotes: "",
    }
  );
 const [userType, setUserType] = useState("Individual");

  // Sync billingInfo to formData if it changes
  useEffect(() => {
    if (shippingInfo) {
      setFormData((prev) => ({
        ...prev,
        ...shippingInfo,
      }));
    }
  }, [shippingInfo]);

const [errors, setErrors] = useState<{ [key: string]: string }>({});


const handleInputChange = (field: string, value: string) => {
  let error = "";
  const country = formData.country; 

  switch (field) {
    case "firstName":
    case "lastName":
    case "city":
      if (!/^[A-Za-z\s]*$/.test(value)) {
        error = "Only letters allowed";
      }
      break;

    case "phone":
      if (country === "US") {
        if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value)) {
          error = "Enter a valid US phone (e.g. 555-123-4567)";
        }
      } else if (country === "CA") {
        if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value)) {
          error = "Enter a valid Canadian phone (e.g. 416-123-4567)";
        }
      }
      break;

    case "zipCode":
      if (country === "US") {
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
          error = "Enter a valid US ZIP (12345 or 12345-6789)";
        }
      } else if (country === "CA") {
        if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)) {
          error = "Enter a valid Canadian Postal Code (e.g. K1A 0B1)";
        }
      }
      break;
  }


  setFormData((prev) => ({ ...prev, [field]: value }));
  setErrors((prev) => ({ ...prev, [field]: error }));
};



  // Save billing info to store when continuing to payment
  const handleContinue = () => {
    console.log("Form Data:", formData);
    setShippingInfo(formData);
  };


const [states, setStates] = useState<{ name: string; isoCode: string }[]>([]);


useEffect(() => {
  if (formData.country) {
    const fetchedStates = State.getStatesOfCountry(formData.country);
    console.log("Fetched States:", fetchedStates);
    setStates(fetchedStates || []);
  } else {
    setStates([]);
  }
}, [formData.country]);

 // Handle field changes
  const handleChange = (field: string, value: string) => {
    if (field === "country") {
      setFormData((prev) => ({
        ...prev,
        country: value,
        state: "", // reset state when country changes
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };
  
  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.country &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode &&
      termsAccepted
    );
  };

  const [couponCode, setCouponCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Get first 2 items from cart store
  const cartItems = items.slice(0, 2);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleUserTypeChange = (type: 'Individual' | 'Commercial') => {
  setUserType(type);
  setFormData((prev) => ({ ...prev, customerType: type }));
};

  return (
   
      <div className="min-h-screen bg-[#091B33] text-[#FFFFFF] pt-16 md:pt-14 pb-22 overflow-hidden ">
        <div className=" mx-auto md:mx-6 lg:mx-40 px-4 md:px-6 lg:px-1">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6">
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
              src="/Images/arrows.png"
              alt="Arrow"
              width={16}
              height={16}
              // className="w-3 h-3"
            />
            <span className="font-exo2">Cart</span>
          </div>

          {/* Title */}
          <h1
            className="font-audiowide text-2xl md:text-3xl lg:text-4xl mb-4 text-left"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            CHECKOUT
          </h1>

          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8 w-full">
            {/* Connector 1 */}
            <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border border-[#009AFF] rounded-full flex items-center justify-center">
                <span className="text-[#009AFF] font-exo2 font-semibold text-sm">
                  ✓
                </span>
              </div>
              <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
                Cart
              </span>
            </div>

            {/* Connector 2 */}
            <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>

            {/* Step 2 - Active */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
                <span className="text-white font-exo2 font-semibold text-sm">
                  2
                </span>
              </div>
              <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
                Information
              </span>
            </div>

            {/* Connector 3 */}
            <div className="flex-1 h-0.5 bg-white mb-4"></div>

            {/* Step 3 - Inactive */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <span className="text-white font-exo2 font-semibold text-sm">
                  3
                </span>
              </div>
              <span className="mt-2 font-exo2 font-semibold text-white text-sm">
                Payment
              </span>
            </div>
            {/* Connector 4 */}
            <div className="flex-1 h-0.5 bg-white mb-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Column: Recipient Details Form */}
            <div className="col-span-3 md:col-span-3 lg:col-span-2 ">
              {/* Login Link */}
              <div className="flex justify-end items-end text-right mt-2 pr-1 md:pr-6">
                <Link
                  href="/account/signIn"
                  className="text-sm text-[#FFFFFF] hover:underline font-exo2"
                >
                  Have an account? Log in
                </Link>
              </div>

              {/* Form Header */}
              <h2 className="text-base font-semibold mb-6 font-exo2">
                Enter Shipping Information
              </h2>
              <div className="flex gap-4 mb-4">
              <button
                type="button"
                onClick={() => handleUserTypeChange("Individual")}
                className={`w-full px-4 py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
                  userType === "Individual"
                    ? "bg-blue-600 text-white"
                    : "bg-[#091627] text-white/70 border border-white/10 hover:bg-blue-800 hover:text-white"
                }`}
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() => handleUserTypeChange("Commercial")}
                className={`w-full px-4 py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
                  userType === "Commercial"
                    ? "bg-blue-600 text-white"
                    : "bg-[#091627] text-white/70 border border-white/10 hover:bg-blue-800 hover:text-white"
                }`}
              >
                Commercial
              </button>
            </div>

              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-exo2 mb-2">First Name *</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3]
                      rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      pattern="^[A-Za-z\s]+$"
                      title="Only alphabets allowed"
                      required
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                  </div>
                  <div>
                    <label className="block font-exo2 mb-2">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.lastName}
                       onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3]
                        rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        pattern="^[A-Za-z\s]+$"
                        title="Only alphabets allowed"
                        required
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-exo2 mb-2">Phone *</label>
                    <input
                      type="tel"
                      placeholder="(888) 000-0000"
                      value={formData.phone}
                     onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3]
                      rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
                      title="Enter a valid US phone number (e.g. 888-000-0000)"
                      required
                    />
                     {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                  {userType === "Commercial" && (
                    <div>
                      <label className="block font-exo2 mb-2">Company*</label>
                      <input
                        className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] 
                        rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Company name"
                      />
                    </div>
                  )}
                </div>

                {/* Country & Address */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-exo2 mb-2">Country *</label>
                    <select
                      className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white 
                      border border-white/10 focus:outline-none lg:py-3"
                      value={formData.country}
                      onChange={(e) => handleChange("country", e.target.value)}
                      required
                    >
                      <option value="Choose country…">Choose Country…</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-exo2 mb-2">Street Address *</label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] 
                      rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>

                {/* Apartment & City */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-exo2 mb-2">Apartment (optional)</label>
                    <input
                      type="text"
                      placeholder="Apartment, etc."
                      value={formData.apartment}
                      onChange={(e) => handleInputChange("apartment", e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] 
                      rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block font-exo2 mb-2">City *</label>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3]
                          rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          pattern="^[A-Za-z\s]+$"
                          title="City name must contain only letters"
                          required/>
                          {errors.firstName && <p className="text-red-500 text-sm">{errors.city}</p>}
                     </div>
                </div>

                {/* State & ZIP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-exo2 mb-2">State *</label>
                    <select
                      className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white 
                      border border-white/10 focus:outline-none lg:py-3"
                      value={formData.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                      disabled={!states.length}
                      required
                    >
                      <option value="">Choose State…</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode} className="text-white">
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-exo2 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3]
                      rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      pattern="^\d{5}(-\d{4})?$"
                      title="Enter a valid US ZIP code (e.g. 12345 or 12345-6789)"
                      required
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
                  </div>
                </div>

                {/* Order Notes */}
                {/* <div>
                  <label className="block font-exo2 mb-2">Order notes</label>
                  <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    value={formData.orderNotes}
                    onChange={(e) =>
                      handleInputChange("orderNotes", e.target.value)
                    }
                    rows={4}
                    className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div> */}
              </form>
            </div>

            {/* Right Column: Products & Order Summary */}
            <div className=" col-span-3 lg:col-span-1 ">
              <div className="bg-[#091627] rounded-lg space-y-6 pr-6 p-2 md:p-4 ">
                {/* Card Header */}
                <div className="flex justify-between items-center ">
                  <h3 className="text-base font-semibold font-exo2">
                    PRODUCTS IN CART
                  </h3>
                  <Link
                    href="/account/cart"
                    className="text-sm text-white hover:underline font-exo2"
                  >
                    Edit cart
                  </Link>
                </div>
                {/* Product Items */}
                <div className="space-y-2 border-b border-white"></div>
                <div className="space-y-2 border-b border-white">
                   
                    {cartItems.map((item) => (
                    <div key={item.id} className="flex space-x-3 pb-4 ">
                      <Image
                      src={item.title.includes("Transmission")?"/catalog/Trasmission_.png":"/catalog/Engine 1.png"}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-cover rounded"
                      />
                      <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                        <h4 className="font-exo2 font-semibold">
                          {item.title}
                        </h4>
                        <p className="font-exo2 text-sm text-gray-400">
                          {item.subtitle}
                        </p>
                        <div className="mt-1 space-y-1">
                          <p className="font-exo2 text-xs text-gray-400">
                          {item.id}
                          </p>
                        </div>
                        </div>
                        <p className="font-exo2 font-semibold">
                        ${item.price}
                        </p>
                      </div>
                      </div>
                      
                    </div>
                    ))}
                </div>
                  {/* Total number of products */}
                    <div className="flex justify-between items-center pb-0">
                    <span className="font-exo2 text-sm md:text-sm lg:text-lg text-gray-300">
                      Total products:
                    </span>
                    <span className="font-exo2 text-sm text-white">
                      {items.length}
                    </span>
                    </div>   
                {/* Coupon Code */}
                {/* <div className="border-b border-white pb-4">
                  <label className="block font-exo2 mb-2">
                    Have a coupon code?
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1  border border-gray-700 text-[#E0E6F3] rounded-md px-2 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="bg-[#1D3758] px-4 py-2 rounded-md font-exo2 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">
                      Apply
                    </button>
                  </div>
                </div> */}

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-exo2">Cart total:</span>
                    <span className="font-exo2">${total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-exo2">Shipping:</span>
                    <span className="font-exo2 text-white">Free Shipping</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white">
                    <span className="font-exo2 text-2xl font-bold">TOTAL:</span>
                    <span className="font-exo2 text-2xl font-bold">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                    className="mt-1 form-checkbox bg-[#1A2230] border-gray-700 focus:ring-blue-300"
                  />
                  <span className="text-sm font-exo2">
                    I have Read and Accept the
                    <Link
                      href="/account/t&c"
                      className="text-blue-400 hover:underline"
                    >
                      {" "}
                      terms and conditions
                    </Link>
                    ,
                    <Link
                      href="/account/warrantyAndReturn"
                      className="text-blue-400 hover:underline"
                    >
                      {" "}
                      return policy
                    </Link>
                    and the{" "}
                    <Link
                      href="/account/privacyPolicy"
                      className="text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    of autosquare.us *
                  </span>
                </label>

                {/* Continue Button */}
                {isFormValid() ? (
                  <Link href="/account/payMethod">
                    <button
                      className="w-full px-6 py-1 md:py-4  rounded-md font-exo2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#00A3FF] text-white hover:bg-blue-500"
                      onClick={handleContinue} // <-- Save billing info before navigating
                    >
                      Continue to payment
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full px-6 py-3 rounded-md font-exo2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-600 text-gray-400 cursor-not-allowed"
                  >
                    Continue to payment
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
