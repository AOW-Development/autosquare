"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useBillingStore from "@/store/billingStore"
import { useShippingStore } from "@/store/shippingStore"
import useAuthStore from "@/store/authStore"
import { useCartStore } from "@/store/cartStore"
import type { PaymentInfo } from "@/store/paymentStore"
// Remove local CartItem interface entirely, use global type
import { getCardType, isValidCardNumber } from "@/utils/cardUtil"
import { State } from "country-state-city"
import toast from "react-hot-toast"

export default function PayMethod() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [billingAddressExpanded, setBillingAddressExpanded] = useState(true)
  const { billingInfo, setBillingInfo } = useBillingStore()
  // INTENTIONAL: We need shippingInfo here for order submission
  const { shippingInfo, setShippingInfo } = useShippingStore()
  const { user } = useAuthStore()
  const cartItems = useCartStore((s) => s.items)
  const [userType, setUserType] = useState("Individual")
  const [sameAsShipping, setSameAsShipping] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  // default to Apple Pay

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
  })
  useEffect(() => {
    console.log(shippingInfo)

    setShippingInfo(shippingInfo)
  }, [shippingInfo, setShippingInfo, sameAsShipping])

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
      })
    } else if (!sameAsShipping) {
      console.log(billingFormData)

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
      })
    }
  }, [sameAsShipping, shippingInfo])

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  })

  const [cardErrors, setCardErrors] = useState({
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  // const salesTax = Math.round(subtotal * 0.029); // 2.9% tax
  const total = subtotal
  // + salesTax;

  // const handleBillingInputChange = (field: string, value: string) => {
  //   let error = ""
  //   const country = billingFormData.country
  //   console.log(country)

  //   switch (field) {
  //     case "firstName":
  //     case "lastName":
  //     case "city":
  //       if (!/^[A-Za-z\s]*$/.test(value)) {
  //         error = "Only letters allowed"
  //       }
  //       break

  //     case "phone":
  //       if (country === "US") {
  //         if (!/^$$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value)) {
  //           error = "Enter a valid US phone (e.g. 555-123-4567)"
  //         }
  //       } else if (country === "CA") {
  //         if (!/^$$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value)) {
  //           error = "Enter a valid Canadian phone (e.g. 416-123-4567)"
  //         }
  //       }
  //       break

  //     case "zipCode":
  //       if (country === "US") {
  //         if (!^\d{5}(-\d{4})?$/.test(value)) {
  //           error = "Enter a valid US ZIP (12345 or 12345-6789)"
  //         }
  //       } else if (country === "CA") {
  //         if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(value)) {
  //           error = "Enter a valid Canadian Postal Code (e.g. K1A 0B1)"
  //         }
  //       }
  //       break
  //   }

  //   setBillingFormData((prev) => ({ ...prev, [field]: value }))
  //   setErrors((prev) => ({ ...prev, [field]: error }))
  // }

  const handleCardInputChange = (field: string, value: string) => {
    if (field === "cardholderName") {
      const onlyLetters = /^[A-Za-z\s]*$/
      if (!onlyLetters.test(value)) {
        setCardErrors((prev) => ({
          ...prev,
          cardholderName: "Only letters and spaces are allowed",
        }))
        return
      } else {
        setCardErrors((prev) => ({ ...prev, cardholderName: "" }))
      }
      setCardData((prev) => ({ ...prev, cardholderName: value }))
      return
    }

    if (field === "cardNumber") {
      const cleanValue = value.replace(/\D/g, "") // Remove non-digits
      const cardType = getCardType(cleanValue)
      setCardType(cardType || "unknown") // <--- ADD THIS LINE

      let formatted = cleanValue
      let maxLength = 16

      if (cardType === "American Express") {
        maxLength = 15
        formatted = cleanValue
          .slice(0, maxLength)
          .replace(/^(\d{0,4})(\d{0,6})(\d{0,5})/, (_m, p1, p2, p3) => [p1, p2, p3].filter(Boolean).join(" "))
      } else {
        formatted = cleanValue
          .slice(0, maxLength)
          .replace(/(\d{4})(?=\d)/g, "$1 ")
          .trim()
      }

      const isValid = isValidCardNumber(cleanValue)

      if (!cardType && cleanValue.length > 0) {
        setCardErrors((prev) => ({ ...prev, cardNumber: "Unknown card type" }))
      } else if (!isValid && cleanValue.length === maxLength) {
        setCardErrors((prev) => ({ ...prev, cardNumber: "Invalid card number" }))
      } else {
        setCardErrors((prev) => ({ ...prev, cardNumber: "" }))
      }

      setCardData((prev) => ({ ...prev, cardNumber: formatted }))
      return
    }

    if (field === "expirationDate") {
      const cleaned = value.replace(/\D/g, "").slice(0, 4) // MMYY
      let formatted = cleaned

      if (cleaned.length >= 3) {
        formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
      }

      if (formatted.length > 5) return

      if (formatted.length === 5) {
        const [monthStr, yearStr] = formatted.split("/")
        const month = Number.parseInt(monthStr, 10)
        const year = Number.parseInt(`20${yearStr}`, 10)

        const currentDate = new Date()
        const currentMonth = currentDate.getMonth() + 1
        const currentYear = currentDate.getFullYear()

        if (month < 1 || month > 12) {
          setCardErrors((prev) => ({
            ...prev,
            expirationDate: "Month must be between 01 and 12",
          }))
          return
        }

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
          setCardErrors((prev) => ({
            ...prev,
            expirationDate: "Expiration date must be in the future",
          }))
          return
        }

        setCardErrors((prev) => ({ ...prev, expirationDate: "" }))
      }

      setCardData((prev) => ({ ...prev, expirationDate: formatted }))
      return
    }

    if (field === "securityCode") {
      const cardType = getCardType(cardData.cardNumber.replace(/\D/g, ""))
      const expectedLength = cardType === "American Express" ? 4 : 3
      const cleaned = value.replace(/\D/g, "").slice(0, expectedLength)

      if (cleaned.length > 0 && cleaned.length !== expectedLength) {
        setCardErrors((prev) => ({
          ...prev,
          securityCode: `CVV must be ${expectedLength} digits`,
        }))
      } else {
        setCardErrors((prev) => ({ ...prev, securityCode: "" }))
      }

      setCardData((prev) => ({ ...prev, securityCode: cleaned }))
      return
    }

    // Fallback
    setCardData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    if (paymentMethod === "card") {
      const cardType = getCardType(cardData.cardNumber)
      const validLuhn = isValidCardNumber(cardData.cardNumber)

      if (!cardType || !validLuhn) return false

      const cardNumberLength = cardData.cardNumber.replace(/\D/g, "").length
      const cvvLength = cardData.securityCode.length

      if (
        (cardType === "Visa" || cardType === "MasterCard" || cardType === "Discover") &&
        (cardNumberLength !== 16 || cvvLength !== 3)
      )
        return false

      if (cardType === "American Express" && (cardNumberLength !== 15 || cvvLength !== 4)) return false

      return !!cardData.cardholderName && !!cardData.expirationDate
    }

    // Disable for unimplemented payment methods
    return false
  }

  const router = useRouter()

  // Build payment info
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    // Store payment info in localStorage for thank you page
    localStorage.setItem("paymentMethod", paymentMethod)
    if (paymentMethod === "card") {
      localStorage.setItem("cardData", JSON.stringify(cardData))
    }

    // Build payment info
    const payment = {
      paymentMethod: paymentMethod as "card" | "paypal" | "apple" | "google",
      cardData,
      billingData: billingFormData,
      billingAddressExpanded,
    } as PaymentInfo

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
        }

        // Store order data for Thank You page
        sessionStorage.setItem("orderData", JSON.stringify(orderData))

        // Send order confirmation email
        // const emailResponse = await fetch('/api-2/send-order-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(orderData)
        // });

        // if (!emailResponse.ok) {
        //   console.error('Failed to send order confirmation email');
        //   // Continue with the order even if email fails
        // }

        // Redirect to thank you page after successful order and email
        router.push("/account/thankYou")
      } catch (error) {
        console.error("Error processing payment:", error)
        // Handle the error appropriately, maybe show a toast message to the user
      }
    } else {
      // Guest user checkout
      const orderDataForGuest = {
        payment,
        shipping: shippingInfo, // always save shipping
        billing: sameAsShipping ? shippingInfo : billingInfo,
        cartItems,
      }

      sessionStorage.setItem("orderData", JSON.stringify(orderDataForGuest))
      sessionStorage.setItem("redirectAfterLogin", "/account/thankYou")

      router.push("/account/signIn")
    }
  }
  const [states, setStates] = useState<{ name: string; isoCode: string }[]>([])

  useEffect(() => {
    if (billingFormData.country) {
      const fetchedStates = State.getStatesOfCountry(billingFormData.country)
      console.log("Fetched States:", fetchedStates)
      setStates(fetchedStates || [])
    } else {
      setStates([])
    }
  }, [billingFormData.country])

  const handleUserTypeChange = (type: "Individual" | "Commercial") => {
    setUserType(type)
    setBillingFormData((prev) => ({ ...prev, customerType: type }))
  }

  const handleChange = (field: string, value: string) => {
    if (field === "country") {
      setBillingFormData((prev) => ({
        ...prev,
        country: value,
        state: "", // reset state when country changes
      }))
    } else {
      setBillingFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }
  const [cardType, setCardType] = useState("unknown")
  const cardImageMap: Record<string, string> = {
    Visa: "visa-inverted_82058.png",
    MasterCard: "mastercard_82049.png",
    "American Express": "americanexpress_82060 1.png",
    Discover: "discover_82082.png",
  }
  const cardImage = cardImageMap[cardType]

  const [paymentInfo, setPaymentInfo] = useState<{
    method: string
    lastFour?: string
    cardType?: string
  }>({ method: "card" })

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
    e.preventDefault()

    const requiredFields = ["firstName", "lastName", "phone", "country", "address", "city", "state", "zipCode"]

    const emptyFields = requiredFields.filter(
      (field) =>
        !billingFormData[field as keyof typeof billingFormData] ||
        billingFormData[field as keyof typeof billingFormData].toString().trim() === "",
    )

    console.log("billingFormData:", billingFormData)
    console.log("Empty fields:", emptyFields)

    if (emptyFields.length > 0) {
      toast.error(`Please fill in all required fields: ${emptyFields.join(", ")}`)
      return
    }

    setShippingInfo(shippingInfo)
    setBillingInfo(billingFormData)
    toast.success("Billing details saved successfully!")
  }

  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 py-4 mt-1 bg-[#091b33] text-[#0F1E35] text-[15px] font-medium">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/engine/HouseLine.png" alt="Home" width={24} height={24} />
          </Link>
          <Image src="/Images/arrows (1).svg" alt="Arrow" width={16} height={16} />
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
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">✓</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">Cart</span>
          </div>

          {/* Connector 1 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>

          {/* Step 2 - Complete */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#009AFF] flex items-center justify-center">
              <span className="text-[#009AFF] font-exo2 font-semibold text-sm">✓</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">Information</span>
          </div>

          {/* Connector 2 */}
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>

          {/* Step 3 - Active */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">3</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">Payment</span>
          </div>

          {/* Connector 3 */}
          <div className="flex-1 h-0.5 bg-white mx-2 mb-4"></div>

          {/* Step 4 - Inactive */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">4</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">Confirm</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Total Amount Section */}
          <div className="bg-[#02305A] border border-[#02305A] rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold font-exo2">Total amount</h2>
              <span className="text-2xl font-bold font-exo2">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Your Order Section */}
          <div className="bg-[#02305A] border border-[#02305A] rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold font-exo2 md:text-2xl">Your Order</h3>
              <Link href="/account/cart" className="text-base text-white hover:underline font-exo2">
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
                        item.title.includes("Transmission")
                          ? "/catalog/Trasmission_.png"
                          : "/catalog/Engine 1.png"
                      }
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-exo2 font-semibold text-white text-base md:text-lg">
                        {item.title}
                      </h4>
                      <p className="font-exo2 text-sm md:text-base text-white font-medium">
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

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-16 mt-6">
          {/* Shipping Address */}
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
                const shipping = useShippingStore.getState().shippingInfo
                if (!shipping) return <p>No shipping address on file</p>
                return (
                  <>
                    <p className="text-sm sm:text-base md:text-lg">
                      {shipping.firstName} {shipping.lastName}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">{shipping.address}</p>
                    {shipping.apartment && (
                      <p className="text-sm sm:text-base md:text-lg">{shipping.apartment}</p>
                    )}
                    <p className="text-sm sm:text-base md:text-lg">
                      {shipping.city}, {shipping.state} {shipping.zipCode}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">{shipping.country}</p>
                    <p className="text-sm sm:text-base md:text-lg">{shipping.phone}</p>
                  </>
                )
              })()}
            </div>
          </div>

          {/* Billing Address */}
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
                const billing = useBillingStore.getState().billingInfo
                if (!billing) return <p>No billing address on file</p>
                return (
                  <>
                    <p className="text-sm sm:text-base md:text-lg">
                      {billing.firstName} {billing.lastName}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">{billing.address}</p>
                    {billing.apartment && (
                      <p className="text-sm sm:text-base md:text-lg">{billing.apartment}</p>
                    )}
                    <p className="text-sm sm:text-base md:text-lg">
                      {billing.city}, {billing.state} {billing.zipCode}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg">{billing.country}</p>
                    <p className="text-sm sm:text-base md:text-lg">{billing.phone}</p>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
          </div>

          <div className="bg-[#02305A] border border-[#02305A] rounded-lg md:p-8 p-3 w-full ">
            <div className="max-w-xl ml-0" >
            <h2 className="text-2xl font-semibold mb-8 font-exo2">Select Payment Method</h2>

            <div className="space-y-6">
            {/* Credit/Debit Card */}
            <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6"> {/* Increased base padding for better mobile feel */}
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
                  <span className="font-exo2 text-base sm:text-lg">Pay with Credit or Debit Card</span> {/* Adjusted text size for mobile */}
                </div>
              </label>

              {paymentMethod === "card" && (
                <div className="mt-6 space-y-4 sm:space-y-6 pl-4 pr-4 sm:pl-6 sm:pr-6 text-gray-50"> {/* Reduced space-y and padding on small screens */}
                  {/* Card Number */}
                  <div className="relative w-full">
                    <label htmlFor="cardNumber" className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200">Card Number</label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={cardData.cardNumber}
                      onChange={(e) => handleCardInputChange("cardNumber", e.target.value)}
                      className={`w-full bg-[#FFFFFFD1] border ${
                        cardErrors.cardNumber ? "border-red-500" : "border-gray-700"
                      } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12 sm:pr-16`} // Adjusted padding/font/pr for mobile
                    />

                    {cardImage && (
                      <div className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2"> {/* Adjusted right position for mobile */}
                        <img src={`/images/home/${cardImage}`} alt="cardType" className="w-8 h-auto sm:w-10" /> {/* Adjusted image size for mobile */}
                      </div>
                    )}

                    {cardErrors.cardNumber && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">{cardErrors.cardNumber}</p> 
                    )}
                  </div>

                  <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2"> {/* KEY CHANGE: grid-cols-1 for mobile, sm:grid-cols-2 for desktop */}
                    <div>
                      <label htmlFor="expirationDate" className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200">Expiration Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardData.expirationDate}
                        onChange={(e) => handleCardInputChange("expirationDate", e.target.value)}
                        className={`w-full bg-[#FFFFFFD1] border ${
                          cardErrors.expirationDate ? "border-red-500" : "border-gray-700"
                        } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                      />
                      {cardErrors.expirationDate && (
                        <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">{cardErrors.expirationDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="securityCode" className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200">Security Code</label>
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardData.securityCode}
                        onChange={(e) => handleCardInputChange("securityCode", e.target.value)}
                        className={`w-full bg-[#FFFFFFD1] border ${
                          cardErrors.securityCode ? "border-red-500" : "border-gray-700"
                        } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                      />
                      {cardErrors.securityCode && (
                        <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">{cardErrors.securityCode}</p>
                      )}
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label htmlFor="cardholderName" className="block text-sm sm:text-lg mb-2 font-exo2 text-gray-200">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={cardData.cardholderName}
                      onChange={(e) => handleCardInputChange("cardholderName", e.target.value)}
                      className={`w-full bg-[#FFFFFFD1] border ${
                        cardErrors.cardholderName ? "border-red-500" : "border-gray-700"
                      } text-black rounded-md px-4 py-3 sm:px-6 sm:py-4 font-exo2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300`} // Adjusted padding/font
                    />
                    {cardErrors.cardholderName && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2 font-exo2">{cardErrors.cardholderName}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Google Pay */}
            <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6"> {/* Unified padding for consistency */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="google"
                    checked={paymentMethod === "google"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-[#009AFF] focus:ring-blue-300 w-4 h-4"
                  />
                  <span className="font-exo2 text-base sm:text-lg">Pay with Google Pay</span>
                </div>
                <img src="/google.png" alt="Google Pay" className="h-6 w-auto sm:h-8" /> {/* Adjusted image size for mobile */}
              </label>
            </div>

            {/* Apple Pay */}
            <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6"> {/* Unified padding for consistency */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="apple"
                    checked={paymentMethod === "apple"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-[#009AFF] focus:ring-blue-300 w-4 h-4"
                  />
                  <span className="font-exo2 text-base sm:text-lg">Pay with Apple Pay</span>
                </div>
                <img src="/apple1.png" alt="Apple Pay" className="h-6 w-auto sm:h-8" /> {/* Adjusted image size for mobile */}
              </label>
            </div>

            {/* PayPal */}
            <div className="bg-[#252525E5] text-white rounded-md p-4 md:p-6"> {/* Unified padding for consistency */}
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-[#009AFF] focus:ring-blue-300 w-4 h-4"
                  />
                  <span className="font-exo2 text-base sm:text-lg">Pay with PayPal</span>
                </div>
                <img src="/paypal.png" alt="PayPal" className="h-5 sm:h-6" /> {/* Adjusted image size for mobile */}
              </label>
              <p className="ml-4 mt-2 text-xs sm:text-sm text-gray-400 font-exo2 flex items-center gap-2"> {/* Adjusted text size */}
                6 Months No Interest with PayPal Credit
                <img src="/pay-credit.png" alt="PayPal Credit" className="h-3 sm:h-4 w-auto inline-block" /> {/* Adjusted image size */}
              </p>
            </div>
          </div>

          {/* Confirm Order Button */}
          <form onSubmit={handlePayment} className="mt-8 sm:mt-10"> {/* Adjusted top margin */}
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
  )
}
