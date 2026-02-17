import PaymentDetailsPage from "@/components/payment-details";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <PaymentDetailsPage />
    </Suspense>
  );
}
