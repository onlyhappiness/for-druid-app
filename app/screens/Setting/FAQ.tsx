import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="고객센터">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View>
          <Text>고객센터</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
