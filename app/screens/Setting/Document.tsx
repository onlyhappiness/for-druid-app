import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="약관 확인">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View>
          <Text>약관확인</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
