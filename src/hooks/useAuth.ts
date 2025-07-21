"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

export function useAuth(redirectTo = "/account/signIn") {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(redirectTo);
    }
  }, [isLoggedIn, router, redirectTo]);

  return { isLoggedIn, user };
}

export function useRequireAuth(redirectTo = "/account/signIn") {
  const { isLoggedIn, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(redirectTo);
    }
  }, [isLoggedIn, router, redirectTo]);

  return { isLoggedIn, user };
}
