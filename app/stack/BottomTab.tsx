import AddPost from "@/screens/AddPost";
import Home from "@/screens/Home";
import MyPage from "@/screens/MyPage";
import Search from "@/screens/Search";
import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

export default () => {
  const { bottom } = useSafeAreaInsets();

  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tab.Navigator
      initialRouteName="BottomTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLOR.greenDark,
        tabBarInactiveTintColor: COLOR.blackLight,

        tabBarIcon: ({ focused, color }) => {
          let iconname = "";

          if (route.name === "Home") {
            iconname = "home-filled";
          } else if (route.name === "Search") {
            iconname = "search";
          } else if (route.name === "AddPost") {
            iconname = "add";
          } else if (route.name === "MyPage") {
            iconname = "person-outline";
          }

          return (
            <Icon
              name={iconname}
              size={ICON.xl}
              color={focused ? COLOR.greenDark : COLOR.blackLight}
            />
          );
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
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{ title: "글 등록" }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ title: "마이페이지" }}
      />
    </Tab.Navigator>
  );
};
