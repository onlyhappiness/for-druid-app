import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="LOGIN">
      <ScrollView>
        <View>
          <Text>Login</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
