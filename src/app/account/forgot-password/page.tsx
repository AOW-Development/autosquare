"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  //   const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      //   setSubmitted(true);
      router.push("/account/verifyOtp"); // Redirect to verifyOtp page
    }, 1200);
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
            FORGOT PASSWORD
          </h1>
          {/* {submitted ? (
            <div className="text-center text-green-400 text-base mt-6">
              If an account exists for{" "}
              <span className="font-semibold">{email}</span>, you&apos;ll
              receive an email with instructions to reset your password.
            </div>
          ) : ( */}
          <form
            onSubmit={handleSubmit}
            className="grid w-full gap-2 md:w-[75%] items-center md:mx-40"
          >
            <label className="text-sm mb-1" htmlFor="email">
              Enter your email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg py-2 px-4 bg-[#091627] text-white border border-white/10 focus:outline-none"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            {error && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {error}
              </span>
            )}
            <button
              type="submit"
              className="w-full rounded-lg py-2 bg-blue-500 hover:bg-blue-600 text-white text-base transition-colors mt-2 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
          {/* )} */}
          <div className="flex flex-col w-full gap-2 md:w-[75%] items-center md:mx-40">
            <div className="mt-4 text-center text-sm text-gray-400">
              Remember your password?{" "}
              <Link
                href="/account/signIn"
                className="text-blue-400 hover:text-blue-600 font-medium"
              >
                Sign in
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
