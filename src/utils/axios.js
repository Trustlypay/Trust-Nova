import axios from "axios";

export const BASE_API_URL = "https://onestopfashionhub.com/api/";

const Axios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }
  return config;
});

Axios.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export const AxiosX = Axios;
