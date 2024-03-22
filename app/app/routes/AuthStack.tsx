import Login from "@/pages/Auth/Login";
import RegisterStepFour from "@/pages/Auth/RegisterStepFour";
import RegisterStepOne from "@/pages/Auth/RegisterStepOne";
import RegisterStepThree from "@/pages/Auth/RegisterStepThree";
import RegisterStepTwo from "@/pages/Auth/RegisterStepTwo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";

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
