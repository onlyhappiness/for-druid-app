import api from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IVerifySMS } from "../model/register";

const postVerifySMS = async (req: IVerifySMS) => {
  const { data } = await api.post(`/verification/sms-verrify`, req);
  return data.data;
};

const usePostVerifySMS = () => {
  return useMutation({
    mutationFn: postVerifySMS,
    onSuccess: (res) => {},
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("errorResponse", data);
    },
  });
};

export default usePostVerifySMS;
