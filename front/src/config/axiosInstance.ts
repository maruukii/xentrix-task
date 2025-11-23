import axios from 'axios';
import { getAccessToken,setAccessToken } from './tokenStore';
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // if (error.response?.status === 401) {
    //   if (window.location.pathname !== "/auth") {
    //     window.location.href = "/auth?tab=signin";
    //   }
    //   return Promise.reject(error);
    // }

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResult = await axiosInstance.get("/auth/refresh");
        setAccessToken(refreshResult.data.data.accessToken);
        originalRequest.headers.Authorization =
          "Bearer " + refreshResult.data.data.accessToken;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        window.location.href = "/auth?tab=signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const axiosImage = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosImage.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosImage.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResult = await axiosInstance.get("/auth/refresh");
        const newToken = refreshResult.data.data.accessToken;

        setAccessToken(newToken);
        originalRequest.headers.Authorization = "Bearer " + newToken;

        return axiosImage(originalRequest);

      } catch (refreshError) {
        window.location.href = "/auth?tab=signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
