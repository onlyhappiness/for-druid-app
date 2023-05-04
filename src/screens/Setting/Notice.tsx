import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="공지사항">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View>
          <Text>Notice</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
