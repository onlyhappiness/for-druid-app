import { IPostCheckSignname } from "@/types/user";
import api from "..";

const BASE_URL = "/user";

// post 아이디 중복체크
export const postCheckSignname = async (body?: IPostCheckSignname) => {
  try {
    const { data } = await api.post(`/user/check-signname`, body);
    return data.data;
  } catch (error) {
    throw error;
  }
};

// post 전화번호 체크
export const postCheckPhone = async (body: any) => {
  try {
    const { data } = await api.post(`/user/check-phone`, body);
    return data.data;
  } catch (error) {
    throw error;
  }
};
