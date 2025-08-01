"use client";
import Image from "next/image";
import Link from "next/link";
import useAuthStore from "@/store/authStore";
import useBillingStore from "@/store/billingStore"; // <-- Import billing store
import { useState, useEffect } from "react";
import { State } from "country-state-city"; 


import { useRouter } from 'next/navigation';




export default function PaymentInfoPage() {
  const { isLoggedIn } = useAuthStore();
  const { billingInfo, setBillingInfo } = useBillingStore();
  const [isAccepted, setIsAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (!isAccepted) {
      setShowError(true);
      return;
    }
    setShowError(false);
    router.push('/account/payMethod');
  };

  // Local state for form fields, initialized from billingInfo
  const [fields, setFields] = useState(
    billingInfo || {
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
    }
  );

  useEffect(() => {
    if (billingInfo) {
      setFields({
        ...fields,
        ...billingInfo,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billingInfo]);

  // Handle field changes
  const handleChange = (field: string, value: string) => {
    if (field === "country") {
      setFields((prev) => ({
        ...prev,
        country: value,
        state: "", // reset state when country changes
      }));
    } else {
      setFields((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };


  // Save billing info to store
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setBillingInfo(fields);
  };

  
  const [states, setStates] = useState<{ name: string; isoCode: string }[]>([]);


useEffect(() => {
  if (fields.country) {
    const fetchedStates = State.getStatesOfCountry(fields.country);
    console.log("Fetched States:", fetchedStates);
    setStates(fetchedStates || []);
  } else {
    setStates([]);
  }
}, [fields.country]);



   
  return (
    <div className="min-h-screen bg-[#091B33] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
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
        <h1
          className="font-audiowide text-white text-wrap text-xl md:text-4xl mt-4 mb-4 sm:mt-6 sm:mb-6 md:tracking-wide uppercase text-left w-full"
          style={{
            fontFamily: "Audiowide, sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          Make a Payment
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <form className="flex-1 bg-transparent" onSubmit={handleSave}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-sm uppercase tracking-wide">
                Shipping Details
              </span>
              {!isLoggedIn && (
                <span className="text-sm text-white/60">
                  Have an account?{" "}
                  <Link
                    href="/account/signIn"
                    className="text-blue-400 underline"
                  >
                    Log in
                  </Link>
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs mb-1">First Name*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-xs mb-1">Last Name*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                />
              </div>
              {/* <div>
                <label className="block text-xs mb-1">Email*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div> */}
              <div>
                <label className="block text-xs mb-1">Phone*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>
              {/* <div className="md:col-span-2">
                <label className="block text-xs mb-1">Company</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder="Company name (optional)"
                />
              </div> */}
              <div className="md:col-span-2">
                <label className="block text-xs mb-1">Country*</label>
                <select
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  required
                >
                  <option value="Choose country…">Choose Country…</option>
                 <option value="US">United States</option>
                 <option value="CA">Canada</option>
                  
                </select>
              </div>
              <div className="md:col-span-2 flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Street address*</label>
                  <input
                    className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                    value={fields.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs mb-1">&nbsp;</label>
                  <input
                    className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                    value={fields.apartment}
                    onChange={(e) => handleChange("apartment", e.target.value)}
                    placeholder="Apartment, etc. (optional)"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs mb-1">City*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                 <label className="block text-xs mb-1">State*</label>
                  <select
                    className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                    value={fields.state}
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
                <label className="block text-xs mb-1">ZIP Code*</label>
                <input
                  className="w-full bg-[#091627] rounded-lg px-4 py-2 text-white border border-white/10 focus:outline-none"
                  value={fields.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-xs mt-4"
            >
              Save Billing Info
            </button>
          </form>
          {/* Order Summary */}
          <aside className="w-full md:w-[350px] flex-shrink-0">
            <div className="bg-[#091627] rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Products in Order
              </h3>
              <div className="flex flex-col gap-4 mb-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Image
                      src="/Images/photo-2.png"
                      alt="Product"
                      width={56}
                      height={56}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">
                        Title name of part
                      </div>
                      <div className="text-xs text-white/70">
                        Ford Bronco 1991
                      </div>
                      {i === 1 && (
                        <>
                          <div className="text-xs text-white/70">4.9L</div>
                          <div className="text-xs text-white/70">
                            from 2/3/91 (AIR inner manifold)
                          </div>
                          <div className="text-xs text-white/70 mb-1">
                            E4OD transmission
                          </div>
                        </>
                      )}
                      <div className="text-xs text-white/70">1 pc.</div>
                    </div>
                    <div className="font-bold text-sm mt-1">$800</div>
                  </div>
                ))}
              </div>
             
              <div className="flex justify-between text-sm mb-1">
                <span>Cart total:</span>
                <span>$1600</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span>Shipping:</span>
                <span>Free Shipping</span>
              </div>
              <div className="flex justify-between text-base font-bold mb-4 mt-2">
                <span>TOTAL:</span>
                <span className="text-white">$1600</span>
              </div>
             <div className="flex items-start gap-2 mb-1">
            <input
              type="checkbox"
              id="accept"
              checked={isAccepted}
              onChange={(e) => {
                setIsAccepted(e.target.checked);
                if (e.target.checked) setShowError(false);
              }}
              className="mt-1 accent-blue-600"
            />
            <label htmlFor="accept" className="text-xs text-white/70 select-none">
              I have Read and Accept the{" "}
              <a href="#" className="text-blue-400 underline">terms and conditions</a>, return policy and the{" "}
              <a href="#" className="text-blue-400 underline">Privacy Policy</a> of autosquare.us *
            </label>
          </div>

          {showError && (
            <p className="text-red-500 text-xs mb-3">You must accept the terms and conditions to continue.</p>
          )}

          <button
            onClick={handleContinue}
            disabled={!isAccepted}
            className={`w-full cursor-pointer font-semibold py-3 rounded-lg text-base transition-colors ${
              isAccepted
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-500 text-white cursor-not-allowed'
            }`}
          >
            Continue to payment
          </button>
        </div>
          </aside>
        </div>
      </div>
    </div>
    // </ProtectedRoute>
  );
}
