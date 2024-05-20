import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import {Text, View} from 'react-native';

const CommunityHome = () => {
  return (
    <DefaultLayout title="커뮤니티" type="BOTTOM">
      <View>
        <Text>커뮤니티</Text>
      </View>
    </DefaultLayout>
  );
};

export default CommunityHome;
