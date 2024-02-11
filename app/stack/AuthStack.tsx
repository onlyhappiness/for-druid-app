import RegisterStepFour from "@/screens/Auth/RegisterStepFour";
import RegisterStepThree from "@/screens/Auth/RegisterStepThree";
import RegisterStepTwo from "@/screens/Auth/RegisterStepTwo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import Login from "../screens/Auth/Login";
import RegisterStepOne from "../screens/Auth/RegisterStepOne";

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
      <Stack.Screen name="RegisterStepTwo" component={RegisterStepTwo} />
      <Stack.Screen name="RegisterStepThree" component={RegisterStepThree} />
      <Stack.Screen name="RegisterStepFour" component={RegisterStepFour} />
    </Stack.Navigator>
  );
};
