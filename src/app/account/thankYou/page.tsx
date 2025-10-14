"use client"
"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import useBillingStore from "@/store/billingStore"
import { useCartStore } from "@/store/cartStore"
import { generateOrderNumber } from "@/utils/order"
import { useShippingStore } from "@/store/shippingStore"
import { createOrderInBackend } from "@/utils/orderUtils"
import { toast } from "react-hot-toast"
import useAuthStore from "@/store/authStore"
import { OrderEmailData } from "@/lib/mail"
import GtagConversion from "@/components/GtagConversion"

export default function ThankYouPage() {
  
  const { billingInfo } = useBillingStore()
  const cartItems = useCartStore((s) => s.items)
  const [orderNumber, setOrderNumber] = useState("")
  const [orderDate, setOrderDate] = useState("")
  const { shippingInfo } = useShippingStore()
  const [paymentInfo, setPaymentInfo] = useState<{ method: string; lastFour?: string }>({ method: "card" })
  const [cardType, setCardType] = useState("unknown")
  const isSameAddress = JSON.stringify(billingInfo) === JSON.stringify(shippingInfo)
  const { setShippingInfo } = useShippingStore()
  const { setBillingInfo } = useBillingStore()
  const [finalOrderNumber, setFinalOrderNumber] = useState("")
  const { user } = useAuthStore()
  const [showPopup, setShowPopup] = useState(false)
  const hasProcessed = useRef(false)
  const hasRunRef = useRef(false)

  // this clears the cart on unmount
  useEffect(()=>{
    localStorage.removeItem("cart-storage")
  },[]);

  // Card image mapping
  const cardImageMap: Record<string, string> = {
    Visa: "visa-inverted_82058.png",
    MasterCard: "mastercard_82049.png",
    "American Express": "americanexpress_82060 1.png",
    Discover: "discover_82082.png",
  }

  const cardImage = cardImageMap[cardType]
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const salesTax = Math.round(subtotal * 0.029)
  const total = subtotal + salesTax

    useEffect(() => {
    // Check if the page was reloaded
    const [navigation] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    if (navigation?.type === "reload") {
      // toast.error("You cannot reload this page. Your order has already been processed.")
      alert("You cannot reload this page. Your order has already been processed we will redirect to homepage.")
      window.location.href = "/"
      return
    }
  }, [])


  // ✅ MAIN: Run once to create order + send invoice
  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    const orderData = sessionStorage.getItem("orderData")
    let existingOrderNumber = ""

    if (orderData) {
      try {
        const parsedOrderData = JSON.parse(orderData)
        existingOrderNumber = parsedOrderData.orderNumber || ""
      } catch (error) {
        console.error("Error parsing order data:", error)
      }
    }

    const orderNum = existingOrderNumber
    setFinalOrderNumber(orderNum)
    setOrderNumber(orderNum)
    setOrderDate(
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )

    const storedPaymentMethod = localStorage.getItem("paymentMethod") || "card"
    const storedCardData = localStorage.getItem("cardData")

    if (storedPaymentMethod === "card" && storedCardData) {
      try {
        const cardData = JSON.parse(storedCardData)
        const lastFour = cardData.cardNumber?.slice(-4) || "****"
        setPaymentInfo({ method: "card", lastFour })

        if (/^4/.test(cardData.cardNumber)) setCardType("Visa")
        else if (/^5[1-5]/.test(cardData.cardNumber)) setCardType("MasterCard")
        else if (/^3[47]/.test(cardData.cardNumber)) setCardType("American Express")
        else if (/^6/.test(cardData.cardNumber)) setCardType("Discover")
      } catch {
        setPaymentInfo({ method: "card", lastFour: "****" })
      }
    } else {
      setPaymentInfo({ method: storedPaymentMethod })
    }

    const createOrder = async () => {
      try {
        const orderData = sessionStorage.getItem("orderData")
        if (!orderData) {
          console.error("No order data found in session storage")
          return
        }

        const parsedOrderData = JSON.parse(orderData)
        const customerEmail = parsedOrderData.customerEmail || parsedOrderData.user?.email || user?.email

        if (!customerEmail) {
          console.error("No customer email found for invoice")
          toast.error("Unable to send invoice - no email address found")
          return
        }

        const orderUser = user
          ? {
              id: user.id,
              email: customerEmail,
              firstName: user.firstName,
              lastName: user.lastName,
              name: user.name,
            }
          : {
              email: customerEmail,
              firstName: parsedOrderData.billing?.firstName || parsedOrderData.shipping?.firstName || "",
              lastName: parsedOrderData.billing?.lastName || parsedOrderData.shipping?.lastName || "",
              name: `${parsedOrderData.billing?.firstName || parsedOrderData.shipping?.firstName || ""} ${parsedOrderData.billing?.lastName || parsedOrderData.shipping?.lastName || ""}`.trim(),
            }

        const fullOrderData = {
          user: orderUser,
          payment: parsedOrderData.payment,
          billing: parsedOrderData.billing,
          shipping: parsedOrderData.shipping,
          cartItems: cartItems,
          orderNumber: orderNum,
          totalAmount: total,
          subtotal: subtotal,
          customerEmail: customerEmail,
        }

        const sendingToastId = toast.loading("Please wait… sending your invoice")
        console.log("Final full order data to be sent:", fullOrderData)

        await createOrderInBackend(fullOrderData)


        try {
          const emailResponse = await fetch("/api-2/send-order-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fullOrderData),
          })
          toast.dismiss(sendingToastId)

          if (!emailResponse.ok) {
            const errorText = await emailResponse.text()
            console.error("Failed to send order confirmation email:", errorText)
            toast.error("Order placed successfully, but failed to send confirmation email")
          } else {
            toast.success(`Order confirmation sent to ${customerEmail}`)
        
        //   setShowPopup(true)

        //   // Mark order as viewed
        //   const viewedOrders = JSON.parse(localStorage.getItem("viewedOrders") || "[]")
        //   if (!viewedOrders.includes(finalOrderNumber)) {
        //     viewedOrders.push(finalOrderNumber)
        //     localStorage.setItem("viewedOrders", JSON.stringify(viewedOrders))
        //   }

        //   // Redirect after another short delay
        //   setTimeout(() => {
        //     window.location.href = "/"
        //   }, 15000) // 3s after popup appears
        // }, 2000) // 0.5s delay to let toast appear first
      
          }
        } catch (err) {
          console.error("Email sending failed:", err)
          toast.error("Order placed successfully, but failed to send confirmation email")
        }

        sessionStorage.removeItem("orderData")

        // ✅ Now mark as viewed (after order creation)
        const viewedOrders = JSON.parse(localStorage.getItem("viewedOrders") || "[]")
        if (orderNum && viewedOrders.includes(orderNum)) {
          setShowPopup(true)
          setTimeout(() => {
            window.location.href = "/"
          }, 3000)
        } else if (orderNum) {
          viewedOrders.push(orderNum)
          localStorage.setItem("viewedOrders", JSON.stringify(viewedOrders))
        }
      } catch (error) {
        console.error("Error creating order:", error)
        toast.error("Failed to process order. Please contact support.")
      }
    }

    createOrder()
  }, [user])

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

      <main className="relative z-10 w-full flex justify-center lg:justify-end md:pr-4 lg:pr-100 px-4">
        <div className="w-full max-w-xl bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-12 flex flex-col">
          <div className="flex flex-col items-center mb-6">
            <h1
              className="text-white text-2xl md:text-3xl lg:text-3xl font-semibold uppercase text-center leading-tight tracking-wide"
              style={{ fontFamily: "Audiowide, sans-serif", letterSpacing: "0.1em" }}
            >
              Thank you for shopping with us!
            </h1>
            <div
              className="text-white text-xl md:text-xl lg:text-xl font-normal text-center mt-1"
              
            >
              Your payment is protected. Our team is processing your order.
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 mb-1">
            <div>
              <div className="uppercase text-sm text-gray-300 font-semibold">Deliver To</div>
              <div className="text-white text-sm mt-1 leading-tight">
                <>
                  {billingInfo && Object.keys(billingInfo).length > 0 && (
                    <div>
                      <strong>Billing Information</strong>
                      <br />
                      {shippingInfo.firstName} {shippingInfo.lastName}
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
                  )}

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
              </div>
            </div>

            <div className="flex flex-col items-start md:items-center">
              <div className="uppercase text-sm text-gray-300 font-semibold pr-12">Payment Method</div>
              <div className="flex items-center gap-3 mt-1">
                {paymentInfo.method === "card" ? (
                  <>
                    <span className="text-white text-sm tracking-widest">
                      **** **** **** {paymentInfo.lastFour || "****"}
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
                  <span className="text-white text-sm">PayPal</span>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-white my-4" />
          <div className="flex flex-col md:flex-row justify-between items-center mb-2">
            <div className="uppercase text-sm text-white font-semibold">
              Order Details <span id="order-id" className="font-normal">#{orderNumber}</span>
            </div>
            <div className="text-sm text-white">{orderDate}</div>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-row items-start gap-4 py-2">
                <Image
                  src={item.title?.includes("Transmission") ? "/catalog/Trasmission_.png" : "/catalog/Engine 1.png"}
                  alt={item.title || "default"}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <div className="product-title text-base text-white font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-300">{item.subtitle}</div>
                  <div className="text-sm text-gray-300">
                    {item.quantity} pc{item.quantity > 1 ? "s" : ""}.
                  </div>
                </div>
                <div className="product-price text-base text-white font-semibold min-w-[60px] text-right">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-row items-start gap-4 py-2">
              <div className="text-white text-center w-full">No items in cart</div>
            </div>
          )}

          <div className="border-t border-white my-3" />
          <div className="flex flex-col gap-1 text-base text-white mt-2">
            <div className="flex justify-between">
              <span>Cart total:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-white">Free Shipping</span>
            </div>
          </div>

          <div className="border-t border-white my-4" />
          <div className="flex justify-between items-center text-lg font-semibold text-white uppercase">
            <span>Total:</span>
            <span id="order-total">${subtotal}</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
            <Link href="/account/trackOrder">
              <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white rounded-md py-2 px-6 w-full md:w-auto transition">
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

      {/* ✅ Popup for duplicate view */}
       
      
           {/* Hidden conversion component */}
      <div className="hidden">
        {orderNumber && cartItems.length > 0 && (
          <GtagConversion
            orderId={orderNumber}
            orderTotal={subtotal}
            items={cartItems.map((item) => ({
              itemId: item.id || "unknown",
              itemName: item.title || "unknown",
              price: item.price || 0,
              quantity: item.quantity || 1,
            }))}
          />
        )}
      </div>
    </div>
    
     
  )
}
