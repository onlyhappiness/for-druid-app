import Login from "@/pages/login/ui";
import RegisterStepFour from "@/pages/register/ui/RegisterStepFour";
import RegisterStepOne from "@/pages/register/ui/RegisterStepOne";
import RegisterStepThree from "@/pages/register/ui/RegisterStepThree";
import RegisterStepTwo from "@/pages/register/ui/RegisterStepTwo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { useUserInfo } from "../store/userStore";
import BottomTab from "./BottomTab";

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
        {/* <Stack.Screen name="FeedDetail" component={FeedDetail} /> */}
        {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
