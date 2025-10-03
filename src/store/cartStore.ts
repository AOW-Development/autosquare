
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  image: string;
  quantity: number;
  expiresAt?: number;
  price: number;
  miles:string;
  specification:string;
  
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'expiresAt'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  setItemExpiry: (id: string, expiresAt: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          let imgUrl=""
          if (existing) {
            imgUrl = existing.title.includes("Transmission")
                ? "/catalog/Engine 1.png"
              
                : "/catalog/Trasmission_.png";
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i,image:imgUrl, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...item,image:imgUrl, quantity: 1 }] };
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
    }),
    {
      name: 'cart-storage', // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: (state) => {
        console.log('Hydration finished.');
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          }
        };
      },
    }
  )
);

