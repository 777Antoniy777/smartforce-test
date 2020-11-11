import axios from "axios";

const BASE_URL = `https://api.github.com`;
// 777Antoniy777

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  // withCredentials: true,
});

export default axiosInstance;
