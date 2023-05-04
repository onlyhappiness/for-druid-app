import React, {useMemo} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Community from '@screens/Community/Community';
import Home from '@screens/Home';
import MyInfo from '@screens/Setting/MyInfo';

import {COLOR} from '@theme/color';

const CommunityStack = () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Community" component={Community} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyInfo" component={MyInfo} />
    </Stack.Navigator>
  );
};

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLOR.black,
        tabBarInactiveTintColor: '#B1BDC5',
        tabBarIcon: ({focused}) => {
          let iconName = '';

          if (route.name === 'CommunityStack') {
            iconName = 'ios-chatbox-outline';
            // iconName = 'ios-reader-outline';
            // iconName = 'md-reader-outline';
          } else if (route.name === 'HomeStack') {
            iconName = 'home-outline';
          } else {
            iconName = 'person-outline';
          }

          return (
            <IonIcon
              name={iconName}
              size={24}
              color={focused ? COLOR.black : '#B1BDC5'}
            />
          );
        },
      })}>
      <Tab.Screen
        name="CommunityStack"
        component={CommunityStack}
        options={{title: '커뮤니티'}}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{title: '홈'}}
      />
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{title: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};
