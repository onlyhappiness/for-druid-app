import api from "..";

// post SMS 인증 요청
export const postRequestSMS = async (req: IPostRequestSMS) => {
  const { data } = await api.post(`/verification/sms-request`, req);
  return data.data;
};
