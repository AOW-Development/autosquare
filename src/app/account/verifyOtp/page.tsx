"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { auth } from "@/utils/api";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const { login } = useAuthStore();

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    // Move to previous input if deleted
    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      setOtp(paste.split(""));
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (otp.some((digit) => digit === "")) {
      setError("Please enter all 6 digits.");
      return;
    }

    const email = localStorage.getItem('tempEmail');
    if (!email) {
      setError("Session expired. Please try again.");
      return;
    }

    try {
      const { data } = await auth.verifyOTP({
        email,
        otp: otp.join('')
      });

      setSubmitted(true);
      localStorage.removeItem('tempEmail');

      // If verification successful, log the user in
      if (data.token) {
        login(
          {
              id: data.user.id,
    email: data.user.email,
    name: data.user.full_name || "",
    firstName: data.user.first_name || "",
    lastName: data.user.last_name || "",
          },
          data.token
        );
        redirect("/account/profile");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Verification failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-white pt-8 pb-22">
      <div className="mx-auto md:mx-40 px-4 md:px-6 lg:px-1">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#FFFFFF] mb-6 text-left">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Images/HouseLine.png"
              alt="Home"
              width={24}
              height={24}
            />
          </Link>
          <Image src="/Images/arrows.png" alt="Arrow" width={16} height={16} />
          <span className="font-exo2">Account</span>
        </div>
        <main className="bg-[#091B33] p-4 md:p-6 lg:p-8 w-full flex flex-col gap-6">
          <h1
            className="text-2xl md:text-3xl font-bold text-center mb-4"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            VERIFY OTP
          </h1>
          {submitted ? (
            <div className="text-center text-green-400 text-base mt-6">
              OTP verified successfully!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4"
            >
              <label className="text-sm mb-1 text-center">
                Enter the 6-digit code sent to your email
              </label>
              <div className="flex gap-2 justify-center mb-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => {
                      if (el) inputRefs.current[idx] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-10 h-10 md:w-12 md:h-12 text-center text-xl rounded-lg bg-[#091627] border border-white/10 focus:outline-none focus:border-blue-400"
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onPaste={handlePaste}
                  />
                ))}
              </div>
              {error && (
                <span className="text-red-400 text-xs mt-[-8px] mb-1">
                  {error}
                </span>
              )}
              <button
                type="submit"
                // onClick={() => {
                //   login(
                //     { id: "1", email: "s@gmail.com", name: "S" },
                //     "11223344"
                //   );
                //   setTimeout(() => {
                //     if (error) {
                //       redirect("/account/profile");
                //     }
                //   }, 2000);
                // }}
                className="w-full md:w-[50%] rounded-lg py-2 bg-blue-500 hover:bg-blue-600 text-white text-base transition-colors mt-2 cursor-pointer"
              >
                Verify OTP
              </button>
              <div className="mt-2 text-sm text-gray-400 text-center">
                Didn&apos;t receive the code?{" "}
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-600 font-medium underline"
                  onClick={() =>
                    setError("Resend functionality not implemented.")
                  }
                >
                  Resend
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
