
"use client";

// <<<<<<< HEAD
import { useState, useEffect } from "react";
// =======
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
// >>>>>>> d799a38ba15935a24589f9c41519dde472ec5bd1
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CartItem {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const router = useRouter();
  const [error, setError] = useState("");
  const cartItems = useCartStore((s) => s.items);
  console.log(cartItems);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const isCartEmpty = cartItems.length === 0;

  // useEffect(() => {
  //   const handleStorageChange = (event: StorageEvent) => {
  //     if (event.key === 'cart-storage') {
  //       useCartStore.persist.rehydrate();
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (isCartEmpty) {
      setError("No Products in the cart");
      setTimeout(() => setError(""), 2000);
    } else {
      router.push("/account/checkout");
    }
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-[#FFFFFF] pt-8 pb-22">
      <div className="mx-auto md:mx-10 lg:mx-40 px-4 md:px-6 lg:px-1">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image src="/Images/HouseLine.png" alt="Home" width={24} height={24} />
          </Link>
          <Image src="/Images/arrows.png" alt="Arrow" width={16} height={16} />
          <span className="font-exo2 text-sm">Cart</span>
        </div>

        {/* Title */}
        <h1
          className="font-audiowide text-2xl md:text-3xl lg:text-4xl mb-2 text-left"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          CART
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 w-full">
          <div className="flex-1 h-0.5 bg-[#009AFF] mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#009AFF] rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">1</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-[#009AFF] text-sm">
              Cart
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mx-2 mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">2</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">
              Information
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <span className="text-white font-exo2 font-semibold text-sm">3</span>
            </div>
            <span className="mt-2 font-exo2 font-semibold text-white text-sm">
              Payment
            </span>
          </div>
          <div className="flex-1 h-0.5 bg-white mb-4"></div>
        </div>

        {/* Header Row - Desktop */}
        {!isCartEmpty && (
          <div className="hidden lg:grid grid-cols-12 gap-4 py-2 border-b border-[#FFFFFF] mb-4">
            <div className="col-span-6 font-exo2 font-semibold">PRODUCT</div>
            <div className="col-span-4 font-exo2 font-semibold text-right">
              QUANTITY
            </div>
            <div className="col-span-2 font-exo2 font-semibold text-right pr-10">
              TOTAL
            </div>
          </div>
        )}

        {/* Product Rows */}
        {isCartEmpty ? (
          <div className="text-center text-white font-exo2 text-lg py-16">
            No products in cart.
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border-b border-[#FFFFFF] pb-4">
                {/* Desktop Layout */}
          
            <div className="hidden lg:grid grid-cols-11 gap-4 items-center">
              <div className="col-span-6 flex items-center space-x-4">
                <Image
                  src={item.title.includes("Transmission")?"/catalog/Trasmission_.png":"/catalog/Engine 1.png"}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-exo2 font-semibold">{item.title}</h3>
                  <p className="font-exo2 text-lg text-white">{item.subtitle}</p>
                </div>
              </div>

              {/* Quantity + Price + Close */}
              <div className="col-span-5 flex items-center justify-end space-x-14">
                {/* Quantity selector */}
                <div className="flex items-center space-x-2 border border-[#FFFFFF] rounded-md p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 flex items-center justify-center text-white border border-white rounded-md p-1 hover:bg-gray-600"
                  >
                    –
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-8 text-center bg-transparent text-white border-none focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 flex items-center justify-center text-white border border-white rounded-md p-1 hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <span className="font-exo2 font-semibold text-2xl">
                  ${item.price * item.quantity}
                </span>

                {/* Close button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="hover:text-red-500"
                >
                  <Image
                    src="/Images/closeX.png"
                    alt="Remove"
                    width={18}
                    height={18}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>


                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={item.title.includes("Transmission")?"/catalog/Trasmission_.png":"/catalog/Engine 1.png"}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-exo2 font-semibold">{item.title}</h3>
                          <p className="font-exo2 text-sm text-gray-400">
                            {item.subtitle}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="hover:text-red-500"
                        >
                          <Image
                            src="/Images/closeX.png"
                            alt="Remove"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-2 bg-[#1A2230] rounded-md p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-600 rounded"
                          >
                            –
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value) || 1)
                            }
                            className="w-12 text-center bg-transparent text-white border-none"
                            min="1"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-600 rounded"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-exo2 font-semibold">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4">
          <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="text-lg font-bold font-exo2">TOTAL: ${total}</div>
            <button
              onClick={handleCheckout}
              className="bg-[#009AFF] text-white px-8 py-2 rounded-md hover:bg-blue-600 transition-colors font-exo2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Proceed to Checkout
            </button>
          </div>
          {error && (
            <p className="mt-2 text-red-500 font-exo2 font-semibold text-center lg:text-right">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


