import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  [key: string]: string | number | boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  hasHydrated: boolean; 
  setHasHydrated: (value: boolean) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      hasHydrated: false, 
      setHasHydrated: (value) => set({ hasHydrated: value }), 


      login: (user, token) => {
        // Also set in localStorage for backward compatibility
        localStorage.setItem('token', token);
        set({
          user,
          token,
          isLoggedIn: true,
        });
      },
      
      logout: () => {
        // Clean up localStorage
        if (typeof window !== 'undefined'){
        localStorage.removeItem('token');
        localStorage.removeItem('tempEmail');
        // sessionStorage.removeItem('redirectAfterLogin')
        set({
          user: null,
          token: null,
          isLoggedIn: false,
        });
      }
    },
      
      setToken: (token) => {
         if (typeof window !== 'undefined'){
        localStorage.setItem('token', token);
        set({ token });
         }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true); 
      },
    }
  )
);

export default useAuthStore;
