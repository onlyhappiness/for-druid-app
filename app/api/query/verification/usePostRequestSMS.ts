import { postRequestSMS } from "@/api/apis/verification";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const usePostRequestSMS = () => {
  return useMutation({
    mutationFn: postRequestSMS,
    onSuccess: (res) => {
      console.log("인증코드 전송");
    },
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("인증코드 전송 실패", data);
    },
  });
};

export default usePostRequestSMS;
