// Reminder: run `npm install zustand` if you haven't already
import { create, StateCreator } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  quantity: number;
  expiresAt?: number; // timestamp in ms, optional
  price:number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "expiresAt">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  setItemExpiry: (id: string, expiresAt: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.id !== id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
      };
    }),
  clear: () => set((state) => ({ ...state, items: [] })),
  setItemExpiry: (id, expiresAt) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, expiresAt } : i
      ),
    })),
}));
