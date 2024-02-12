import AddPost from "@/screens/AddPost";
import Home from "@/screens/Home";
import MyPage from "@/screens/MyPage";
import Search from "@/screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tab.Navigator initialRouteName="BottomTab">
      <Tab.Screen name="Home" component={Home} options={{ title: "" }} />
      <Tab.Screen name="Search" component={Search} options={{ title: "" }} />
      <Tab.Screen name="AddPost" component={AddPost} options={{ title: "" }} />
      <Tab.Screen name="MyPage" component={MyPage} options={{ title: "" }} />
    </Tab.Navigator>
  );
};
