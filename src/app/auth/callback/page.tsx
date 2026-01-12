'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthStore from '@/store/authStore';

// Simple JWT decode
function decodeJWT(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const login = useAuthStore((state) => state.login);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      router.push('/account/signIn?error=' + error);
      return;
    }

    if (!token) {
      router.push('/account/signIn');
      return;
    }

    if (!hasHydrated || isProcessing) return;

    setIsProcessing(true); // Avoid re-trigger

    const decodedToken = decodeJWT(token);
    if (decodedToken) {
      const user = {
        id: decodedToken.userId.toString(),
        email: decodedToken.email,
        name: '',
        firstName: '',
        lastName: '',
      };

      login(user, token);

      const redirectPath = sessionStorage.getItem('redirectAfterLogin');
      sessionStorage.removeItem('redirectAfterLogin');

      if (redirectPath === '/account/thankYou') {
        router.push('/account/thankYou');
      } else {
        router.push('/account/profile');
      }
    } else {
      router.push('/account/signIn?error=invalid_token');
    }

  }, [searchParams, router, login, hasHydrated, isProcessing]);

  return (
    <div className="min-h-screen bg-[#091B33] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authenticating...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#091B33] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
