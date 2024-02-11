import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>

    // </Stack.Navigator>
  );
};
