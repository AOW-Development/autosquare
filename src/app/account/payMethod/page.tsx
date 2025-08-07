"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import useBillingStore from "@/store/billingStore";
import useAuthStore from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { formatOrderData } from "@/lib/mail";
import type { PaymentInfo } from "@/store/paymentStore";
import { FaApple } from "react-icons/fa";
// Remove local CartItem interface entirely, use global type
import { getCardType, isValidCardNumber } from "@/utils/cardUtil"
import { FcGoogle } from "react-icons/fc";
import { State } from "country-state-city"; 


export default function PayMethod() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billingAddressExpanded, setBillingAddressExpanded] = useState(true);
  const { billingInfo } = useBillingStore();
  const { user } = useAuthStore();
  const cartItems = useCartStore((s) => s.items);
  const [userType, setUserType] = useState("Individual");
  const [sameAsShipping, setSameAsShipping] = useState(false);
  // default to Apple Pay

  const [billingFormData, setBillingFormData] = useState(
     {
      firstName: "",
      lastName: "",
      // email: "",
      phone: "",
      company:"",
      country: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
    }
  );
  useEffect(() => {
    if (sameAsShipping && billingInfo) {
      setBillingFormData({
        ...billingInfo,
        apartment: billingInfo.apartment ?? "",
      });
    } else if (!sameAsShipping) {
      setBillingFormData({
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        country: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
      });
    }
  }, [sameAsShipping, billingInfo]);


  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  });
  
  const [cardErrors, setCardErrors] = useState({
  cardNumber: "",
  cardholderName:"",
  expiartionDate:"",
  securityCode: "",
});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const salesTax = Math.round(subtotal * 0.029); // 2.9% tax
  const total = subtotal + salesTax;

  const handleBillingInputChange = (field: string, value: string) => {
    setBillingFormData((prev) => ({ ...prev, [field]: value }));
  };

 const handleCardInputChange = (field: string, value: string) => {
  if (field === "cardholderName") {
    const onlyLetters = /^[A-Za-z\s]*$/;
    if (!onlyLetters.test(value)) {
      setCardErrors((prev) => ({
        ...prev,
        cardholderName: "Only letters and spaces are allowed",
      }));
      return;
    } else {
      setCardErrors((prev) => ({ ...prev, cardholderName: "" }));
    }
    setCardData((prev) => ({ ...prev, cardholderName: value }));
    return;
  }

  if (field === "cardNumber") {
    const cleanValue = value.replace(/\D/g, ""); // Remove all non-digits
    const cardType = getCardType(cleanValue);

    let formatted = cleanValue;
    let maxLength = 16; // Default

    // Apply format and max length based on card type
    if (cardType === "American Express") {
      maxLength = 15;
      formatted = cleanValue
        .slice(0, maxLength)
        .replace(/^(\d{0,4})(\d{0,6})(\d{0,5})/, (_m, p1, p2, p3) =>
          [p1, p2, p3].filter(Boolean).join(" ")
        );
    } else {
      // Visa, Mastercard, Discover default
      maxLength = 16;
      formatted = cleanValue
        .slice(0, maxLength)
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim();
    }

    const isValid = isValidCardNumber(cleanValue);

    if (!cardType && cleanValue.length > 0) {
      setCardErrors((prev) => ({ ...prev, cardNumber: "Unknown card type" }));
    } else if (!isValid && cleanValue.length === maxLength) {
      setCardErrors((prev) => ({ ...prev, cardNumber: "Invalid card number" }));
    } else {
      setCardErrors((prev) => ({ ...prev, cardNumber: "" }));
    }

    setCardData((prev) => ({ ...prev, cardNumber: formatted }));
    return;
  }

  if (field === "expirationDate") {
    const cleaned = value.replace(/\D/g, "").slice(0, 4); // MMYY
    let formatted = cleaned;

    if (cleaned.length >= 3) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }

    if (formatted.length > 5) return;

    if (formatted.length === 5) {
      const [monthStr, yearStr] = formatted.split("/");
      const month = parseInt(monthStr, 10);
      const year = parseInt(`20${yearStr}`, 10);

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      if (month < 1 || month > 12) {
        setCardErrors((prev) => ({
          ...prev,
          expirationDate: "Month must be between 01 and 12",
        }));
        return;
      }

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        setCardErrors((prev) => ({
          ...prev,
          expirationDate: "Expiration date must be in the future",
        }));
        return;
      }

      setCardErrors((prev) => ({ ...prev, expirationDate: "" }));
    }

    setCardData((prev) => ({ ...prev, expirationDate: formatted }));
    return;
  }

  if (field === "securityCode") {
    const cardType = getCardType(cardData.cardNumber.replace(/\D/g, ""));
    const expectedLength = cardType === "American Express" ? 4 : 3;
    const cleaned = value.replace(/\D/g, "").slice(0, expectedLength);

    if (cleaned.length > 0 && cleaned.length !== expectedLength) {
      setCardErrors((prev) => ({
        ...prev,
        securityCode: `CVV must be ${expectedLength} digits`,
      }));
    } else {
      setCardErrors((prev) => ({ ...prev, securityCode: "" }));
    }

    setCardData((prev) => ({ ...prev, securityCode: cleaned }));
    return;
  }

  // Fallback
  setCardData((prev) => ({ ...prev, [field]: value }));
};

 const isFormValid = () => {
  if (paymentMethod === "card") {
    const cardType = getCardType(cardData.cardNumber);
    const validLuhn = isValidCardNumber(cardData.cardNumber);

    if (!cardType || !validLuhn) return false;

    const cardNumberLength = cardData.cardNumber.replace(/\D/g, "").length;
    const cvvLength = cardData.securityCode.length;

    if (
      (cardType === "Visa" || cardType === "MasterCard" || cardType === "Discover") &&
      (cardNumberLength !== 16 || cvvLength !== 3)
    ) return false;

    if (
      cardType === "American Express" &&
      (cardNumberLength !== 15 || cvvLength !== 4)
    ) return false;

    return (
      cardData.cardholderName &&
      cardData.expirationDate
    );
  }

  return true;
};

  const router = useRouter();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store payment info in localStorage for thank you page
    localStorage.setItem('paymentMethod', paymentMethod);
    if (paymentMethod === 'card') {
      localStorage.setItem('cardData', JSON.stringify(cardData));
    }
    
    // Build payment info
    const payment = {
      paymentMethod: paymentMethod as "card" | "paypal" | "apple" | "google",
      cardData,
      billingData: billingFormData,
      billingAddressExpanded,
    } as PaymentInfo;
    // Compose and send order emails
    if (user) {
      const orderData = {
        user,
        payment,
        billing: { ...billingFormData, apartment: billingFormData.apartment ?? "" },
        cartItems: cartItems.length ? cartItems : (cartItems as any)
      };
      
      await fetch('/api-2/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
    }
    if(user){
      router.push("/account/thankYou");
    }else{
      sessionStorage.setItem("redirectAfterLogin","/account/thankYou");
      
      router.push("/account/signIn");
    }
  };

   const [states, setStates] = useState<{ name: string; isoCode: string }[]>([]);
  
  
  useEffect(() => {
    if (billingFormData.country) {
      const fetchedStates = State.getStatesOfCountry(billingFormData.country);
      console.log("Fetched States:", fetchedStates);
      setStates(fetchedStates || []);
    } else {
      setStates([]);
    }
  }, [billingFormData.country]);
  
  
  const handleUserTypeChange = (type: 'Individual' | 'Commercial') => {
    setUserType(type);
    setBillingFormData((prev) => ({ ...prev, customerType: type }));
  };

  const handleChange = (field: string, value: string) => {
    if (field === "country") {
      setBillingFormData((prev) => ({
        ...prev,
        country: value,
        state: "", // reset state when country changes
      }));
    } else {
      setBillingFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    
      <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2  py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/engine/HouseLine.png"
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
              // className="w-3 h-3"
            />
            {/* <span>&gt;</span> */}
            <span className="text-white">Make a payment</span>
          </div>
          {/* Breadcrumb */}
          {/* <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6">
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
        </div> */}

          {/* Title */}
          {/* <h1 className="font-audiowide text-3xl lg:text-4xl mb-4 text-left">
          PAYMENT
        </h1> */}
          <h1
            className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            MAKE A PAYMENT
          </h1>

          {/* Step Indicator */}
          {/* <div className="flex items-center justify-between mb-8 w-full"> */}
          {/* Connector 1 */}
          {/* <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">
                ✓
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
              Cart
            </span>
          </div> */}

          {/* Connector 2 */}
          {/* <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div> */}

          {/* Step 2 - Completed */}
          {/* <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">
                ✓
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
              Information
            </span>
          </div> */}

          {/* Connector 3 */}
          {/* <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div> */}

          {/* Step 3 - Active */}
          {/* <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">
                3
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
              Payment
            </span>
          </div> */}
          {/* Connector 4 */}
          {/* <div className="flex-1 h-0.5 bg-white mb-4"></div>
        </div> */}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Payment Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Order Summary Table */}
              <div className="bg-black/75 border border-[#009AFF] mb-8">
                <div className="space-y-4">
                  <div className="border-b border-[#009AFF] flex w-full items-center p-2">
                    <span className="font-exo2 font-exo2 w-1/3 text-left">
                      Contact
                    </span>
                    <span className="font-exo2 font-exo2 flex-1 text-center">
                    {(() => {
                        const billing = useBillingStore.getState().billingInfo;
                        if (!billing) return "No address on file";
                        let addr = billing.phone;
                        // if (billing.apartment) addr += ", " + billing.apartment;
                        return `${addr}`;
                      })()}
                    </span>
                    <Link
                      href="/account/checkout"
                      className="text-white hover:underline text-base font-exo2 w-1/3 text-right"
                    >
                      Change
                    </Link>
                  </div>
                  <div className="border-b border-[#009AFF] flex w-full items-center p-2">
                    <span className="font-exo2 font-exo2 w-1/3 text-left">
                      Ship to
                    </span>
                    <span className="font-exo2 font-exo2 flex-1 text-center">
                      {(() => {
                        const billing = useBillingStore.getState().billingInfo;
                        if (!billing) return "No address on file";
                        let addr = billing.address;
                        if (billing.apartment) addr += ", " + billing.apartment;
                        return `${addr}, ${billing.city}, ${billing.state}, ${billing.zipCode}, ${billing.country}`;
                      })()}
                    </span>
                    <Link
                      href="/account/checkout"
                      className="text-white hover:underline text-base font-exo2 w-1/3 text-right"
                    >
                      Change
                    </Link>
                  </div>
                  <div className="flex w-full items-center p-2">
                    <span className="font-exo2 font-ex02 w-1/3 text-left">
                      Shipping
                    </span>
                    <span className="font-exo2 font-exo2 flex-1 text-center">
                      Free
                    </span>
                    <Link
                      href=""
                      className="text-white hover:underline text-base font-exo2 w-1/3 text-right"
                    >
                      Change
                    </Link>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h2 className="text-lg font-semibold mb-4 font-exo2">
                  PAYMENT METHOD
                </h2>
                <div className="space-y-4 border p-4 border-blue-500 rounded-md">
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
                 <div className="flex items-center justify-between w-full">
                    <span className="font-exo2">Pay with Credit or Debit card</span>

                    <div className="flex space-x-[8px]">
                      <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/Images/home/visa-inverted_82058.png"
                          alt="Visa"
                          width={48}
                          height={30}
                          className="bg-[#1E2A44] object-contain"
                        />
                      </a>
                      <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/Images/home/mastercard_82049.png"
                          alt="Mastercard"
                          width={48}
                          height={30}
                          className="bg-[#1E2A44] object-contain"
                        />
                      </a>
                      <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/Images/home/americanexpress_82060 1.png"
                          alt="Amex"
                          width={48}
                          height={30}
                          className="bg-[#1E2A44] object-contain"
                        />
                      </a>
                      <a href="https://www.discover.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/Images/home/discover_82082.png"
                          alt="Discover"
                          width={48}
                          height={30}
                          className="bg-[#1E2A44] object-contain"
                        />
                      </a>
                    </div>
                    </div>
                  </label>
                  {/* Card Number */}
                  {paymentMethod === "card" && (
                    <>
                      <div>
                        <input
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                          value={cardData.cardNumber}
                          onChange={(e) =>
                            handleCardInputChange("cardNumber", e.target.value)
                          }
                          className={`w-full bg-[#091627] border ${
                            cardErrors.cardNumber ? "border-red-500" : "border-gray-700"
                          } text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                        />
                        {cardErrors.cardNumber && (
                          <p className="text-red-500 text-xs mt-1">{cardErrors.cardNumber}</p>
                        )}
                      </div>

                      {/* Cardholder Name */}
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          value={cardData.cardholderName}
                          onChange={(e) =>
                            handleCardInputChange(
                              "cardholderName",
                              e.target.value
                            )
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>

                      {/* Expiration and Security Code */}
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={cardData.expirationDate}
                          onChange={(e) =>
                            handleCardInputChange(
                              "expirationDate",
                              e.target.value
                            )
                          }
                          className="bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <input
                              type="text"
                              placeholder="CVV"
                              value={cardData.securityCode}
                              onChange={(e) =>
                                handleCardInputChange("securityCode", e.target.value)
                              }
                              className={`bg-[#091627] border ${
                                cardErrors.securityCode ? "border-red-500" : "border-gray-700"
                              } text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                            />
                            {cardErrors.securityCode && (
                              <p className="text-red-500 text-xs mt-1">{cardErrors.securityCode}</p>
                            )}
                      </div>
                       </>
                      )}
                     <label className="flex items-center gap-4 cursor-pointer w-full">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="apple"
                      checked={paymentMethod === "apple"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio text-blue-600 shrink-0"
                    />
                    <div
                      className={`w-full py-4 rounded-md flex items-center justify-center font-exo2 text-lg transition-colors cursor-pointer ${
                        paymentMethod === "apple"
                          ? "bg-black text-white ring-2 ring-blue-500"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      <FaApple className="text-2xl mr-2" />
                      Apple Pay
                    </div>
                  </label>

                  {/* Google Pay */}
                  <label className="flex items-center gap-4 cursor-pointer w-full">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="google"
                      checked={paymentMethod === "google"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio text-blue-600 shrink-0"
                    />
                    <div
                      className={`w-full py-4 rounded-md flex items-center justify-center font-exo2 text-lg transition-colors cursor-pointer ${
                        paymentMethod === "google"
                          ? "bg-white text-black ring-2 ring-blue-500"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      <FcGoogle className="text-2xl mr-2" />
                      Google Pay
                    </div>
                  </label>

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
                      <span className="font-exo2">PayPal</span>
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
             
             {/* Title */}
             <div>
                <div className="mb-2">
                  <label className="font-exo2 font-semibold text-lg">
                    billing address (where you receive your credit card bills)
                  </label>
                </div>

                {/* Checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    name="sameAsShipping"
                    checked={sameAsShipping}
                    onChange={() => setSameAsShipping(!sameAsShipping)}
                    className="form-checkbox text-blue-600 mr-2"
                  />
                  <label htmlFor="sameAsShipping" className="font-exo2">
                    Same as shipping address
                  </label>
                  </div>

                {billingAddressExpanded && (
                  <div className="space-y-6 mt-4">
                    {/* Individual/Commercial Row */}
                    <div className="flex gap-4 mb-2 md:mb-0 md:py-2">
                      <button
                        type="button"
                        onClick={() => handleUserTypeChange("Individual")}
                        className={`w-full px-4 py-1 md:py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
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
                        className={`w-full px-4 py-1 md:py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
                          userType === "Commercial"
                            ? "bg-blue-600 text-white"
                            : "bg-[#091627] text-white/70 border border-white/10 hover:bg-blue-800 hover:text-white"
                        }`}
                      >
                        Commercial
                      </button>
                    </div>
                    {/* First and Last Name Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-exo2 mb-2">First Name *</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={billingFormData.firstName}
                          onChange={(e) =>
                            handleBillingInputChange("firstName", e.target.value)
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                      <div>
                        <label className="block font-exo2 mb-2">Last Name *</label>
                        <input
                          type="text"
                          placeholder="Name"
                          value={billingFormData.lastName}
                          onChange={(e) =>
                            handleBillingInputChange("lastName", e.target.value)
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* <div>
                        <label className="block font-exo2 mb-2">Email *</label>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          value={billingFormData.email}
                          onChange={(e) =>
                            handleBillingInputChange("email", e.target.value)
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div> */}
                      <div>
                        <label className="block font-exo2 mb-2">Phone *</label>
                        <input
                          type="tel"
                          placeholder="(    )   -    "
                          value={billingFormData.phone}
                          onChange={(e) =>
                            handleBillingInputChange("phone", e.target.value)
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                    </div>
                    {userType === 'Commercial' && (
                      <div className="md:col-span-2">
                        <label className="block text-xs mb-1">Company</label>
                        <input
                          className="w-full md:w-[400px] max-w-[700px] bg-[#091627] rounded-lg px-5 py-3 text-white border border-white/10 focus:outline-none"
                          value={billingFormData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Company name "
                        />
                      </div>
                    )}
                     <div className="md:col-span-2">
                  <label className="block text-xs mb-1">Country*</label>
                  <select
                    className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                    value={billingFormData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    required
                  >
                    <option value="Choose country…">Choose Country…</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                    
                  </select>
                </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-exo2 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          placeholder="Address"
                          value={billingFormData.address}
                          onChange={(e) =>
                            handleBillingInputChange(
                              "streetAddress",
                              e.target.value
                            )
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                      <div>
                        <label className="block font-exo2 mb-2">
                          Apartment, etc. (optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Apartment, etc. (optional)"
                          value={billingFormData.apartment}
                          onChange={(e) =>
                            handleBillingInputChange(
                              "apartment",
                              e.target.value
                            )
                          }
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
                          onChange={(e) =>
                            handleBillingInputChange("city", e.target.value)
                          }
                          className="w-full bg-[#091627] border border-gray-700 text-[#E0E6F3] rounded-md px-4 py-2 font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                      </div>
                      <div>
                 <label className="block text-xs mb-1">State*</label>
                  <select
                    className="w-full bg-[#091627] rounded-lg px-4 py-2 md:mt-3 text-white border border-white/10 focus:outline-none"
                    value={billingFormData.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    disabled={!states.length}
                    required
                  >
                    <option value="">Choose State…</option>
                    {states.map((state) => (
                      <option
                        key={state.isoCode}
                        value={state.isoCode}
                        className="text-white" // dropdown options appear default-colored, can't style them fully via Tailwind due to browser limitations
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                      </div>
                      <div>
                        <label className="block font-exo2 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          value={billingFormData.zipCode}
                          onChange={(e) =>
                            handleBillingInputChange("zipCode", e.target.value)
                          }
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
                            <h4 className="font-exo2 font-semibold">
                              {item.title}
                            </h4>
                            <p className="font-exo2 text-sm text-gray-400">
                              {item.subtitle}
                            </p>
                            <div className="mt-1 space-y-1">
                              <p
                                className="font-exo2 text-xs text-gray-400"
                              >
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
                    <span className="font-exo2 text-2xl font-bold">
                      ${total}
                    </span>
                  </div>
                </div>

                {/* Payment Button */}
           
                <form onSubmit={handlePayment}>
                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`w-full py-3 cursor-pointer rounded-md font-exo2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                      isFormValid()
                        ? "bg-[#009AFF] text-white hover:bg-blue-500"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Confirm Order
                  </button>
                </form>
          

                {/* Back Link */}
                <div className="text-center">
                  <Link
                    href="/account/paymentInfo"
                    className="text-sm text-gray-400 hover:underline font-exo2 cursor-pointer"
                  >
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
