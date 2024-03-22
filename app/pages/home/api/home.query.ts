import { IPagination } from "@/shared/model/pagination";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getBoardList } from "./home.api";

// 게시글 리스트 조회
const useGetBoardList = ({ cursor, limit }: IPagination) => {
  return useInfiniteQuery({
    queryKey: ["board_list", cursor],
    queryFn: ({ pageParam }) => getBoardList({ cursor: pageParam, limit }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const length = lastPage?.data?.length;
      const startPoint = lastPage?.data?.[length - 1]?.id;
      return length === 10 ? startPoint : undefined;
    },
  });
};

export default useGetBoardList;
