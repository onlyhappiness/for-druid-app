import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './Home';
import CommunityStack from './Community';
import SettingStack from './Setting';

export default () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({}) => ({headerShown: false})}>
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
