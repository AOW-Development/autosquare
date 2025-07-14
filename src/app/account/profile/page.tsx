"use client";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import FormField from "@/components/FormField";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [fields, setFields] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... registration logic
    router.push('/account/profile');
  };

  return (
    <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row ">
      {/* <div className="md:w-1/4">
        <Sidebar activeKey="Profile" />
      </div> */}
      <div className="flex-1 flex flex-col gap-6">
        <Banner />
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
          <div className="mb-6 md:mb-0">
            <Sidebar activeKey="Profile" />
          </div>
          {/* PROFILE */}
          <div className="bg-[#091B33] shadow-lg p-4 md:p-6 lg:p-8 flex flex-col w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
              PROFILE
            </h1>
            <FormField
              label="Email*"
              type="email"
              placeholder="example@gmail.com"
              value={fields.email}
              onChange={(v) => setFields((f) => ({ ...f, email: v }))}
            />
            <div className="font-bold text-lg mt-6 mb-2">CHANGE PASSWORD</div>
            <FormField
              label="Current Password (leave blank to keep unchanged)"
              type="password"
              placeholder="••••"
              value={fields.currentPassword}
              onChange={(v) => setFields((f) => ({ ...f, currentPassword: v }))}
            />
            <FormField
              label="New Password (leave blank to keep unchanged)"
              type="password"
              placeholder="••••"
              value={fields.newPassword}
              onChange={(v) => setFields((f) => ({ ...f, newPassword: v }))}
            />
            <FormField
              label="Confirm New Password"
              type="password"
              placeholder="••••"
              value={fields.confirmNewPassword}
              onChange={(v) =>
                setFields((f) => ({ ...f, confirmNewPassword: v }))
              }
            />
            <button className="mt-6 border-2 border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-4 font-semibold transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
