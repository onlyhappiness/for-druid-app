import { postLogin } from "@/api/apis/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

const usePostLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async (res) => {
      const token = res?.access_token;

      //  async storage에 저장
      await AsyncStorage.setItem("token", token);
    },
    onError: (err) => {
      const { data }: any = (err as AxiosError).response;

      console.log("로그인 에러:: ", data);
    },
  });
};

export default usePostLogin;