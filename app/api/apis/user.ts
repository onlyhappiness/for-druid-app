import { makeRequest } from "@api/makeRequest";
import api from "..";

const BASE_URL = "/user";

// 이메일 중복체크
export const postCheckEmail = async (body: any) => {
  await makeRequest({
    method: "POST",
    path: `${BASE_URL}/check-email`,
    body: body,
  });
};

// 아이디 중복체크
export const postCheckSignname = async (body: any) => {
  //   makeRequest({
  //     method: "POST",
  //     path: `${BASE_URL}/check-signname`,
  //     body: body,
  //   })

  try {
    const res = await api.post(`${BASE_URL}/check-signname`, body);
    return res.data.data;
  } catch (error) {
    throw error;
  }
};

// 전화번호 체크
export const postCheckPhone = async (body: any) => {
  await makeRequest({
    method: "POST",
    path: `${BASE_URL}/check-phone`,
    body: body,
  });
};
