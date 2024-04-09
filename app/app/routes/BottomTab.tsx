import useModalStore from "@/features/modal/model/modalStore";
import LoginModal, { LoginModalFooter } from "@/features/modal/ui/login-modal";
import AddFeed from "@/pages/add-feed/ui";
import Home from "@/pages/home/ui";
import MyPage from "@/pages/my-page/ui";
import Search from "@/pages/search/ui";
import UserProfile from "@/pages/user-profile/ui";
import { COLOR } from "@/shared/consts/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { HomeIcon, Plus, UserRound } from "lucide-react-native";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUserInfo } from "../../shared/model/userStore";

export default () => {
  const navigation = useNavigation<any>();

  const { openModal } = useModalStore();

  const { user: userInfo } = useUserInfo();

  const { bottom } = useSafeAreaInsets();

  const navigatePath = (e: any) => {
    if (!userInfo) {
      e.preventDefault();
      openModal({
        id: "login-modal",
        content: <LoginModal />,
        footer: <LoginModalFooter />,
      });
      // navigation.navigate("Login");
    }
  };

  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <>
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
          name="AddPost"
          component={AddFeed}
          options={{ title: "글 등록" }}
        />

        <Tab.Screen
          name="MyPage"
          component={MyPage}
          options={{ title: "마이페이지" }}
          listeners={({ navigation }) => ({
            tabPress: navigatePath,
          })}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "검색", tabBarButton: () => null }}
          listeners={({ navigation }) => ({
            tabPress: navigatePath,
          })}
        />

        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: "유저 프로필", tabBarButton: () => null }}
          listeners={({ navigation }) => ({
            tabPress: navigatePath,
          })}
        />
      </Tab.Navigator>
    </>
  );
};
