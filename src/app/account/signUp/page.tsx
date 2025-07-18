"use client";
import FormField from "@/components/FormField";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegistrationPage() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... registration logic here
    router.push("/account/profile");
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
          <span className="font-exo2">Account</span>
        </div>
        <main className="bg-[#091B33] rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 w-full flex flex-col gap-6">
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
            className="grid w-full md:w-[75%] items-center md:mx-40"
          >
            <FormField
              label="Email*"
              type="email"
              placeholder="example@gmail.com"
              value={fields.email}
              onChange={(v) => setFields((f) => ({ ...f, email: v }))}
            />
            <FormField
              label="Password*"
              type="password"
              placeholder="••••"
              value={fields.password}
              onChange={(v) => setFields((f) => ({ ...f, password: v }))}
            />
            <FormField
              label="Confirm password*"
              type="password"
              placeholder="••••"
              value={fields.confirm}
              onChange={(v) => setFields((f) => ({ ...f, confirm: v }))}
            />
            <button
              type="submit"
              className="w-full rounded-lg py-2 bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold transition-colors mt-6"
            >
              Register now
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
