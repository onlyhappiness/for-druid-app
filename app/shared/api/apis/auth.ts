import api from "..";

// post 회원가입
export const postRegister = async (req: IPostRegister) => {
  const { data } = await api.post(`/auth/register`, req);

  return data.data;
};

// post 로그인
export const postLogin = async (req: IPostLogin) => {
  const { data } = await api.post(`/auth/login`, req);

  return data.data;
};

// get 로그인 유저 정보
export const getLogin = async () => {
  const { data } = await api.get(`/auth/login`);

  return data.data;
};
