import { postVerifySMS } from "@/api/apis/verification";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const usePostVerifySMS = () => {
  return useMutation({
    mutationFn: postVerifySMS,
    onSuccess: (res) => {
      console.log("인증코드 검증: ", res);
    },
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("인증코드 검증", data);
    },
  });
};

export default usePostVerifySMS;
