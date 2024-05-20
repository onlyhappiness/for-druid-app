import UserInfo from '@/components/UserInfo';
import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Right = () => {
  return <View></View>;
};

const UserHome = () => {
  return (
    <DefaultLayout title="마이 페이지" type="BOTTOM">
      <View style={styles.container}>
        {/* <Text>유저 홈</Text> */}
        <UserInfo />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
});

export default UserHome;
