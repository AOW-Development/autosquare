import { create } from "zustand";
interface BillingInfo {
  firstName: string;
  lastName: string;
  phone: string;
  company:string;
  country: string;
  address: string;
  apartment?: string; // Optional
  city: string;
  state: string;
  zipCode: string;
}
interface BillingState {
  billingInfo: BillingInfo | null;
  setBillingInfo: (info: BillingInfo) => void;
  clearBillingInfo: () => void;
}
const useBillingStore = create<BillingState>((set) => ({
  billingInfo: null,

  setBillingInfo: (info) =>
    set({
      billingInfo: info,
    }),

  clearBillingInfo: () =>
    set({
      billingInfo: null,
    }),
}));
export default useBillingStore;
