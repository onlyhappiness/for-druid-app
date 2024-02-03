import { postCheckSignname } from "@/api/apis/user";
import { useMutation } from "@tanstack/react-query";

export const usePostCheckSignname = () => {
  return useMutation({
    mutationFn: postCheckSignname,
    onSuccess: (res) => {
      console.log("res:::", res);
    },
    onError: (err) => {
      console.log("err:::", err);
    },
  });
};
