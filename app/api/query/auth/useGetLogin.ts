import { getLogin } from "@/api/apis/auth";
import { useQuery } from "@tanstack/react-query";

const useGetLogin = () => {
  return useQuery({
    queryKey: ["user_login"],
    queryFn: getLogin,
  });
};

export default useGetLogin;
