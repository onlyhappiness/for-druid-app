import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@screens/Auth/Login";
import { useMemo } from "react";

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
