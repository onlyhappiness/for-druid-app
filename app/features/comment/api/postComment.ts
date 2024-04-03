import api from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
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
  return useMutation({
    mutationFn: postComment,
  });
};

export default usePostComment;
