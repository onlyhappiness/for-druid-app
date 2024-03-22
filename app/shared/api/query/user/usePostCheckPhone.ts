import { postCheckPhone } from "@/api/apis/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const usePostCheckPhone = () => {
  return useMutation({
    mutationFn: postCheckPhone,
    onSuccess: (res) => {},
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("errorResponse", data);
    },
  });
};

export default usePostCheckPhone;
