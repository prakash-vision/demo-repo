import axios from "axios";

export const productAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
