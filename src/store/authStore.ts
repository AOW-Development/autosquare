import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
   [key: string]: string | number | boolean;
  // [key: string]: string | number | boolean; // Allow additional properties
// >>>>>>> 45fea3993186afa428764c11a8e04c60ee5b19b1
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setToken: (token: string) => void;
}

// <<<<<<< HEAD
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
// // =======
// const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   token: null,
//   isLoggedIn: false,

  login: (user, token) =>
    set({
      user,
      token,
      isLoggedIn: true,
      // firstName: user.firstName, // Assuming user has a name field
      // lastName: user.lastName, // Assuming user has a name field
    }),
  logout: () =>
    set({
      user: null,
      token: null,
      isLoggedIn: false,
      // firstName: "",
      // lastName: "",
    }),
// >>>>>>> 45fea3993186afa428764c11a8e04c60ee5b19b1

      // login: (user, token) => {
      //   localStorage.setItem('token', token);
      //   set({
      //     user,
      //     token,
      //     isLoggedIn: true,
      //   });
      // },
      // logout: () => {
      //   localStorage.removeItem('token');
      //   localStorage.removeItem('tempEmail');
      //   set({
      //     user: null,
      //     token: null,
      //     isLoggedIn: false,
      //   });
      // },
      setToken: (token) => set({ token }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);

export default useAuthStore;
