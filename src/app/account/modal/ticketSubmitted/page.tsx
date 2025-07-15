"use client"
import TicketSubmittedModal from '@/components/TicketSubmittedModal';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <TicketSubmittedModal onClose={() => router.back()} />
  );
}  
  