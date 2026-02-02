"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoggedIn,hasHydrated } = useAuthStore();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  

  useEffect(() => {
   
    if (!hasHydrated) return;
    if (!isLoggedIn && !isRedirecting) {
      setIsRedirecting(true);
      // Use setTimeout to avoid the hook error during logout
      sessionStorage.setItem("previousPath", window.location.pathname);
      setTimeout(() => {
        router.push("/account/sign-in");
      }, 0);
    }
  }, [isLoggedIn, router, isRedirecting, hasHydrated]);
   if (!hasHydrated) {
    return (
      <div className="min-h-screen bg-[#091B33] text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Don't show loading state if we're in the process of redirecting
  if (!isLoggedIn && !isRedirecting) {
    return (
      <div className="min-h-screen bg-[#091B33] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}