import { useUserInfo, useUserInfoActions } from "@/data/userStore";
import AuthStack from "@/stack/AuthStack";
import BottomTab from "@/stack/BottomTab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";

export default () => {
  const { setUser, clearUser } = useUserInfoActions();

  const { user: userInfo } = useUserInfo();

  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userInfo ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
