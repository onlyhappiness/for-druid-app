import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getApiHost = () => {
  if (__DEV__) return "http://localhost:4123";
};

const api = axios.create({
  baseURL: getApiHost(),
});

api.interceptors.request.use(async (config: any) => {
  const token = await AsyncStorage.getItem("token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
