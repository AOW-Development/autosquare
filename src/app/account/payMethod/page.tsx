"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import useBillingStore from "@/store/billingStore";
import { useShippingStore } from "@/store/shippingStore";
import useAuthStore from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import type { PaymentInfo } from "@/store/paymentStore";
// Remove local CartItem interface entirely, use global type
import { getCardType, isValidCardNumber } from "@/utils/cardUtil";
import { generateOrderNumber } from "@/utils/order";
// import { State } from "country-state-city"
import toast from "react-hot-toast";
import {
  saveCheckoutData,
  trackOtpAttempt,
  generateSessionId,
  getCheckoutData,
  updateCheckoutData,
} from "@/utils/redisCheckout";
import { StripeCheckoutRequest, StripeCheckoutResponse } from "@/types/stripe";
import getStripe from "@/lib/stripe-client";

export default function PayMethod() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billingAddressExpanded, setBillingAddressExpanded] = useState(true);
  const { billingInfo, setBillingInfo } = useBillingStore();
  // INTENTIONAL: We need shippingInfo here for order submission
  const { shippingInfo, setShippingInfo } = useShippingStore();
  const { user } = useAuthStore();
  const cartItems = useCartStore((s) => s.items);
  const [userType, setUserType] = useState("Individual");
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [buyInOneClick, setBuyInOneClick] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  // default to Apple Pay

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [sessionId] = useState(() => generateSessionId());

  const INDIAN_TEST_NUMBERS = [
    "+918073450249",
    "+918867303611",
    "+918494907891",
    "+919358455659", // Replace with your actual test numbers
  ];

  const searchParams = useSearchParams();

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
    // email: "",
    phone: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [shippingFormData, setShippingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [shippingStates, setShippingStates] = useState<
    { name: string; isoCode: string }[]
  >([]);
  const [shippingUserType, setShippingUserType] = useState("Individual");
  const [shippingErrors, setShippingErrors] = useState<{
    [key: string]: string;
  }>({});
  const [isShippingSaved, setIsShippingSaved] = useState(false);
  const [isBillingSaved, setIsBillingSaved] = useState(false);

  useEffect(() => {
    const isBuyInOneClick = searchParams.get("buyInOneClick") === "true";
    setBuyInOneClick(isBuyInOneClick);
    if (isBuyInOneClick) {
      setIsShippingSaved(false);
      setIsBillingSaved(false);
    }
  }, [searchParams]);

  useEffect(() => {
    console.log(shippingInfo);

    setShippingInfo(shippingInfo);
  }, [shippingInfo, setShippingInfo, sameAsShipping]);

  useEffect(() => {
    if (sameAsShipping && billingInfo) {
      setBillingFormData({
        firstName: shippingInfo?.firstName || "",
        lastName: shippingInfo?.lastName || "",
        phone: shippingInfo?.phone || "",
        company: shippingInfo?.company || "",
        country: shippingInfo?.country || "",
        address: shippingInfo?.address || "",
        apartment: shippingInfo?.apartment || "",
        city: shippingInfo?.city || "",
        state: shippingInfo?.state || "",
        zipCode: shippingInfo?.zipCode || "",
      });
      if (buyInOneClick) {
        setIsBillingSaved(isShippingSaved);
      }
    } else if (!sameAsShipping) {
      console.log(billingFormData);

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
      if (buyInOneClick) {
        setIsBillingSaved(false);
      }
    }
  }, [sameAsShipping, shippingInfo, isShippingSaved]);

  useEffect(() => {
    if (buyInOneClick && sameAsShipping) {
      setBillingFormData({
        firstName: shippingFormData.firstName || "",
        lastName: shippingFormData.lastName || "",
        phone: shippingFormData.phone || "",
        company: shippingFormData.company || "",
        country: shippingFormData.country || "",
        address: shippingFormData.address || "",
        apartment: shippingFormData.apartment || "",
        city: shippingFormData.city || "",
        state: shippingFormData.state || "",
        zipCode: shippingFormData.zipCode || "",
      });
    }
  }, [buyInOneClick, sameAsShipping, shippingFormData]);

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  });

  const [cardErrors, setCardErrors] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal;

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
      const cleanValue = value.replace(/\D/g, ""); // Remove non-digits
      const cardType = getCardType(cleanValue);
      setCardType(cardType || "unknown"); // <--- ADD THIS LINE

      let formatted = cleanValue;
      let maxLength = 16;

      if (cardType === "American Express") {
        maxLength = 15;
        formatted = cleanValue
          .slice(0, maxLength)
          .replace(/^(\d{0,4})(\d{0,6})(\d{0,5})/, (_m, p1, p2, p3) =>
            [p1, p2, p3].filter(Boolean).join(" ")
          );
      } else {
        formatted = cleanValue
          .slice(0, maxLength)
          .replace(/(\d{4})(?=\d)/g, "$1 ")
          .trim();
      }

      const isValid = isValidCardNumber(cleanValue);

      if (!cardType && cleanValue.length > 0) {
        setCardErrors((prev) => ({ ...prev, cardNumber: "Unknown card type" }));
      } else if (!isValid && cleanValue.length === maxLength) {
        setCardErrors((prev) => ({
          ...prev,
          cardNumber: "Invalid card number",
        }));
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
        const month = Number.parseInt(monthStr, 10);
        const year = Number.parseInt(`20${yearStr}`, 10);

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

        if (
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        ) {
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
        (cardType === "Visa" ||
          cardType === "MasterCard" ||
          cardType === "Discover") &&
        (cardNumberLength !== 16 || cvvLength !== 3)
      )
        return false;

      if (
        cardType === "American Express" &&
        (cardNumberLength !== 15 || cvvLength !== 4)
      )
        return false;

      return (
        !!cardData.cardholderName &&
        !!cardData.expirationDate &&
        (buyInOneClick ? isVerified : true)
      );
    }

    // Disable for unimplemented payment methods
    return false;
  };

  const router = useRouter();

  // Build payment info
  const handlePayment = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (buyInOneClick) {
      if (!isShippingSaved) {
        toast.error(
          "Please save your shipping information before confirming the order."
        );
        return;
      }

      // Check if billing info has been saved (unless same as shipping)
      if (!sameAsShipping && !isBillingSaved) {
        toast.error(
          "Please save your billing information before confirming the order."
        );
        return;
      }
      const shippingRequiredFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "country",
        "address",
        "city",
        "state",
        "zipCode",
      ];
      const shippingEmpty = shippingRequiredFields.some(
        (field) =>
          !shippingFormData[field as keyof typeof shippingFormData] ||
          shippingFormData[field as keyof typeof shippingFormData]
            .toString()
            .trim() === ""
      );

      if (shippingEmpty) {
        toast.error(
          "Please save your shipping information before confirming the order."
        );
        return;
      }

      if (!sameAsShipping) {
        const billingRequiredFields = [
          "country",
          "address",
          "city",
          "state",
          "zipCode",
        ];
        const billingEmpty = billingRequiredFields.some(
          (field) =>
            !billingFormData[field as keyof typeof billingFormData] ||
            billingFormData[field as keyof typeof billingFormData]
              .toString()
              .trim() === ""
        );

        if (billingEmpty) {
          toast.error(
            "Please save your billing information before confirming the order."
          );
          return;
        }
      }
    }

    localStorage.setItem("paymentMethod", paymentMethod);
    if (paymentMethod === "card") {
      localStorage.setItem("cardData", JSON.stringify(cardData));
    }

    // Build payment info
    const payment = {
      paymentMethod: paymentMethod as "card" | "paypal" | "apple" | "google",
      cardData,
      billingData: billingFormData,
      billingAddressExpanded,
    } as PaymentInfo;

    const orderNumber = generateOrderNumber(); // Generate order number once

    // Update Redis with payment information (for BOTH logged in and guest users)
    const existingData = await getCheckoutData(sessionId);

    if (existingData) {
      // Update existing data with payment info
      await updateCheckoutData(
        {
          paymentInfo: {
            paymentMethod: paymentMethod,
            cardData:
              paymentMethod === "card"
                ? {
                    cardNumber: cardData.cardNumber,
                    cardholderName: cardData.cardholderName,
                    expirationDate: cardData.expirationDate,
                    securityCode: cardData.securityCode,
                    cardType: cardType,
                  }
                : undefined,
          },
          orderNumber: orderNumber,
        },
        sessionId
      );
      console.log(" Payment details updated in Redis");
    }

    // Store sessionId for ThankYou page to update status
    sessionStorage.setItem("checkoutSessionId", sessionId);

    if (user) {
      try {
        // IMPORTANT:
        // Both shipping and billing info are sent from the shipping store, regardless of which form was filled last.
        // This is intentional and required by backend/email logic. If 'Same as shipping' is unchecked, handleSave1 will have put billing info in shipping store.
        const orderData = {
          user,
          payment,
          shipping: shippingInfo, // always from shipping store
          billing: sameAsShipping ? shippingInfo : billingInfo, // correct billing info sent
          cartItems: cartItems.length ? cartItems : (cartItems as any),
          orderNumber, // Include the generated order number
        };

        // Store order data for Thank You page
        sessionStorage.setItem("orderData", JSON.stringify(orderData));

        //  Backup cart items to sessionStorage for Thank You page
        sessionStorage.setItem("checkoutCartItems", JSON.stringify(cartItems));

        //  iOS: Verify storage was successful
        const isIOS =
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !(window as any).MSStream;
        if (isIOS) {
          console.log("📱 iOS detected: Verifying sessionStorage...");
          const verifyBackup = sessionStorage.getItem("checkoutCartItems");
          if (!verifyBackup) {
            console.error(" iOS: Failed to store cart backup, retrying...");
            // Try one more time with a small delay
            setTimeout(() => {
              sessionStorage.setItem(
                "checkoutCartItems",
                JSON.stringify(cartItems)
              );
              console.log(" iOS: Cart backup retry completed");
            }, 100);
          } else {
            console.log(" iOS: Cart backup verified");
          }
        }

        // router.push("/account/thankYou");
        window.location.href = "/account/thankYou";
      } catch (error) {
        console.error("Error processing payment:", error);
        // Handle the error appropriately, maybe show a toast message to the user
      }
    } else {
      // Determine customer email - from buy-in-one-click form or checkout page
      const customerEmail = buyInOneClick
        ? shippingFormData.email
        : shippingInfo?.email;

      const orderDataForGuest = {
        payment,
        shipping: buyInOneClick ? shippingFormData : shippingInfo, // use appropriate shipping data
        billing: sameAsShipping
          ? buyInOneClick
            ? shippingFormData
            : shippingInfo
          : buyInOneClick
          ? billingFormData
          : billingInfo,
        cartItems,
        customerEmail, // use email for invoicing regardless of flow
        orderNumber, // Include the generated order number for guest users
      };

      // Save to Redis if Buy-in-One-Click
      if (buyInOneClick) {
        const saveSuccess = await saveCheckoutData(
          {
            customerInfo: {
              firstName: shippingFormData.firstName,
              lastName: shippingFormData.lastName,
              email: shippingFormData.email,
              phone: shippingFormData.phone,
            },
            shippingInfo: {
              ...shippingFormData,
              userType: shippingUserType,
            },
            billingInfo: {
              ...billingFormData,
              userType: userType,
              sameAsShipping: sameAsShipping,
            },
            verification: {
              isVerified: isVerified,
              phoneNumber: shippingFormData.phone,
            },
            cartItems: cartItems.map((item) => ({
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
              shipping: 0,
              taxes: 0,
              total: subtotal,
            },
            paymentInfo: {
              paymentMethod: paymentMethod,
              cardData:
                paymentMethod === "card"
                  ? {
                      cardNumber: cardData.cardNumber,
                      cardholderName: cardData.cardholderName,
                      expirationDate: cardData.expirationDate,
                      securityCode: cardData.securityCode,
                      cardType: cardType,
                    }
                  : undefined,
            },
            orderNumber: orderNumber,
            buyInOneClick: true,
            termsAccepted: true,
            isOrderCreatedInBackend: false, // Will be updated by ThankYou page
          },
          sessionId
        );

        if (saveSuccess) {
          console.log(" Buy-in-One-Click data saved to Redis successfully");
        }
      }

      sessionStorage.setItem("orderData", JSON.stringify(orderDataForGuest));

      //  Backup cart items to sessionStorage for Thank You page
      sessionStorage.setItem("checkoutCartItems", JSON.stringify(cartItems));

      //  iOS: Verify storage was successful
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as any).MSStream;
      if (isIOS) {
        console.log("📱 iOS detected (guest): Verifying sessionStorage...");
        const verifyBackup = sessionStorage.getItem("checkoutCartItems");
        if (!verifyBackup) {
          console.error(
            " iOS (guest): Failed to store cart backup, retrying..."
          );
          setTimeout(() => {
            sessionStorage.setItem(
              "checkoutCartItems",
              JSON.stringify(cartItems)
            );
            console.log(" iOS (guest): Cart backup retry completed");
          }, 100);
        } else {
          console.log(" iOS (guest): Cart backup verified");
        }
      }

      if (buyInOneClick && !isVerified) {
        toast.error(
          "Please verify your phone number before confirming the order."
        );
        return;
      }

      // Go directly to thank you page without sign-in for all users
      // router.push("/account/thankYou");
      // window.location.href = "/account/thankYou";
      // NOW REDIRECT TO STRIPE CHECKOUT
      try {
        // Start loading toast
        const loadingToast = toast.loading("Redirecting to secure payment...");

        const checkoutRequest: StripeCheckoutRequest = {
          cartItems: cartItems.map((item) => ({
            id: item.id,
            title: item.title,
            name: item.name,
            subtitle: item.subtitle,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          })),
          customerEmail,
          orderNumber,
          metadata: {
            sessionId: sessionId,
            buyInOneClick: buyInOneClick.toString(),
          },
        };

        const response = await fetch("/api-2/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(checkoutRequest),
        });

        // Handle non-200 responses
        if (!response.ok) {
          toast.dismiss(loadingToast);
          throw new Error(
            `Payment request failed (status: ${response.status})`
          );
        }

        const data: StripeCheckoutResponse = await response.json();

        // Always dismiss loading toast once response is received
        toast.dismiss(loadingToast);

        // Handle Stripe errors
        if (data.error) {
          toast.error(data.error);
          return;
        }

        // Redirect to Stripe Checkout page
        if (data.url) {
          toast.success("Redirecting to secure Stripe checkout...");
          window.location.href = data.url;
          return;
        }

        // Fallback error
        toast.error("Failed to create checkout session. Please try again.");
      } catch (error: any) {
        // Catch network or logic errors
        console.error("Error processing payment:", error);
        toast.dismiss(); // Ensure no loading toasts remain
        toast.error(
          error?.message || "Something went wrong. Please try again."
        );
      }
    }
  };
  const [states, setStates] = useState<{ name: string; isoCode: string }[]>([]);

  const handleUserTypeChange = (type: "Individual" | "Commercial") => {
    setUserType(type);
    setBillingFormData((prev) => ({ ...prev, customerType: type }));
  };

  const formatPhoneNumber = (value: string, country: "US" | "IN" = "US") => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");

    // Limit to 10 digits
    const limited = cleaned.slice(0, 10);

    // Format as (XXX) XXX-XXXX for all countries
    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    } else {
      return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(
        6
      )}`;
    }
  };

  const handleShippingUserTypeChange = (type: "Individual" | "Commercial") => {
    setShippingUserType(type);
    setShippingFormData((prev) => ({ ...prev, customerType: type }));
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
          error = "Enter a valid US phone (e.g., 555-123-4567)";
        } else if (country === "CA" && value && !phoneRegex.test(value)) {
          error = "Enter a valid Canadian phone (e.g., 416-123-4567)";
        }
        break;
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
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleShippingInputChange = (field: string, value: string) => {
    let error = "";
    const country = shippingFormData.country;

    switch (field) {
      case "firstName":
      case "lastName":
      case "city":
        if (!/^[A-Za-z\s]*$/.test(value)) {
          error = "Only letters allowed";
        }
        break;
      case "phone":
        const formatted = formatPhoneNumber(value, "IN");
        const digitsOnly = formatted.replace(/\D/g, "");

        if (digitsOnly.length > 0 && digitsOnly.length < 10) {
          // error = "Phone number must be 10 digits"
        }

        setShippingFormData((prev) => ({ ...prev, [field]: formatted }));
        setShippingErrors((prev) => ({ ...prev, [field]: error }));
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

    if (field === "country") {
      setShippingFormData((prev) => ({
        ...prev,
        country: value,
        state: "", // reset state when country changes
      }));
    } else {
      setShippingFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
    setShippingErrors((prev) => ({ ...prev, [field]: error }));
  };
  // useEffect(() => {
  //   if (shippingFormData.country) {
  //     const fetchedStates = State.getStatesOfCountry(shippingFormData.country)
  //     setShippingStates(fetchedStates || [])
  //   } else {
  //     setShippingStates([])
  //   }
  // }, [shippingFormData.country])

  const [cardType, setCardType] = useState("unknown");
  const cardImageMap: Record<string, string> = {
    Visa: "visa-inverted_82058.png",
    MasterCard: "mastercard_82049.png",
    "American Express": "americanexpress_82060 1.png",
    Discover: "discover_82082.png",
  };
  const cardImage = cardImageMap[cardType];

  const [paymentInfo, setPaymentInfo] = useState<{
    method: string;
    lastFour?: string;
    cardType?: string;
  }>({ method: "card" });

  // INTENTIONAL DESIGN:
  // If 'Same as shipping' is NOT selected, we save the billing form data into the shipping store.
  // This is because the backend/email logic expects the shipping store to always have the address to use (whether it's shipping or billing).
  // If 'Same as shipping' IS selected, the shipping store already has the shipping address.
  // This is confusing, but required by current backend/email integration. DO NOT change unless backend is refactored.
  // const handleSave1 = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Skip the "company" field when checking required fields
  //   const allFilled = Object.entries(billingFormData)
  //     .filter(([key]) => key !== "company"  && key !== "apartment")
  //     .every(([, value]) => value && value.toString().trim() !== "");

  //     console.log(allFilled);

  //   if (!allFilled) {

  //     toast.error("Please fill in all required Billing fields before saving.");
  //     return;
  //   }

  //   setShippingInfo(billingFormData);
  //   toast.success("Billing details saved successfully!");
  // };

  const handleSave1 = (e: React.FormEvent) => {
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
    setIsBillingSaved(true);
    toast.success("Billing details saved successfully!");
  };

  const handleSaveShipping = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "country",
      "address",
      "city",
      "state",
      "zipCode",
    ];

    const emptyFields = requiredFields.filter(
      (field) =>
        !shippingFormData[field as keyof typeof shippingFormData] ||
        shippingFormData[field as keyof typeof shippingFormData]
          .toString()
          .trim() === ""
    );

    if (emptyFields.length > 0) {
      toast.error(
        `Please fill in all required shipping fields: ${emptyFields.join(", ")}`
      );
      return;
    }

    if (!isVerified) {
      toast.error(
        "Please verify your phone number before saving shipping information."
      );
      return;
    }

    setShippingInfo(shippingFormData);
    setIsShippingSaved(true);
    toast.success("Shipping details saved successfully!");
  };

  // OTP Functions
  const sendOtp = async () => {
    if (!shippingFormData.phone)
      return toast.error("Enter phone number first!");

    // Remove all non-digit characters
    const digits = shippingFormData.phone.replace(/\D/g, "");
    // Add +91 for India (adjust if needed)
    let phoneNumber: string;
    let isIndianNumber = false;
    if (digits.length === 10 && /^[6-9]/.test(digits)) {
      // Potential Indian number
      phoneNumber = `+91${digits}`;
      isIndianNumber = true;
    } else if (digits.length === 10) {
      // US number
      phoneNumber = `+1${digits}`;
    } else {
      return toast.error("Enter a valid 10-digit phone number");
    }

    if (isIndianNumber && !INDIAN_TEST_NUMBERS.includes(phoneNumber)) {
      return toast.error(
        "Only US numbers and specific test Indian numbers are allowed"
      );
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
    if (!shippingFormData.phone)
      return toast.error("Enter phone number first!");
    if (!otp) return toast.error("Enter OTP first!");

    // Remove all non-digit characters
    const digits = shippingFormData.phone.replace(/\D/g, "");
    let phoneNumber: string;
    if (digits.length === 10 && /^[6-9]/.test(digits)) {
      phoneNumber = `+91${digits}`;
    } else {
      phoneNumber = `+1${digits}`;
    } // SAME format as sendOtp

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

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
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
          />
          <span className="text-white">Make a payment</span>
        </div>

        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Payment
        </h1>

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

          {/* Step 2 - Complete */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#009AFF] flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">
                ✓
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
              Information
            </span>
          </div>

          {/* Connector 2 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>

          {/* Step 3 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">
                3
              </span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">
              Payment
            </span>
          </div>

          {/* Connector 3 */}
          <div className="flex-1 h-0.5 bg-white mx-2 mb-4"></div>

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

        <div className="space-y-8">
          {/* Total Amount Section */}
          <div className="bg-[#02305A] border border-[#02305A] rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold font-exo2">Total amount</h2>
              <span className="text-2xl font-bold font-exo2">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Your Order Section */}
          <div className="bg-[#02305A] border border-[#02305A] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold font-exo2 md:text-2xl">
                Your Order
              </h3>
              <Link
                href="/account/cart"
                className="text-base text-white hover:underline font-exo2"
              >
                Edit cart
              </Link>
            </div>

            {/* Product Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 p-4 md:p-6 bg-[#252525E5] rounded-lg border border-[#252525E5]"
                >
                  {/* Left: Image + Title */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        item.title?.includes("Transmission")
                          ? "/catalog/Trasmission_.png"
                          : "/catalog/Engine 1.png"
                      }
                      alt={item.title || "Product Image"}
                      width={80}
                      height={80}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-exo2 font-semibold text-white text-base md:text-lg break-words">
                        {item.title?.includes("Used") ? (
                          <>
                            {item.title.split(/Used/i)[0].trim()}
                            <br />
                            {"Used" + item.title.split(/Used/i)[1]}
                          </>
                        ) : (
                          item.title
                        )}
                      </h4>
                      <p className="font-exo2 text-sm md:text-base text-white font-medium break-words">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Qty, Price, Total */}
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-12 text-left md:text-right gap-2 md:gap-0">
                    <div>
                      <p className="font-exo2 text-sm md:text-xl text-white">
                        QTY: {item.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="font-exo2 text-sm md:text-xl text-white">
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="font-exo2 text-sm md:text-xl text-white">
                        Item Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {buyInOneClick && (
              <div className="bg-[#252525E5] border border-[#252525E5] rounded-lg p-6 sm:p-8 text-white mt-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-exo2 mb-4 sm:mb-6">
                  Customer Information
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={shippingFormData.firstName}
                        onChange={(e) =>
                          handleShippingInputChange("firstName", e.target.value)
                        }
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        required
                      />
                      {shippingErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1 font-exo2">
                          {shippingErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={shippingFormData.lastName}
                        onChange={(e) =>
                          handleShippingInputChange("lastName", e.target.value)
                        }
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        required
                      />
                      {shippingErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1 font-exo2">
                          {shippingErrors.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={shippingFormData.email}
                        onChange={(e) =>
                          handleShippingInputChange("email", e.target.value)
                        }
                        className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 font-exo2">
                        Mobile
                      </label>

                      {/* Phone input + Send Code */}
                      <div className="flex gap-2 items-center">
                        <input
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={shippingFormData.phone}
                          onChange={(e) => {
                            let value = e.target.value;

                            // Remove any leading +1 if the user types it
                            if (value.startsWith("+1")) {
                              value = value.slice(2);
                            }

                            handleShippingInputChange("phone", value);
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
                            transition-all duration-200 px-4 py-3 rounded-md text-white font-exo2 
                            shadow-md hover:shadow-[#009AFF]/50 whitespace-nowrap"
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
                            transition-all duration-200 px-4 py-3 rounded-md text-white font-exo2 
                            shadow-md hover:shadow-green-400/40"
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
                          Phone verified successfully
                        </p>
                      )}

                      {/* Validation error (from shippingErrors) */}
                      {shippingErrors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-exo2">
                          {shippingErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-16 mt-6">
              {buyInOneClick ? (
                /* Shipping Address Form for Buy in One Click */
                <div className="bg-[#252525E5] border border-[#252525E5] rounded-lg p-6 sm:p-8 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-exo2 mb-4 sm:mb-6">
                    Shipping Address
                  </h3>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 font-exo2">
                      Address Type
                    </label>
                    <select
                      className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                      value={shippingUserType}
                      onChange={(e) =>
                        handleShippingUserTypeChange(
                          e.target.value as "Individual" | "Commercial"
                        )
                      }
                    >
                      <option value="Individual">Individual</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {shippingUserType === "Commercial" && (
                        <div>
                          <label className="block text-sm font-medium mb-2 font-exo2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={shippingFormData.company || ""}
                            onChange={(e) =>
                              handleShippingInputChange(
                                "company",
                                e.target.value
                              )
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
                          value={shippingFormData.address}
                          onChange={(e) =>
                            handleShippingInputChange("address", e.target.value)
                          }
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          Apartment
                        </label>
                        <input
                          type="text"
                          placeholder="Apartment"
                          value={shippingFormData.apartment}
                          onChange={(e) =>
                            handleShippingInputChange(
                              "apartment",
                              e.target.value
                            )
                          }
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          value={shippingFormData.city}
                          onChange={(e) =>
                            handleShippingInputChange("city", e.target.value)
                          }
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          required
                        />
                        {shippingErrors.city && (
                          <p className="text-red-500 text-xs mt-1 font-exo2">
                            {shippingErrors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          Country
                        </label>
                        <select
                          className="w-full bg-[#1A263D] rounded-md px-4 py-3 text-[#FFFFFF] border border-[#484848] focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          value={shippingFormData.country}
                          onChange={(e) =>
                            handleShippingInputChange("country", e.target.value)
                          }
                          required
                        >
                          <option value="">Choose Country…</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          State
                        </label>
                        <select
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          value={shippingFormData.state}
                          onChange={(e) =>
                            handleShippingInputChange("state", e.target.value)
                          }
                          // disabled={!shippingStates.length}
                          required
                        >
                          <option value="">Choose State…</option>
                          {(shippingFormData.country === "US"
                            ? US_STATES
                            : CA_PROVINCES
                          ).map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          value={shippingFormData.zipCode}
                          onChange={(e) =>
                            handleShippingInputChange("zipCode", e.target.value)
                          }
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          required
                        />
                        {shippingErrors.zipCode && (
                          <p className="text-red-500 text-xs mt-1 font-exo2">
                            {shippingErrors.zipCode}
                          </p>
                        )}
                      </div>

                      {/* {shippingUserType === "Commercial" && (
                        <div>
                          <label className="block text-sm font-medium mb-2 font-exo2">Company Name</label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={shippingFormData.company || ""}
                            onChange={(e) => handleShippingInputChange("company", e.target.value)}
                            className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                            required
                          />
                        </div>
                      )} */}
                    </div>

                    <button
                      onClick={handleSaveShipping}
                      className={`w-full py-3 px-6 rounded-md font-semibold transition-colors duration-200 font-exo2 ${
                        isShippingSaved
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-[#009AFF] hover:bg-blue-600 text-white"
                      }`}
                    >
                      {isShippingSaved
                        ? "✓ Shipping Info Saved"
                        : "Save Shipping Info"}
                    </button>
                  </div>
                </div>
              ) : (
                /* Original Shipping Address Display */
                <div className="bg-[#252525E5] border border-[#252525E5] rounded-lg p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-exo2">
                      Shipping Address
                    </h3>
                    <Link
                      href="/account/checkout"
                      className="text-sm sm:text-base text-white hover:underline font-exo2"
                    >
                      Change
                    </Link>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-base font-exo2">
                    {(() => {
                      const shipping = useShippingStore.getState().shippingInfo;
                      if (!shipping) return <p>No shipping address on file</p>;
                      return (
                        <>
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.firstName} {shipping.lastName}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.company}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.address}
                          </p>
                          {shipping.apartment && (
                            <p className="text-sm sm:text-base md:text-lg">
                              {shipping.apartment}
                            </p>
                          )}
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.city}, {shipping.state} {shipping.zipCode}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.country}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {shipping.phone}
                          </p>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}

              {buyInOneClick ? (
                /* Billing Address Form for Buy in One Click */
                <div className="bg-[#252525E5] border border-[#252525E5] rounded-lg p-6 sm:p-8 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-exo2 mb-4 sm:mb-6">
                    Billing Address
                  </h3>

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
                      disabled={sameAsShipping}
                    >
                      <option value="Individual">Individual</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userType === "Commercial" && (
                        <div>
                          <label className="block text-sm font-medium mb-2 font-exo2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={billingFormData.company || ""}
                            onChange={(e) =>
                              handleBillingInputChange(
                                "company",
                                e.target.value
                              )
                            }
                            className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
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
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          disabled={sameAsShipping}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 font-exo2">
                          Apartment
                        </label>
                        <input
                          type="text"
                          placeholder="Apartment"
                          value={billingFormData.apartment}
                          onChange={(e) =>
                            handleBillingInputChange(
                              "apartment",
                              e.target.value
                            )
                          }
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          disabled={sameAsShipping}
                        />
                      </div>

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
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          disabled={sameAsShipping}
                          required
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1 font-exo2">
                            {errors.city}
                          </p>
                        )}
                      </div>

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
                          {/* <option value="">Choose State…</option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))} */}
                          <option value="">Choose State…</option>
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
                          className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                          disabled={sameAsShipping}
                          required
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-xs mt-1 font-exo2">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>

                      {/* {userType === "Commercial" && (
                        <div>
                          <label className="block text-sm font-medium mb-2 font-exo2">Company Name</label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={billingFormData.company || ""}
                            onChange={(e) => handleBillingInputChange("company", e.target.value)}
                            className="w-full bg-[#1A263D] border border-[#484848] text-[#FFFFFF] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009AFF] font-exo2"
                            disabled={sameAsShipping}
                            required
                          />
                        </div>
                      )} */}
                    </div>

                    <div className="mt-6">
                      <button
                        onClick={handleSave1}
                        disabled={sameAsShipping && !isShippingSaved}
                        className={`w-full py-3 px-6 rounded-md font-semibold transition-colors duration-200 font-exo2 ${
                          sameAsShipping && !isShippingSaved
                            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                            : isBillingSaved ||
                              (sameAsShipping && isShippingSaved)
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-[#009AFF] hover:bg-blue-600 text-white"
                        }`}
                      >
                        {sameAsShipping && isShippingSaved
                          ? "✓ Using Shipping Address"
                          : isBillingSaved
                          ? "✓ Billing Info Saved"
                          : "Save Billing Info"}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Original Billing Address Display */
                <div className="bg-[#252525E5] border border-[#252525E5] rounded-lg p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-exo2">
                      Billing Address
                    </h3>
                    <Link
                      href="/account/checkout"
                      className="text-sm sm:text-base text-white hover:underline font-exo2"
                    >
                      Change
                    </Link>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base md:text-base font-exo2">
                    {(() => {
                      const billing = useBillingStore.getState().billingInfo;
                      if (!billing) return <p>No billing address on file</p>;
                      return (
                        <>
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.firstName} {billing.lastName}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.company}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.address}
                          </p>
                          {billing.apartment && (
                            <p className="text-sm sm:text-base md:text-lg">
                              {billing.apartment}
                            </p>
                          )}
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.city}, {billing.state} {billing.zipCode}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.country}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg">
                            {billing.phone}
                          </p>
                        </>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#02305A] border border-[#02305A] rounded-lg md:p-8 p-3 w-full ">
            <div className="max-w-xl ml-0">
              <h2 className="text-2xl font-semibold mb-8 font-exo2">
                Select Payment Method
              </h2>

              <div className="space-y-6">
                {/* Credit/Debit Card */}
                <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6">
                  {" "}
                  {/* Increased base padding for better mobile feel */}
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-radio text-[#009AFF] focus:ring-blue-300 w-4 h-4" // Increased size slightly for easier mobile tapping
                      />
                      <span className="font-exo2 text-base sm:text-lg">
                        Pay with Credit or Debit Card
                      </span>{" "}
                      {/* Adjusted text size for mobile */}
                    </div>
                  </label>
                  {paymentMethod === "card" && (
                    <div className="mt-6 space-y-4 sm:space-y-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-gray-50">
                      {" "}
                      {/* Reduced space-y and padding on small screens */}
                      {/* Card Number */}
                      <div className="relative w-full">
                        <label
                          htmlFor="cardNumber"
                          className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                          value={cardData.cardNumber}
                          onChange={(e) =>
                            handleCardInputChange("cardNumber", e.target.value)
                          }
                          className={`w-full bg-[#FFFFFFD1] border ${
                            cardErrors.cardNumber
                              ? "border-red-500"
                              : "border-gray-700"
                          } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12 sm:pr-16`} // Adjusted padding/font/pr for mobile
                        />

                        {cardImage && (
                          <div className="absolute md:top-16 top-12 right-4 sm:right-6 transform -translate-y-1/2">
                            {" "}
                            {/* Adjusted right position for mobile */}
                            <img
                              src={`/images/home/${cardImage}`}
                              alt="cardType"
                              className="w-8 h-auto sm:w-10"
                            />{" "}
                            {/* Adjusted image size for mobile */}
                          </div>
                        )}

                        {cardErrors.cardNumber && (
                          <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">
                            {cardErrors.cardNumber}
                          </p>
                        )}
                      </div>
                      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {" "}
                        {/* KEY CHANGE: grid-cols-1 for mobile, sm:grid-cols-2 for desktop */}
                        <div>
                          <label
                            htmlFor="expirationDate"
                            className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200"
                          >
                            Expiration Date
                          </label>
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
                            className={`w-full bg-[#FFFFFFD1] border ${
                              cardErrors.expirationDate
                                ? "border-red-500"
                                : "border-gray-700"
                            } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                          />
                          {cardErrors.expirationDate && (
                            <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">
                              {cardErrors.expirationDate}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="securityCode"
                            className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200"
                          >
                            Security Code
                          </label>
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cardData.securityCode}
                            onChange={(e) =>
                              handleCardInputChange(
                                "securityCode",
                                e.target.value
                              )
                            }
                            className={`w-full bg-[#FFFFFFD1] border ${
                              cardErrors.securityCode
                                ? "border-red-500"
                                : "border-gray-700"
                            } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                          />
                          {cardErrors.securityCode && (
                            <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">
                              {cardErrors.securityCode}
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Cardholder Name */}
                      <div>
                        <label
                          htmlFor="cardholderName"
                          className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200"
                        >
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Name"
                          value={cardData.cardholderName}
                          onChange={(e) =>
                            handleCardInputChange(
                              "cardholderName",
                              e.target.value
                            )
                          }
                          className={`w-full bg-[#FFFFFFD1] border ${
                            cardErrors.cardholderName
                              ? "border-red-500"
                              : "border-gray-700"
                          } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                        />
                        {cardErrors.cardholderName && (
                          <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">
                            {cardErrors.cardholderName}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Google Pay */}

                {/* Apple Pay */}

                {/* PayPal */}
                {/* <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6"> {/* Unified padding for consistency */}
                {/* <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3"> */}
                {/* <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-[#009AFF] focus:ring-blue-300 w-4 h-4"
                  /> */}
                {/* <span className="font-exo2 text-base sm:text-lg">Pay with PayPal</span>
                </div> */}
                {/* <img src="/paypal.png" alt="PayPal" className="h-5 sm:h-6" /> {/* Adjusted image size for mobile */}
                {/* </label> */}
                {/* <p className="ml-4 mt-2 text-xs sm:text-sm text-gray-400 font-exo2 flex items-center gap-2"> {/* Adjusted text size */}
                {/* 6 Months No Interest with PayPal Credit */}
                {/* <img src="/pay-credit.png" alt="PayPal Credit" className="h-3 sm:h-4 w-auto inline-block" /> Adjusted image size */}
                {/* </p> */}
                {/* </div> */}
              </div>

              {/* Confirm Order Button */}
              <form onSubmit={handlePayment} className="mt-8 sm:mt-10">
                {" "}
                {/* Adjusted top margin */}
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full py-3 sm:py-4 cursor-pointer rounded-md font-exo2 text-lg sm:text-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                    isFormValid()
                      ? "bg-[#009AFF] text-white hover:bg-blue-500"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`} // Adjusted padding/font
                >
                  Confirm Order
                </button>
              </form>

              {/* Back Link */}
              <div className="text-center mt-6">
                <Link
                  href="/account/paymentInfo"
                  className="text-sm sm:text-base text-gray-400 hover:underline font-exo2 cursor-pointer" // Adjusted text size
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
