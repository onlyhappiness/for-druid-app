import api from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

const getUserBoard = async ({ userId }: { userId: number | string }) => {
  const { data } = await api.get(`/board/user/${userId}`);
  return data.data;
};

const useGetUserBoard = ({ userId }: { userId: number | string }) => {
  return useQuery({
    queryKey: ["user-board", userId],
    queryFn: () => getUserBoard({ userId }),
  });
};

export default useGetUserBoard;
