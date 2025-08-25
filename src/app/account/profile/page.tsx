"use client";
// import Link from "next/link";
// import Image from "next/image";
import FormField from "@/components/FormField";
import { use, useState, useEffect, useCallback } from "react";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import useAuthStore from "@/store/authStore";

export default function ProfilePage() {
  const { token, user } = useAuthStore();
  
  // Remove the early return - let ProtectedRoute handle authentication
  // if (!isLoggedIn) return null; // This was causing the hook error!
  
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profileLoaded, setProfileLoaded] = useState(false);

  // Consolidated useEffect to handle profile data
  useEffect(() => {
    const initializeProfile = async () => {
      if (!token) return;
      
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${API_BASE}/auth/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const profile = await response.json();
          console.log('Profile data received:', profile);
          // Use API data if available
          setFields(prev => ({
            ...prev,
            firstName: profile.full_name?.split(" ")[0] || "",
            lastName: profile.full_name?.split(" ").slice(1).join(" ") || "",
            email: profile.email || "",
          }));
        } else {
          console.error('Profile API failed:', response.status, response.statusText);
          // Fallback to user data from auth store if API fails
          setFields(prev => ({
            ...prev,
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
          }));
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        // Fallback to user data from auth store
        setFields(prev => ({
          ...prev,
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
          email: user?.email || "",
        }));
      } finally {
        setProfileLoaded(true);
      }
    };

    // Only initialize once when component mounts and token is available
    if (token && !profileLoaded) {
      initializeProfile();
    }
  }, [token, user, profileLoaded]);

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
      const API_BASE = process.env.NEXT_PUBLIC_API_URL;
      // Simulate API call to update profile
      const response = await fetch(
        `${API_BASE}/auth/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          // no body for GET
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
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-6 mt-4 gap-4">
          
          {/* Sidebar */}
          <div className="mb-4 md:mb-6 w-full md:w-1/4">
            <Sidebar activeKey="Profile" />
          </div>

          {/* Main Profile Section */}
          <div className="bg-[#091B33] shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col w-full">
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4"
              style={{
                fontFamily: "Audiowide, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              PROFILE
            </h1>

              {/* <form onSubmit={handleSubmit} className="space-y-4">
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
              </form> */}
               <div className="flex flex-col items-center justify-center gap-4 bg-[#091627] rounded-lg p-4 sm:p-5 md:p-6 mt-4 shadow-md">
              
              {/* First Name */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full max-w-xs sm:max-w-md">
                <span className="font-semibold text-blue-400 sm:w-32 sm:text-right text-left w-full">
                  First Name:
                </span>
                <span className="text-white bg-[#0a2342] px-3 py-2 sm:py-3 rounded w-full">
                  {fields.firstName}
                </span>
              </div>

              {/* Last Name */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full max-w-xs sm:max-w-md">
                <span className="font-semibold text-blue-400 sm:w-32 sm:text-right text-left w-full">
                  Last Name:
                </span>
                <span className="text-white bg-[#0a2342] px-3 py-2 sm:py-3 rounded w-full">
                  {fields.lastName}
                </span>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full max-w-xs sm:max-w-md">
                <span className="font-semibold text-blue-400 sm:w-32 sm:text-right text-left w-full">
                  Email:
                </span>
                <span className="text-white bg-[#0a2342] px-3 py-2 rounded w-full">
                  {fields.email}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </ProtectedRoute>
  );
}
