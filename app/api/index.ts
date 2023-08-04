import axios from 'axios';

export const getApiHost = () => {
  if (__DEV__) {
    console.log('여기 맞아여');
    return 'http://localhost:4000';
  }
};

const api = axios.create({
  baseURL: getApiHost(),
});

// TODO: 인터셉터 추가

export default api;
