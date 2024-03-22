import { useQuery } from "@tanstack/react-query";
import { getLogin } from "../../apis/auth";

const useGetLogin = () => {
  return useQuery({
    queryKey: ["user_login"],
    queryFn: getLogin,
  });
};

export default useGetLogin;
