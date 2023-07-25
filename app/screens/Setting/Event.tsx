import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="이벤트">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View>
          <Text>Event</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
