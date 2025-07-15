"use client"
import { useRouter } from 'next/navigation';
import TicketSubmittedModal from '@/app/account/modal/ticketSubmitted/page';

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Out of Stock</h1>
        <p className="mb-6 text-gray-700">Sorry, this product is currently unavailable.</p>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
