import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/Auth/OnBoarding';
import Login from '@screens/Auth/Login';
import RegisterStepOne from '@screens/Auth/RegisterStepOne';
import RegisterStpeTwo from '@screens/Auth/RegisterStpeTwo';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterStepOne" component={RegisterStepOne} />
      <Stack.Screen name="RegisterStepTwo" component={RegisterStpeTwo} />
    </Stack.Navigator>
  );
};
