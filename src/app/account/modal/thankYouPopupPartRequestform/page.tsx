'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
      onClose: () => void;
    }

export default function ThankYouPopupPartRequestform({ onClose }: Props) {
  const router = useRouter();

    const handleClose = () => {
        onClose(); // to hide modal
        router.push('/'); // redirect to home
      };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-xl mx-auto bg-[#091b33] rounded-md p-10 flex flex-col items-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-2 text-gray-400 hover:text-white text-4xl"
          aria-label="Close"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2
          className="text-white text-5xl font-bold mb-4 tracking-wide text-center"
          style={{ fontFamily: 'inherit' }}
        >
          Thank you
        </h2>
        <div className="text-white text-center text-lg font-semibold mb-2">
          FOR IMMEDIATE ASSISTANCE CALL{' '}
          <span className="text-[#00a3ff]">(888) 748-0882</span>
        </div>
        <Link
          href="/"
          className="text-sm text-[#b3d4fc] underline mb-8 mt-2"
        >
          Return to the main page
        </Link>
        <div className="w-full flex justify-left items-start mt-auto">
          <Image
            src="/Images/carlogo.png"
            alt="car logo"
            width={350}
            height={80}
            className="object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
