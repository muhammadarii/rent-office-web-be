import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_API_KEY;
const BASE_URL = import.meta.env.VITE_REACT_API_URL;

const apiCLient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

export const isAxiosError = axios.isAxiosError;

export default apiCLient;
