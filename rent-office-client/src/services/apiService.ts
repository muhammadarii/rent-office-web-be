import axios from "axios";

const API_KEY = "23g4k2j3g4kjgj23gk243jg4jklj";
const BASE_URL = "http://127.0.0.1:8000/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});

// Ekspor fungsi untuk memeriksa kesalahan axios
export const isAxiosError = axios.isAxiosError;

// Ekspor instance axios
export default apiClient;
