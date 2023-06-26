import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import DefaultLayout from '@layouts/DefaultLayout';

export default () => {
  const {params} = useRoute<any>();

  console.log('params: ', params);

  return (
    <DefaultLayout title="Comments">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View>
          <Text>Notice</Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};
