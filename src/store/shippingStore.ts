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
  email: string;
};

type ShippingState = {
  shippingInfo: ShippingInfo ;
  setShippingInfo: (info: ShippingInfo) => void;
  clearShippingInfo: () => void;
};

export const useShippingStore = create<ShippingState>()(
  persist(
    (set) => ({
      shippingInfo: {
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        country: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zipCode: "",
        shippingAddressType: "",
        email:"",
      },
      setShippingInfo: (info) => set({ shippingInfo: info }),
      clearShippingInfo: () => set({ shippingInfo: undefined }),
    }),
    {
      name: 'shipping-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);