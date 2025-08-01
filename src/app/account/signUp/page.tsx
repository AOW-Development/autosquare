"use client";
import FormField from "@/components/FormField";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { auth } from "@/utils/api";
export default function RegistrationPage() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirm?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirm?: string;
      general?: string;
    } = {};

    if (!fields.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!fields.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!fields.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(fields.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!fields.password) {
      newErrors.password = "Password is required.";
    } else if (fields.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!fields.confirm) {
      newErrors.confirm = "Please confirm your password.";
    } else if (fields.confirm !== fields.password) {
      newErrors.confirm = "Passwords do not match.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      const { data } = await auth.register({
        email: fields.email,
        password: fields.password,
        full_name: `${fields.firstName} ${fields.lastName}`.trim(), // Using first and last name from form
      });

      // Store user data temporarily (they'll need to verify OTP first)
      localStorage.setItem('tempEmail', fields.email);

      router.push("/account/verifyOtp");
    } catch (error) {
      console.log(error);

      setErrors({
        general: "Registration failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-white  pt-8 pb-22">
      <div className=" mx-auto md:mx-40 px-4 md:px-6 lg:px-1">
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
        <main className="bg-[#091B33]  p-4 md:p-6 lg:p-8 w-full flex flex-col gap-6">
          <h1
            className="text-2xl md:text-3xl font-bold text-center mb-4"
            style={{
              fontFamily: "Audiowide, sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            REGISTRATION
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid w-full gap-2 md:w-[75%] items-center md:mx-40"
          >
            <FormField
              label="First Name*"
              type="text"
              placeholder="First Name"
              value={fields.firstName}
              onChange={(v) => setFields((f) => ({ ...f, firstName: v }))}
              disabled={loading}
            />
            {errors.firstName && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {errors.firstName}
              </span>
            )}
            <FormField
              label="Last Name*"
              type="text"
              placeholder="Last Name"
              value={fields.lastName}
              onChange={(v) => setFields((f) => ({ ...f, lastName: v }))}
              disabled={loading}
            />
            {errors.lastName && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {errors.lastName}
              </span>
            )}
            <FormField
              label="Email*"
              type="email"
              placeholder="example@gmail.com"
              value={fields.email}
              onChange={(v) => setFields((f) => ({ ...f, email: v }))}
              disabled={loading}
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {errors.email}
              </span>
            )}
            <FormField
              label="Password*"
              type="password"
              placeholder="••••"
              value={fields.password}
              onChange={(v) => setFields((f) => ({ ...f, password: v }))}
              disabled={loading}
            />
            {errors.password && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {errors.password}
              </span>
            )}
            <FormField
              label="Confirm password*"
              type="password"
              placeholder="••••"
              value={fields.confirm}
              onChange={(v) => setFields((f) => ({ ...f, confirm: v }))}
              disabled={loading}
            />
            {errors.confirm && (
              <span className="text-red-400 text-xs mt-[-8px] mb-1">
                {errors.confirm}
              </span>
            )}
            {/* General error if needed */}
            {errors.general && (
              <span className="text-red-400 text-xs mb-2">
                {errors.general}
              </span>
            )}
            <button
              type="submit"
              className="w-full rounded-lg py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-base transition-colors mt-6"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register now"}
            </button>
            <span className="text-gray-400 text-sm flex justify-center items-center pt-2">
              or sign in with
            </span>
            <button
              onClick={() => {
                const API_BASE = process.env.NEXT_PUBLIC_API_URL;
                window.location.href = `${API_BASE}/auth/google`;
              }}
              className="flex cursor-pointer items-center gap-2 w-full justify-center rounded-lg py-2 bg-white hover:bg-gray-100 text-gray-800 text-base font-semibold transition-colors border border-gray-200 mt-2"
              disabled={loading}
            >
              <Image
                src="/account/google.png"
                alt="Google"
                width={24}
                height={24}
              />
              <span>{loading ? "Signing in..." : "Sign in with Google"}</span>
            </button>
            <div className="mt-4 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/account/signIn"
                className="text-blue-400 hover:text-blue-600 font-medium "
              >
                Sign in
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
