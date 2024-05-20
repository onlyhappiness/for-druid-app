import CommunityHome from '@/screens/community/CommunityHome';
import Home from '@/screens/home/Home';
import SearchHome from '@/screens/search/SearchHome';
import UserHome from '@/screens/user/UserHome';
import {COLORS} from '@/theme';
import {bottomNavigations} from '@/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, MessageCircleMore, UserRound} from 'lucide-react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabIcons = (route, focused) => {
  if (route.name === 'Home') {
    return <HomeIcon color={focused ? COLORS.GREEN_700 : COLORS.BLACK_300} />;
  } else if (route.name === 'CommunityHome') {
    return (
      <MessageCircleMore
        color={focused ? COLORS.GREEN_700 : COLORS.BLACK_300}
      />
    );
  } else if (route.name === 'UserHome') {
    return <UserRound color={focused ? COLORS.GREEN_700 : COLORS.BLACK_300} />;
  }
};

//
export type BottomTabParamList = {
  [bottomNavigations.HOME]: undefined;
  [bottomNavigations.COMMUNITY_HOME]: undefined;
  [bottomNavigations.USER_HOME]: undefined;
  [bottomNavigations.SEARCH_HOME]: undefined;
};

const BottomTab = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  const {bottom} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.GREEN_700, // 활성화 글자 색
        tabBarInactiveTintColor: COLORS.BLACK_300, // 비활성화 글자 색
        tabBarLabelStyle: {},
        tabBarIcon: ({focused}) => TabIcons(route, focused), // tabbar icon
      })}
      safeAreaInsets={{
        bottom: bottom,
      }}>
      <Tab.Screen
        name={bottomNavigations.HOME}
        component={Home}
        options={{title: '홈'}}
      />
      <Tab.Screen
        name={bottomNavigations.SEARCH_HOME}
        component={SearchHome}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={bottomNavigations.COMMUNITY_HOME}
        component={CommunityHome}
        options={{title: '커뮤니티'}}
      />
      <Tab.Screen
        name={bottomNavigations.USER_HOME}
        component={UserHome}
        options={{title: '마이 페이지'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
