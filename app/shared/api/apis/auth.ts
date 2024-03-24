import api from "..";

// get 로그인 유저 정보
export const getLogin = async () => {
  const { data } = await api.get(`/auth/login`);

  return data.data;
};
