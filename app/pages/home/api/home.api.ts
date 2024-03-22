import api from "@/shared/api";
import { IPagination } from "@/shared/model/pagination";

// 게시글 리스트 조회
export const getBoardList = async ({ cursor, limit }: IPagination) => {
  const { data } = await api.get(`/board`, { params: { cursor, limit } });
  return data.data;
};
