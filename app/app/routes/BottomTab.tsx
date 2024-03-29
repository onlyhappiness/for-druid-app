import AddFeed from "@/pages/add-feed/ui";
import Home from "@/pages/home/ui";
import MyPage from "@/pages/my-page/ui";
import Search from "@/pages/search/ui";
import { COLOR } from "@/shared/consts/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { HomeIcon, Plus, SearchIcon, UserRound } from "lucide-react-native";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModalProvider from "../providers/ModalProvider";
import { useModalActions } from "../store/modalStore";
import { useUserInfo } from "../store/userStore";

export default () => {
  const navigation = useNavigation<any>();

  const { openModal, closeModal } = useModalActions();

  const { user: userInfo } = useUserInfo();

  const { bottom } = useSafeAreaInsets();

  const navigatePath = (e: unknown) => {
    if (!userInfo) {
      e.preventDefault();
      openModal({
        id: "go-to-signin",
        content: "로그인이 필요한 서비스입니다.",
        onConfirm: () => {
          closeModal({ id: "go-to-signin" });
          navigation.navigate("Login");
        },
      });
    }
  };

  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <>
      <ModalProvider id="go-to-signin" />
      <Tab.Navigator
        initialRouteName="BottomTab"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLOR.greenDark,
          tabBarInactiveTintColor: COLOR.blackLight,
          tabBarLabelStyle: {
            fontFamily: "Pretendard-SemiBold",
          },

          tabBarIcon: ({ focused, color }) => {
            if (route.name === "Home") {
              return (
                <HomeIcon
                  color={focused ? COLOR.greenDark : COLOR.blackLight}
                />
              );
            } else if (route.name === "Search") {
              return (
                <SearchIcon
                  color={focused ? COLOR.greenDark : COLOR.blackLight}
                />
              );
            } else if (route.name === "AddPost") {
              return (
                <Plus color={focused ? COLOR.greenDark : COLOR.blackLight} />
              );
            } else if (route.name === "MyPage") {
              return (
                <UserRound
                  color={focused ? COLOR.greenDark : COLOR.blackLight}
                />
              );
            }
          },
        })}
        safeAreaInsets={{
          bottom: bottom,
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: "홈" }} />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "검색 " }}
          listeners={({ navigation }) => ({
            tabPress: navigatePath,
          })}
        />
        <Tab.Screen
          name="AddPost"
          component={AddFeed}
          options={{ title: "글 등록" }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPage}
          options={{ title: "마이페이지" }}
        />
      </Tab.Navigator>
    </>
  );
};
