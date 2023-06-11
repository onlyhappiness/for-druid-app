import axios from 'axios';

export const getApiHost = () => {
  if (__DEV__) return 'http://localhost:4000';
};

const api = axios.create({
  baseURL: getApiHost(),
});

export default api;
