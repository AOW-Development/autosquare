import { create } from "zustand";
interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  [key: string]: string | number | boolean; // Allow additional properties
}
interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,

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

  setToken: (token) => set({ token }),
}));

export default useAuthStore;
