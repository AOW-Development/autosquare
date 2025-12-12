import { create } from "zustand";

interface SkuState {
  sku: string | null;
  setSku: (sku: string) => void;
}

export const useSkuStore = create<SkuState>((set) => ({
  sku: null,
  setSku: (sku) => set({ sku }),
}));
