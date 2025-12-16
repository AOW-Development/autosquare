"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { State } from "country-state-city"
import useBillingStore from "@/store/billingStore";
import { useCartStore } from "@/store/cartStore";
import { useShippingStore } from "@/store/shippingStore";
import toast from "react-hot-toast";
import {
  saveCheckoutData,
  trackOtpAttempt,
  getCheckoutData,
  generateSessionId,
  // updateCheckoutData,
} from "@/utils/redisCheckout";

export default function Checkout() {
  const { billingInfo, setBillingInfo } = useBillingStore();
  const { shippingInfo, setShippingInfo } = useShippingStore();
  const { items } = useCartStore();
  const [otpSent, setOtpSent] = useState(true);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const [sessionId] = useState(() => generateSessionId());

  // Add this array at the top of your component (after state declarations)
  const INDIAN_TEST_NUMBERS = [
    "+918073450249",
    "+918867303611",
    "+918494907891",
    "+919358455659", // Replace with your actual test numbers
  ];

   const sendOtp = async () => {
  if (!formData.phone) return toast.error("Enter phone number first!");

  // Remove all non-digit characters
  const digits = formData.phone.replace(/\D/g, "");
  let phoneNumber: string;
  let isIndianNumber = false;

  if (digits.length !== 10) {
    return toast.error("Enter a valid 10-digit phone number");
  }

  // Check if it's a known Indian test number (by checking against the list with +91 prefix)
  const potentialIndianNumber = `+91${digits}`;
  if (INDIAN_TEST_NUMBERS.includes(potentialIndianNumber)) {
    phoneNumber = potentialIndianNumber;
    isIndianNumber = true;
  } else {
    // Default to US number
    phoneNumber = `+1${digits}`;
  }

  try {
    // Track OTP attempt in Redis
    const attemptResult = await trackOtpAttempt(phoneNumber);
    if (!attemptResult.success) {
      return toast.error(attemptResult.error || "Too many OTP attempts");
    }

    const res = await fetch("/api-2/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }), // match backend
    });

    const data = await res.json();

    if (data.status === "pending") {
      setOtpSent(true);
      toast.success("OTP sent successfully!");
    } else {
      toast.error(data.message || "Failed to send OTP");
    }
  } catch (err) {
    toast.error("Failed to send OTP. Check server logs.");
    console.error(err);
  }
};

const verifyOtp = async () => {
  if (!formData.phone) return toast.error("Enter phone number first!");
  if (!otp) return toast.error("Enter OTP first!");

  const digits = formData.phone.replace(/\D/g, "");
  let phoneNumber: string;

  if (digits.length !== 10) {
    return toast.error("Enter a valid 10-digit phone number");
  }

  // Check if it's a known Indian test number
  const potentialIndianNumber = `+91${digits}`;
  if (INDIAN_TEST_NUMBERS.includes(potentialIndianNumber)) {
    phoneNumber = potentialIndianNumber;
  } else {
    phoneNumber = `+1${digits}`;
  }

  try {
    const res = await fetch("/api-2/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber, code: otp }),
    });

    const data = await res.json();
    if (data.success) {
      setIsVerified(true);
      toast.success("Phone verified!");
    } else toast.error(data.message);
  } catch (err) {
    toast.error("Failed to verify OTP. Check server logs.");
    console.error(err);
  }
};

  const [formData, setFormData] = useState(
    shippingInfo || {
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
      email: "", // Added email field
    }
  );

  const [userType, setUserType] = useState("Individual");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [states, setStates] = useState<{ name: string; isoCode: string }[]>([]);
  const [billingStates, setBillingStates] = useState<
    { name: string; isoCode: string }[]
  >([]);
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [error, setError] = useState("");

  const US_STATES = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const CA_PROVINCES = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ];

  const [billingFormData, setBillingFormData] = useState({
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

  const [billingUserType, setBillingUserType] = useState("Individual");
  const [billingErrors, setBillingErrors] = useState<{ [key: string]: string }>(
    {}
  );
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Load saved checkout data from Redis on mount
  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await getCheckoutData(sessionId);
        if (savedData) {
          // Restore customer/shipping info
          if (savedData.shippingInfo) {
            setFormData((prev) => ({
              ...prev,
              ...savedData.shippingInfo,
            }));
            setShippingInfo(savedData.shippingInfo);
          }

          // Restore billing info
          if (savedData.billingInfo && savedData.billingInfo !== null) {
            const billing = savedData.billingInfo;
            setBillingFormData((prev) => ({
              ...prev,
              firstName: billing.firstName,
              lastName: billing.lastName,
              phone: billing.phone,
              company: billing.company || "",
              country: billing.country,
              address: billing.address,
              apartment: billing.apartment || "",
              city: billing.city,
              state: billing.state,
              zipCode: billing.zipCode,
            }));
            setBillingInfo(billing as any);
            if (billing.sameAsShipping !== undefined) {
              setSameAsShipping(billing.sameAsShipping);
            }
          }

          // Restore verification status
          if (savedData.verification?.isVerified) {
            setIsVerified(true);
            setOtpSent(true);
          }

          // toast.success("Previous checkout data restored!");
        }
      } catch (error) {
        console.error("Error loading saved checkout data:", error);
      }
    };

    loadSavedData();
  }, [sessionId]);

  useEffect(() => {
    if (shippingInfo) {
      setFormData((prev) => ({
        ...prev,
        ...shippingInfo,
      }));
    }
  }, [shippingInfo]);

  useEffect(() => {
    if (sameAsShipping) {
      setBillingFormData({
        firstName: formData.firstName || "",
        lastName: formData.lastName || "",
        phone: formData.phone || "",
        company: formData.company || "",
        country: formData.country || "",
        address: formData.address || "",
        apartment: formData.apartment || "",
        city: formData.city || "",
        state: formData.state || "",
        zipCode: formData.zipCode || "",
      });
      setBillingUserType(userType);
    } else {
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
      setBillingUserType("Individual");
    }
  }, [
    sameAsShipping,
    formData.firstName,
    formData.lastName,
    formData.phone,
    formData.company,
    formData.country,
    formData.address,
    formData.apartment,
    formData.city,
    formData.state,
    formData.zipCode,
    userType,
  ]);

  const formatPhoneNumber = (value: string, country: "US" | "IN" = "US") => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");

    if (country === "US") {
      // Limit to 10 digits
      const limited = cleaned.slice(0, 10);

      // Format as (XXX) XXX-XXXX
      if (limited.length <= 3) {
        return limited;
      } else if (limited.length <= 6) {
        return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
      } else {
        return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(
          6
        )}`;
      }
    } else if (country === "IN") {
      // Limit to 10 digits
      const limited = cleaned.slice(0, 10);

      // Format as XXXXX-XXXXX (common Indian mobile format)
      if (limited.length <= 5) {
        return limited;
      } else {
        return `${limited.slice(0, 5)}-${limited.slice(5)}`;
      }
    }

    return cleaned; // fallback
  };

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
        const formatted = formatPhoneNumber(value);
        const digitsOnly = formatted.replace(/\D/g, "");

        if (digitsOnly.length > 0 && digitsOnly.length < 10) {
          error = "Phone number must be 10 digits";
        }

        setFormData((prev) => ({ ...prev, [field]: formatted }));
        setErrors((prev) => ({ ...prev, [field]: error }));
        return;
      case "zipCode":
        if (country === "US" && !/^\d{5}(-\d{4})?$/.test(value)) {
          error = "Enter a valid US ZIP (12345 or 12345-6789)";
        } else if (
          country === "CA" &&
          !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
        ) {
          error = "Enter a valid Canadian Postal Code (e.g., K1A 0B1)";
        }
        break;
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleBillingInputChange = (field: string, value: string) => {
    let error = "";
    const country = billingFormData.country;
    switch (field) {
      case "firstName":
      case "lastName":
      case "city":
        if (!/^[A-Za-z\s]*$/.test(value)) {
          error = "Only letters allowed";
        }
        break;
      case "phone":
        const phoneRegex = /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
        if (country === "US" && value && !phoneRegex.test(value)) {
          error = "Enter a valid US phone (e.g. 555-123-4567)";
        } else if (country === "CA" && value && !phoneRegex.test(value)) {
          error = "Enter a valid Canadian phone (e.g. 416-123-4567)";
        }
        break;
      case "zipCode":
        if (country === "US" && !/^\d{5}(-\d{4})?$/.test(value)) {
          error = "Enter a valid US ZIP (12345 or 12345-6789)";
        } else if (
          country === "CA" &&
          !/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)
        ) {
          error = "Enter a valid Canadian Postal Code (e.g. K1A 0B1)";
        }
        break;
    }
    setBillingFormData((prev) => ({ ...prev, [field]: value }));
    setBillingErrors((prev) => ({ ...prev, [field]: error }));
  };

  // useEffect(() => {
  //   if (formData.country) {
  //     const fetchedStates = State.getStatesOfCountry(formData.country)
  //     setStates(fetchedStates || [])
  //   } else {
  //     setStates([])
  //   }
  // }, [formData.country])

  // useEffect(() => {
  //   if (billingFormData.country) {
  //     const fetchedBillingStates = State.getStatesOfCountry(billingFormData.country)
  //     setBillingStates(fetchedBillingStates || [])
  //   } else {
  //     setBillingStates([])
  //   }
  // }, [billingFormData.country])

  const handleUserTypeChange = (type: "Individual" | "Commercial") => {
    setUserType(type);
  };

  const handleBillingUserTypeChange = (type: "Individual" | "Commercial") => {
    setBillingUserType(type);
  };

  const handleContinue = async () => {
    setShippingInfo(formData);
    setBillingInfo(billingFormData);

    // Calculate order totals
    const subtotal = total;
    const orderShipping = shipping;
    const orderTaxes = taxes;
    const orderTotal = estimatedTotal;

    // Save complete checkout data to Redis (ONE SINGLE JSON)
    const saveSuccess = await saveCheckoutData(
      {
        customerInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email || "",
          phone: formData.phone,
        },
        shippingInfo: {
          ...formData,
          userType: userType,
        },
        billingInfo: {
          ...billingFormData,
          userType: billingUserType,
          sameAsShipping: sameAsShipping,
        },
        verification: {
          isVerified: isVerified ,
          phoneNumber: formData.phone,
        },
        cartItems: items.map((item) => ({
          id: item.id,
          name: item.name,
          title: item.title,
          subtitle: item.subtitle,
          image: item.image,
          quantity: item.quantity,
          price: item.price,
        })),
        orderTotal: {
          subtotal: subtotal,
          shipping: orderShipping,
          taxes: orderTaxes,
          total: orderTotal,
        },
        termsAccepted: termsAccepted,
        isOrderCreatedInBackend: false,
      },
      sessionId
    );

    if (saveSuccess) {
      console.log(
        "✅ Checkout data with cart items saved to Redis successfully"
      );
    }
  };

  const isFormValid = () => {
    const shippingValid =
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.country &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode;

    const billingValid =
      sameAsShipping ||
      (formData.firstName &&
        formData.lastName &&
        formData.phone &&
        billingFormData.country &&
        billingFormData.address &&
        billingFormData.city &&
        billingFormData.state &&
        billingFormData.zipCode);

    return shippingValid && billingValid && termsAccepted && isVerified;
  };

  const cartItems = items || [];
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const taxes = 0;
  const estimatedTotal = total + shipping + taxes;

  const handleSave1 = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = ["country", "address", "city", "state", "zipCode"];

    const emptyFields = requiredFields.filter(
      (field) =>
        !billingFormData[field as keyof typeof billingFormData] ||
        billingFormData[field as keyof typeof billingFormData]
          .toString()
          .trim() === ""
    );

    console.log("billingFormData:", billingFormData);
    console.log("Empty fields:", emptyFields);

    if (emptyFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${emptyFields.join(", ")}`
      );
      return;
    }

    setShippingInfo(shippingInfo);
    setBillingInfo(billingFormData);
    toast.success("Billing details saved successfully!");
  };

  const cartItemsArray = cartItems.map((item) => ({
  item_id: item.id,
  item_name: item.title || item.name,
  item_url: typeof window !== "undefined" ? window.location.href : "",
  price: item.price,
  quantity: item.quantity,
}));


useEffect(() => {
  if (
    typeof window === "undefined" ||
    !cartItems.length ||
    (window as any).__beginCheckoutFired
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      items: cartItemsArray,
    },
  });

  // ✅ Prevent duplicate firing
  (window as any).__beginCheckoutFired = true;
}, [cartItemsArray, cartItems.length]);


  return (
    <div className="min-h-screen bg-[#091B33] text-[#FFFFFF] pt-16 md:pt-14 pb-22 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-10">
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
          Shipping Checkout
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 w-full">
          {/* Step 1 - Complete */}
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

          {/* Connector 1 */}
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

          {/* Connector 2 */}
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

          {/* Connector 3 */}
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
          {/* Step 4 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">
                4
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">
              Confirm
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Forms */}
          <div className="lg:col-span-2">
            <div className="flex justify-end items-end text-right mt-2 pr-1 md:pr-6 mb-4">
              <Link
                href="/account/signIn"
                className="text-sm text-[#FFFFFF] hover:underline font-exo2"
              >
                Have an account? Log in
              </Link>
            </div>

            {/* Customer Information block */}
            <div className="bg-[#02305A] rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 font-exo2">
                Customer Information
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1 font-exo2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1 font-exo2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Mobile
                    </label>

                    {/* Phone input + Send Code */}
                    <div className="flex gap-2 items-center">
                      <input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => {
                          let value = e.target.value;
                          if (value.startsWith("+1")) {
                            value = value.slice(2);
                          }
                          handleInputChange("phone", value);
                        }}
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF]
                            rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] 
                            font-exo2 transition-all duration-200"
                        required
                        disabled={otpSent && !isVerified}
                      />

                      {!otpSent && (
                        <button
                          type="button"
                          onClick={sendOtp}
                          className="bg-[#009AFF] hover:bg-[#00B8FF] active:scale-95 
                              transition-all duration-200 px-4 py-0.5 rounded-md text-white 
                              font-exo2 shadow-md hover:shadow-[#009AFF]/50"
                        >
                          Send Code
                        </button>
                      )}
                    </div>

                    {/* OTP input + Verify inline */}
                    {otpSent && !isVerified && (
                      <div className="flex gap-2 items-center mt-2">
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] 
                              rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] 
                              font-exo2 transition-all duration-200"
                        />

                        <button
                          type="button"
                          onClick={verifyOtp}
                          className="bg-green-500 hover:bg-green-600 active:scale-95 
                              transition-all duration-200 px-4 py-2 rounded-md text-white 
                              font-exo2 shadow-md hover:shadow-green-400/40"
                          disabled={isVerified}
                        >
                          Verify
                        </button>
                      </div>
                    )}

                    {/* Error message */}
                    {error && (
                      <p className="mt-1 text-red-500 font-exo2 text-sm">
                        {error}
                      </p>
                    )}

                    {/* Success message */}
                    {isVerified && (
                      <p className="mt-2 text-green-400 font-exo2 text-sm">
                        {/* Phone verified successfully ✅ */}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>

            {/* Shipping Information */}
            <div className="bg-[#02305A] rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 font-exo2">
                Shipping Information
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 font-exo2">
                  Address Type
                </label>
                <select
                  className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                  value={userType}
                  onChange={(e) =>
                    handleUserTypeChange(
                      e.target.value as "Individual" | "Commercial"
                    )
                  }
                >
                  <option value="Individual">Individual</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Address */}

                  {userType === "Commercial" && (
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company || ""}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                  </div>

                  {/* Apartment */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Apartment
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment"
                      value={formData.apartment}
                      onChange={(e) =>
                        handleInputChange("apartment", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1 font-exo2">
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Country
                    </label>
                    <select
                      className="w-full bg-[#1A263D] rounded-md px-4 py-3 text-[#FFFFFF] border border-[#484848] focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      required
                    >
                      <option value="">Choose Country…</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      State
                    </label>
                    <select
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      // disabled={!states.length}
                      required
                    >
                      <option value="">Select State</option>
                      {(formData.country === "US"
                        ? US_STATES
                        : CA_PROVINCES
                      ).map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={(e) =>
                        handleInputChange("zipCode", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      required
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-xs mt-1 font-exo2">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>

                  {/* Conditional Company Name Field for Commercial Address Type */}
                  {/* {userType === "Commercial" && (
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company || ""}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        required
                      />
                    </div>
                  )} */}
                </div>
              </form>
            </div>

            {/* Billing Address */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 font-exo2">
                Billing Address
              </h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  checked={sameAsShipping}
                  onChange={(e) => setSameAsShipping(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-[#009AFF] bg-transparent border-white rounded mt-1 focus:ring-1 focus:ring-offset-0 focus:ring-white"
                />
                <label
                  htmlFor="sameAsShipping"
                  className="ml-2 text-sm md:text-base text-[#FFFFFF] font-exo2 leading-relaxed"
                >
                  My billing address is the same as the shipping address
                </label>
              </div>

              <div className="bg-[#02305A] rounded-lg p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2 font-exo2">
                    Address Type
                  </label>
                  <select
                    className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                    value={billingUserType}
                    onChange={(e) =>
                      handleBillingUserTypeChange(
                        e.target.value as "Individual" | "Commercial"
                      )
                    }
                    disabled={sameAsShipping}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Address */}

                  {billingUserType === "Commercial" && (
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={billingFormData.company || ""}
                        onChange={(e) =>
                          handleBillingInputChange("company", e.target.value)
                        }
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                        disabled={sameAsShipping}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={billingFormData.address}
                      onChange={(e) =>
                        handleBillingInputChange("address", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                      disabled={sameAsShipping}
                      required
                    />
                  </div>

                  {/* Apartment */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Apartment
                    </label>
                    <input
                      type="text"
                      placeholder="Apartment"
                      value={billingFormData.apartment}
                      onChange={(e) =>
                        handleBillingInputChange("apartment", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                      disabled={sameAsShipping}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      value={billingFormData.city}
                      onChange={(e) =>
                        handleBillingInputChange("city", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                      disabled={sameAsShipping}
                      required
                    />
                    {billingErrors.city && (
                      <p className="text-red-500 text-sm font-exo2">
                        {billingErrors.city}
                      </p>
                    )}
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Country
                    </label>
                    <select
                      className="w-full bg-[#1A263D] rounded-md px-4 py-3 text-[#FFFFFF] border border-[#484848] focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      value={billingFormData.country}
                      onChange={(e) =>
                        handleBillingInputChange("country", e.target.value)
                      }
                      disabled={sameAsShipping}
                      required
                    >
                      <option value="">Choose Country…</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      State
                    </label>
                    <select
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      value={billingFormData.state}
                      onChange={(e) =>
                        handleBillingInputChange("state", e.target.value)
                      }
                      disabled={sameAsShipping}
                      required
                    >
                      <option value="">Select State</option>
                      {(billingFormData.country === "US"
                        ? US_STATES
                        : CA_PROVINCES
                      ).map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={billingFormData.zipCode}
                      onChange={(e) =>
                        handleBillingInputChange("zipCode", e.target.value)
                      }
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                      disabled={sameAsShipping}
                      required
                    />
                    {billingErrors.zipCode && (
                      <p className="text-red-500 text-sm font-exo2">
                        {billingErrors.zipCode}
                      </p>
                    )}
                  </div>

                  {/* Conditional Company Name Field for Billing Address Type */}
                  {/* {billingUserType === "Commercial" && (
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={billingFormData.company || ""}
                        onChange={(e) => handleBillingInputChange("company", e.target.value)}
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 font-exo2 focus:outline-none focus:ring-2 focus:ring-[#009AFF]"
                        disabled={sameAsShipping}
                        required
                      />
                    </div>
                  )} */}
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleSave1}
                    className="w-full bg-[#009AFF] hover:bg-blue-600 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-200 font-exo2"
                  >
                    Save Billing Info
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-[#009AFF] bg-transparent border-white rounded mt-2 focus:ring-1 focus:ring-offset-0 focus:ring-white mr-3"
                />
                <label htmlFor="terms" className="flex items-start">
                  <span className="text-sm md:text-lg font-exo2">
                    I have Read and Accept the
                    <Link
                      href="/account/t&c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {" "}
                      terms and conditions
                    </Link>
                    ,
                    <Link
                      href="/account/warrantyAndReturn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {" "}
                      return policy
                    </Link>
                    {""} and the{" "}
                    <Link
                      href="/account/privacyPolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    of partscentral.us *
                  </span>
                </label>
              </div>
              <div className="flex justify-center md:justify-start mt-6 w-full">
                <button
                  onClick={(e) => {
                    if (isFormValid()) {
                      handleContinue();
                      // navigate to payment page
                      window.location.href = "/account/payMethod";
                    } else {
                      e.preventDefault();
                      toast.error(
                        "Please complete all required fields and verify your phone!"
                      );
                    }
                  }}
                  className={`px-6 py-3 rounded-md font-exo2 text-lg w-full md:w-auto flex items-center justify-center ${
                    isFormValid()
                      ? "bg-[#00C853] text-white hover:bg-green-600"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Continue to payment →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Product Summary */}
          {/* Right Column: Product Summary */}
          <div className="lg:col-span-1 h-fit md:mt-10 w-full">
            {/* Products in Cart Block */}
            <div className="bg-[#02305A] rounded-lg p-4 sm:p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                <h3 className="text-lg sm:text-xl font-bold font-exo2 text-white text-center sm:text-left">
                  PRODUCTS IN CART
                </h3>
                <Link
                  href="/account/cart"
                  className="text-[#009AFF] hover:underline font-exo2 text-sm text-center sm:text-right"
                >
                  Edit cart
                </Link>
              </div>

              {/* Product Items */}
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.id || index}
                    // Main container: flex-row on small screens and up, vertical on mobile
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 bg-[#252525E5] rounded-lg border border-[#252525E5]"
                  >
                    {/* 1. LEFT SIDE: Image and Text Details Container (set to grow) */}
                    <div className="flex items-start space-x-3 flex-grow">
                      <Image
                        src={
                          item.title?.includes("Transmission")
                            ? "/catalog/Trasmission_.png"
                            : "/catalog/Engine 1.png"
                        }
                        alt={item.title || "default"}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded flex-shrink-0"
                      />

                      {/* 2. Text Content: Title/Subtitle and Quantity */}
                      {/* flex-1 min-w-0 forces the flex item to shrink and allows text wrapping inside */}
                      <div className="flex-1 min-w-0">
                        {/* CRITICAL FIX: The break-all class forces the long string to wrap mid-word */}
                        <p className="font-exo2 text-sm sm:text-base text-white font-bold break-words">
                          {item.title?.includes("Used") ? (
                            <>
                              {item.title.split(/Used/i)[0].trim()}
                              <br />
                              {"Used" + item.title.split(/Used/i)[1]}
                            </>
                          ) : (
                            item.title
                          )}
                        </p>

                        <p className="font-exo2 text-sm sm:text-base text-white font-medium break-words">
                          {item.subtitle}
                        </p>

                        <p className="font-exo2 text-xs sm:text-sm text-gray-300 mt-1">
                          {item.quantity} pc.
                        </p>
                      </div>
                    </div>

                    {/* 3. RIGHT SIDE: Price Container (Must be outside the details container) */}
                    {/* flex-shrink-0 prevents the price from being squeezed by the long title */}
                    <div className="flex-shrink-0 ml-auto max-w-[100px] sm:max-w-[120px] text-right">
                      <p className="font-exo2 text-base sm:text-lg md:text-xl text-white font-bold truncate break-words">
                        {item.quantity > 1
                          ? `${item.quantity} × $${item.price.toFixed(0)}`
                          : `$${item.price.toFixed(0)}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Block */}
            <div className="bg-[#02305A] p-4 sm:p-6 rounded-lg shadow-lg sticky top-24 max-h-fit">
              {/* Order details in white card */}
              <div className="space-y-3 sm:space-y-4 text-sm md:text-lg bg-[#252525E5] rounded-lg p-3 sm:p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-exo2">Items:</span>
                  <span className="text-white font-semibold font-exo2">
                    {items.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-exo2">Shipping:</span>
                  <span className="text-white font-semibold font-exo2">
                    free shipping
                  </span>
                </div>
              </div>

              {/* Estimated Total inside the white card */}
              <div className="mt-6 pt-4 md:px-4 flex justify-between items-center">
                <span className="text-white text-base sm:text-lg font-bold font-exo2">
                  Estimated Total:
                </span>
                <span className="text-white text-lg sm:text-xl font-bold font-exo2">
                  ${estimatedTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
