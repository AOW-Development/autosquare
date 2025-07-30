'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthStore from '@/store/authStore';

// Simple JWT decode function (for client-side)
function decodeJWT(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      console.error('Authentication error:', error);
      router.push('/account/signIn?error=' + error);
      return;
    }

    if (token) {
      // Decode JWT to get user info
      const decodedToken = decodeJWT(token);
      
      if (decodedToken) {
        const user = {
          id: decodedToken.userId.toString(),
          email: decodedToken.email,
          name: '', // Will be fetched from profile API
          firstName: '', // Will be fetched from profile API
          lastName: '', // Will be fetched from profile API
        };
        
        login(user, token);
        router.push('/account/profile');
      } else {
        console.error('Invalid token');
        router.push('/account/signIn?error=invalid_token');
      }
    } else {
      router.push('/account/signIn');
    }
  }, [searchParams, login, router]);

  return (
    <div className="min-h-screen bg-[#091B33] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authenticating...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}
