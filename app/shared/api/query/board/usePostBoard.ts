import { postBoard } from "@/api/apis/board";
import { useMutation } from "@tanstack/react-query";

const usePostBoard = () => {
  return useMutation({
    mutationFn: postBoard,
  });
};

export default usePostBoard;
