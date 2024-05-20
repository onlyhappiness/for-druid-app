import axios from 'axios';

export const getAPiHost = () => {
  if (__DEV__) return 'http://localhost:4123';
};

const api = axios.create({
  baseURL: getAPiHost(),
  withCredentials: true,
});

export default api;
