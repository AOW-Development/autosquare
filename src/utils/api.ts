import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL , // || 'http://localhost:3001/api'
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add interceptor for auth token
api.interceptors.request.use((config) => {
  // Get token from Zustand persist storage instead of direct localStorage
  const authStorage = localStorage.getItem('auth-storage');
  if (authStorage) {
    try {
      const parsedAuth = JSON.parse(authStorage);
      const token = parsedAuth?.state?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error parsing auth storage:', error);
    }
  }
  return config;
});

// Auth related API calls
export const auth = {
  login: (credentials: { email: string; password: string; otp?: string }) =>
    api.post('/auth/login', credentials),
  register: (data: { email: string; password: string; full_name: string }) =>
    api.post('/auth/register', data),
  verifyOTP: (data: { email: string; otp: string }) =>
    api.post('/auth/verify-otp', data),
  googleAuth: (token: string) =>
    api.post('/auth/google', { token })
};

export const getGroupedProducts = (params: { make: string; model: string; year: string; part: string }) => {
  return api.get('/products/v2/grouped-with-subparts', { params });
};

// Add order-related API calls
export const orders = {
  create: (orderData: any) => 
    api.post('/orders', orderData)
};

export default api;