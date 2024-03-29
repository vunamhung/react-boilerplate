import { redirect } from '@tanstack/react-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

http.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${Cookies.get('token')}`;

    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      toast.error(error?.response?.data?.message || error.message);
      throw redirect({ to: '/' });
    }
    return Promise.reject(error);
  },
);

export { http };
