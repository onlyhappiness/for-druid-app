import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';

export default () => {
  return (
    <DetailLayout title="회원가입">
      <ScrollView>
        <View>
          <Text>Register</Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};
