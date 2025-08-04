import { create } from "zustand";

export type PaymentMethod = "card" | "paypal" | "apple" | "google";

export type CardData = {
  cardNumber: string;
  cardholderName: string;
  expirationDate: string;
  securityCode: string;
};

export type BillingData = {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
};

export type PaymentInfo = {
  paymentMethod: PaymentMethod;
  cardData: CardData;
  billingData: BillingData;
  billingAddressExpanded: boolean;
};

type PaymentState = {
  paymentInfo: PaymentInfo;
  setPaymentMethod: (method: PaymentMethod) => void;
  setCardData: (data: Partial<CardData>) => void;
  setBillingData: (data: Partial<BillingData>) => void;
  setBillingAddressExpanded: (expanded: boolean) => void;
  updateCardField: (field: keyof CardData, value: string) => void;
  updateBillingField: (field: keyof BillingData, value: string) => void;
  clearPaymentInfo: () => void;
  isCardDataValid: () => boolean;
  isBillingDataValid: () => boolean;
};

const initialPaymentInfo: PaymentInfo = {
  paymentMethod: "card",
  cardData: {
    cardNumber: "",
    cardholderName: "",
    expirationDate: "",
    securityCode: "",
  },
  billingData: {
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  },
  billingAddressExpanded: false,
};

export const usePaymentStore = create<PaymentState>((set, get) => ({
  paymentInfo: initialPaymentInfo,

  setPaymentMethod: (method) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        paymentMethod: method,
      },
    })),

  setCardData: (data) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        cardData: {
          ...state.paymentInfo.cardData,
          ...data,
        },
      },
    })),

  setBillingData: (data) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        billingData: {
          ...state.paymentInfo.billingData,
          ...data,
        },
      },
    })),

  setBillingAddressExpanded: (expanded) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        billingAddressExpanded: expanded,
      },
    })),

  updateCardField: (field, value) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        cardData: {
          ...state.paymentInfo.cardData,
          [field]: value,
        },
      },
    })),

  updateBillingField: (field, value) =>
    set((state) => ({
      paymentInfo: {
        ...state.paymentInfo,
        billingData: {
          ...state.paymentInfo.billingData,
          [field]: value,
        },
      },
    })),

  clearPaymentInfo: () => set({ paymentInfo: initialPaymentInfo }),

  isCardDataValid: () => {
    const { cardData } = get().paymentInfo;
    return (
      cardData.cardNumber.length > 0 &&
      cardData.cardholderName.length > 0 &&
      cardData.expirationDate.length > 0 &&
      cardData.securityCode.length > 0
    );
  },

  isBillingDataValid: () => {
    const { billingData } = get().paymentInfo;
    return (
      billingData.firstName.length > 0 &&
      billingData.lastName.length > 0 &&
      billingData.phone.length > 0 &&
      billingData.country.length > 0 &&
      billingData.address.length > 0 &&
      billingData.city.length > 0 &&
      billingData.state.length > 0 &&
      billingData.zipCode.length > 0
    );
  },
}));

export default usePaymentStore;