import api from "@/shared/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IGetComment } from "../model/comment";

// 댓글 조회
const getComment = async ({ cursor, limit, id }: IGetComment) => {
  const { data } = await api.get(`/board/comment/${id}`, {
    params: { cursor, limit },
  });

  return data.data;
};

const useGetCommentList = ({ cursor, limit, id }: IGetComment) => {
  return useInfiniteQuery({
    queryKey: ["comment-list", cursor, id],
    queryFn: ({ pageParam }) => getComment({ cursor: pageParam, limit, id }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const length = lastPage?.data?.length;
      const startPoint = lastPage?.data?.[length - 1]?.id;
      return length === 10 ? startPoint : undefined;
    },
  });
};

export default useGetCommentList;
