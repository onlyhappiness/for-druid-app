import api from "@/shared/api";
import { useUserInfoActions } from "@/shared/model/userStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IPostLogin } from "../model/login";

// post 로그인
export const postLogin = async (req: IPostLogin) => {
  const { data } = await api.post(`/auth/login`, req);
  return data.data;
};

const usePostLogin = () => {
  const { setUser } = useUserInfoActions();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: async (res) => {
      const token = res?.access_token;

      //  async storage에 저장
      await AsyncStorage.setItem("token", token);
      await setUser();
    },
    onError: (error) => {
      const { data }: any = (error as AxiosError).response;

      console.log("로그인 에러:: ", data);
    },
  });
};

export default usePostLogin;
