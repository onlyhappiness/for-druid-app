import api from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const getBoardDetail = async (id: number | string) => {
  const { data } = await api.get(`/board/${id}`);
  return data?.data;
};

const useGetBoardDetail = ({ id }: { id: number | string }) => {
  return useQuery({
    queryKey: ["get-board-detail", id],
    queryFn: () => getBoardDetail(id),
  });
};

export default useGetBoardDetail;
