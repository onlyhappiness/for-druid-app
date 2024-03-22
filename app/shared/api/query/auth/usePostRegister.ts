import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { postRegister } from "../../apis/auth";

const usePostRegister = () => {
  return useMutation({
    mutationFn: postRegister,
    onSuccess: () => {},
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("회원가입 에러", data);
    },
  });
};

export default usePostRegister;
