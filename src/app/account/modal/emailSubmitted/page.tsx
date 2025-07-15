"use client"
import EmailSubmittedModal from '@/components/EmailSubmittedModal';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <EmailSubmittedModal onClose={() => router.back()} />
  );
}  