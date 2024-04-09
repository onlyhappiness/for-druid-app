import api from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPostComment } from "../model/comment";

const postComment = async ({
  id,
  req,
}: {
  id: string | number;
  req: IPostComment;
}) => {
  const { data } = await api.post(`/board/comment/${id}`, req);
  return data;
};

const usePostComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postComment,
    onSuccess: (res) => {
      console.log("댓글 성공: ", res);
      queryClient.invalidateQueries({ queryKey: ["comment-list"] });
      queryClient.invalidateQueries({ queryKey: ["get-board-detail"] });
    },
    onError: (err) => {
      console.log("댓글 err: ", err);
    },
  });
};

export default usePostComment;
