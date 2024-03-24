import api from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IPostCheckPhone } from "../model/register";

const postUserCheckPhone = async (req: IPostCheckPhone) => {
  const { data } = await api.post(`/user/check-phone`, req);
  return data.data;
};

const usePostCheckPhone = () => {
  return useMutation({
    mutationFn: postUserCheckPhone,
    onSuccess: (res) => {
      console.log("전화번호 체크 성공: ", res);
    },
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("errorResponse", data);
    },
  });
};

export default usePostCheckPhone;
