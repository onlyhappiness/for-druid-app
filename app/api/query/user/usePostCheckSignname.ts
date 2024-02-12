import { postCheckSignname } from "@/api/apis/user";
import { useMutation } from "@tanstack/react-query";

export const usePostCheckSignname = ({
  isCheck,
  setModalOpen,
}: {
  isCheck: React.Dispatch<boolean>;
  setModalOpen: React.Dispatch<boolean>;
}) => {
  return useMutation({
    mutationFn: postCheckSignname,
    onSuccess: (res) => {
      console.log("res:::", res);
      isCheck(true);
    },
    onError: (err) => {
      setModalOpen(true);
    },
  });
};
