import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from '../stack/BottomTab';
import Favorite from '@screens/Setting/Favorite';
import Event from '@screens/Setting/Event';
import Notice from '@screens/Setting/Notice';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Notice" component={Notice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
