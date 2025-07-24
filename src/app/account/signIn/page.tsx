"use client";
import FormField from "@/components/FormField";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";
import { auth } from "@/utils/api";

export default function SignInPage() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: { email?: string; password?: string; general?: string } =
      {};

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

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      const { data } = await auth.login({
        email: fields.email,
        password: fields.password,
      });

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

      if (data.requiresOTP) {
        router.push("/account/verifyOtp");
      } else {
        router.push("/account/profile");
      }
    } catch (error) {
      setErrors({
        general: "Invalid email or password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    // Store current URL as redirect URL
    localStorage.setItem('redirectUrl', window.location.pathname);
    // Redirect to backend Google OAuth endpoint
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
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
            SIGN IN
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid w-full gap-2 md:w-[75%] items-center md:mx-40"
          >
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
            <div className="flex justify-end mt-2 mb-4">
              <Link
                href="/account/forgotPassword"
                className="text-blue-400 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            {errors.general && (
              <span className="text-red-400 text-xs mb-2">
                {errors.general}
              </span>
            )}
            <button
              type="submit"
              className="w-full rounded-lg py-2 bg-blue-500 hover:bg-blue-600 text-white text-base transition-colors mt-2 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>
          <div className="flex flex-col w-full gap-2 md:w-[75%] items-center md:mx-40">
            <span className="text-gray-400 text-sm">or sign in with</span>
            <button
              onClick={handleGoogleLogin}
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
              Don&apos;t have an account?{" "}
              <Link
                href="/account/signUp"
                className="text-blue-400 hover:text-blue-600 font-medium"
              >
                Register now
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
