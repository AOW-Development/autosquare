"use client";
import { useRequireAuth } from "@/hooks/useAuth";
// import Link from "next/link";
// import Image from "next/image";
import FormField from "@/components/FormField";
import { useState } from "react";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProfilePage() {
  const { user } = useRequireAuth();
  const [fields, setFields] = useState({
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
    general?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Validate fields
    const newErrors: typeof errors = {};

    if (fields.newPassword) {
      if (fields.newPassword.length < 6) {
        newErrors.newPassword = "Password must be at least 6 characters.";
      }
      if (!fields.currentPassword) {
        newErrors.currentPassword =
          "Current password is required to set new password.";
      }
      if (fields.newPassword !== fields.confirmNewPassword) {
        newErrors.confirmNewPassword = "Passwords do not match.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Simulate API call to update profile
      const response = await fetch(
        "https://dummy-backend.com/api/profile/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fields),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      // Clear password fields after successful update
      setFields((f) => ({
        ...f,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));

      // Show success message
      setErrors({ general: "Profile updated successfully!" });
    } catch (err) {
      console.log(err);

      setErrors({ general: "Failed to update profile. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // if (!user) {
  //   return null; // Will redirect automatically
  // }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#091B33] text-white flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-6">
          <Banner />
          <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto">
            <div className="mb-6 md:mb-0">
              <Sidebar activeKey="Profile" />
            </div>
            <div className="bg-[#091B33] shadow-lg p-4 md:p-6 lg:p-8 flex flex-col w-full">
              <h1
                className="text-2xl md:text-3xl font-bold text-center mb-4"
                style={{
                  fontFamily: "Audiowide, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                PROFILE
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormField
                  label="Email*"
                  type="email"
                  placeholder="example@gmail.com"
                  value={fields.email}
                  onChange={(v) => setFields((f) => ({ ...f, email: v }))}
                  disabled={loading}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">{errors.email}</span>
                )}

                <div className="font-bold text-lg mt-6 mb-2">
                  CHANGE PASSWORD
                </div>

                <FormField
                  label="Current Password (leave blank to keep unchanged)"
                  type="password"
                  placeholder="••••"
                  value={fields.currentPassword}
                  onChange={(v) =>
                    setFields((f) => ({ ...f, currentPassword: v }))
                  }
                  disabled={loading}
                />
                {errors.currentPassword && (
                  <span className="text-red-400 text-xs">
                    {errors.currentPassword}
                  </span>
                )}

                <FormField
                  label="New Password (leave blank to keep unchanged)"
                  type="password"
                  placeholder="••••"
                  value={fields.newPassword}
                  onChange={(v) => setFields((f) => ({ ...f, newPassword: v }))}
                  disabled={loading}
                />
                {errors.newPassword && (
                  <span className="text-red-400 text-xs">
                    {errors.newPassword}
                  </span>
                )}

                <FormField
                  label="Confirm New Password"
                  type="password"
                  placeholder="••••"
                  value={fields.confirmNewPassword}
                  onChange={(v) =>
                    setFields((f) => ({ ...f, confirmNewPassword: v }))
                  }
                  disabled={loading}
                />
                {errors.confirmNewPassword && (
                  <span className="text-red-400 text-xs">
                    {errors.confirmNewPassword}
                  </span>
                )}

                {errors.general && (
                  <div
                    className={`text-sm ${
                      errors.general.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {errors.general}
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-6 border-2 border-blue-600 text-blue-100 hover:bg-blue-600 rounded-lg py-2 px-4 font-semibold transition-colors w-full"
                  disabled={loading}
                >
                  {loading ? "Saving Changes..." : "Save Changes"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
