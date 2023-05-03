import {View, Text} from 'react-native';
import React from 'react';
import DefaultHeader from '@components/header/DefaultHeader';

const DefaultLayout = ({children}: any) => {
  return (
    <View>
      <DefaultHeader />
      <Text>DefaultLayout</Text>
      {children}
    </View>
  );
};

export default DefaultLayout;
