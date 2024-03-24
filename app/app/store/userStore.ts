import { getLogin } from "@/shared/api/apis/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

type userState = {
  user: any;
  setUser: () => void;
  clearUser: () => void;
};

const userStore = create(
  persist<userState>(
    (set) => ({
      user: null,
      setUser: async () => {
        const user = await getLogin();
        set({ user: user });
      },
      clearUser: async () => {
        set({ user: null });
        await AsyncStorage.removeItem("token");
      },
    }),
    {
      name: "user-store",
      // 참고: https://stackoverflow.com/questions/72311639/unable-to-use-zustand-persist-middleware
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useUserInfo = () =>
  userStore(useShallow(({ user }) => ({ user })));

export const useUserInfoActions = () =>
  userStore(
    useShallow(({ setUser, clearUser }) => ({
      setUser,
      clearUser,
    }))
  );
