import api from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ISMSRequest } from "../model/register";

// sms 인증 요청
const postSMSRequest = async (req: ISMSRequest) => {
  const { data } = await api.post(`/verification/sms-request`, req);
  return data.data;
};

const usePostRequestSMS = () => {
  return useMutation({
    mutationFn: postSMSRequest,
    onSuccess: (res) => {},
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("errorResponse", data);
    },
  });
};

export default usePostRequestSMS;
