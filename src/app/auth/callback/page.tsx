'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthStore from '@/store/authStore';

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
      // Get user info from token (you might want to decode JWT here)
      const user = {
        id: '1', // This should come from decoded token
        email: '', // This should come from decoded token
        name: '', // This should come from decoded token
      };
      
      login(user, token);
      router.push('/account/profile');
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
