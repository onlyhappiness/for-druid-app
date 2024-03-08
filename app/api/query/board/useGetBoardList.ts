import { getBoardList } from "@/api/apis/board";
import { IPagination } from "@/types/pagination";
import { useInfiniteQuery } from "@tanstack/react-query";

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
