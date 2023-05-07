import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from '../stack/BottomTab';
import Favorite from '@screens/Setting/Favorite';
import Event from '@screens/Setting/Event';
import Notice from '@screens/Setting/Notice';
import FAQ from '@screens/Setting/FAQ';
import Document from '@screens/Setting/Document';
import Post from '@screens/Community/Post';

export default () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Document" component={Document} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
