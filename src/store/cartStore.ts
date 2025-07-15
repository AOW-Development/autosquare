// Reminder: run `npm install zustand` if you haven't already
import { create, StateCreator } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  expiresAt?: number; // timestamp in ms, optional
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "expiresAt">) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  setItemExpiry: (id: string, expiresAt: number) => void;
};

export const useCartStore = create<CartState>(((set: Parameters<StateCreator<CartState>>[0]) => ({
  items: [],
  addItem: (item: Omit<CartItem, "expiresAt">) =>
    set((state: CartState) => ({
      items: [...state.items, { ...item }],
    })),
  removeItem: (id: string) =>
    set((state: CartState) => ({
      items: state.items.filter((i: CartItem) => i.id !== id),
    })),
  clear: () => set((state: CartState) => ({ ...state, items: [] })),
  setItemExpiry: (id: string, expiresAt: number) =>
    set((state: CartState) => ({
      items: state.items.map((i: CartItem) =>
        i.id === id ? { ...i, expiresAt } : i
      ),
    })),
})));
