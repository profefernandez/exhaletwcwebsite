import axios from 'axios';
import type { ContactFormData, ApiResponse } from '../types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8055',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

export const submitContactForm = async (
  formData: ContactFormData
): Promise<ApiResponse<{ id: string }>> => {
  const response = await api.post('/items/contact_submissions', formData);
  return response.data;
};

export default api;
