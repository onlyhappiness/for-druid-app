import api from "..";

// 회원가입
export const postRegister = async (req: IPostRegister) => {
  const { data } = await api.post(`/auth/register`, req);

  return data.data;
};

// 로그인
export const postLogin = async (req: IPostLogin) => {
  const { data } = await api.post(`/auth/login`, req);

  return data.data;
};
