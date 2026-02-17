import PaymentInfoPage from "@/components/payment-info";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <PaymentInfoPage />
    </Suspense>
  );
}
