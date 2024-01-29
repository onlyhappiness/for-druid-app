import axios from "axios";

export const getApiHost = () => {
  if (__DEV__) return "http://localhost:4123";
};

const api = axios.create({
  baseURL: getApiHost(),
});

export default api;
