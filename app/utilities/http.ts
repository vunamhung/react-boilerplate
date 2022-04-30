import axios from 'axios';
import nprogress from 'nprogress';
import { useToken } from '~/hooks';

const http = axios.create({ baseURL: process.env.API_BASE_URL });

export const setAuthorization = (token: string | undefined) => (http.defaults.headers.common.Authorization = `Bearer ${token}`);

http.interceptors.request.use(
  (config) => {
    nprogress.start();
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response;
  },
  async (error) => {
    nprogress.done();
    const originalRequest = error.config;
    const [token, setToken] = useToken();

    if (token && error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await http('/auth');

        if (data?.token) {
          // @ts-ignore
          setToken(data.token);
          setAuthorization(data.token);
          return http(originalRequest);
        }
      } catch (e: any) {}
    }
    return Promise.reject(error);
  },
);

export { http };
