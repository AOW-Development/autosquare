import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type ShippingInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  company?: string;
  country: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  shippingAddressType?: string;
};

type ShippingState = {
  shippingInfo: ShippingInfo | null;
  setShippingInfo: (info: ShippingInfo) => void;
  clearShippingInfo: () => void;
};

export const useShippingStore = create<ShippingState>()(
  persist(
    (set) => ({
      shippingInfo: null,
      setShippingInfo: (info) => set({ shippingInfo: info }),
      clearShippingInfo: () => set({ shippingInfo: null }),
    }),
    {
      name: 'shipping-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);