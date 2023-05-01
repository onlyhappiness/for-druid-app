import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyInfo from '../screens/Setting/MyInfo';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyInfo" component={MyInfo} />
    </Stack.Navigator>
  );
};
