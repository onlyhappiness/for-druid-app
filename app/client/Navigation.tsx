import { useUserInfo } from "@/data/userStore";
import Login from "@/screens/Auth/Login";
import RegisterStepFour from "@/screens/Auth/RegisterStepFour";
import RegisterStepOne from "@/screens/Auth/RegisterStepOne";
import RegisterStepThree from "@/screens/Auth/RegisterStepThree";
import RegisterStepTwo from "@/screens/Auth/RegisterStepTwo";
import FeedDetail from "@/screens/feed/FeedDetail";
import BottomTab from "@/stack/BottomTab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";

export default () => {
  const { user: userInfo } = useUserInfo();

  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
        <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
        <Stack.Screen name="RegisterStepThree" component={RegisterStepThree} />
        <Stack.Screen name="RegisterStepFour" component={RegisterStepFour} />
        <Stack.Screen name="FeedDetail" component={FeedDetail} />
        {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
