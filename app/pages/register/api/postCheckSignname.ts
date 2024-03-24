import api from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IPostCheckSignname } from "../model/register";

const postUserCheckSignname = async (req: IPostCheckSignname) => {
  const { data } = await api.post(`/user/check-signname`, req);
  return data.data;
};

/** 아이디 중복 체크 */
const usePostCheckSignname = () => {
  return useMutation({
    mutationFn: postUserCheckSignname,
    onSuccess: (res) => {},
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("errorResponse", data);
    },
  });
};

export default usePostCheckSignname;
