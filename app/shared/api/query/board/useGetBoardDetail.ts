import { useQuery } from "@tanstack/react-query";
import { getBoardDetail } from "../../apis/board";

// 게시글 상세 조회
const useGetBoardDetail = (boardId: number) => {
  return useQuery({
    queryKey: ["board_detail", boardId],
    queryFn: () => getBoardDetail(boardId),
  });
};

export default useGetBoardDetail;
