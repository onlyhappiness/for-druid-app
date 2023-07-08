import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import DefaultLayout from '@layouts/DefaultLayout';
import {useGetCommunity} from '@hooks/queries/community.query';
import UserInfoHeader from '@components/header/UserInfoHeader';

export default () => {
  const {params} = useRoute<any>();

  console.log('params: ', params);

  const {data} = useGetCommunity(params?.id);

  console.log('data: ', data);

  return (
    <DefaultLayout title="Comments">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <UserInfoHeader userData={data?.Users} />

          <Text
            style={{
              marginTop: 20,
            }}>
            {data?.content}
          </Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  userInfoHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
  profile: {
    width: 42,
    height: 42,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginRight: 10,
  },
});
