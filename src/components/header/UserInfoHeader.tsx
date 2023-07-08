import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

/**
 * @description
 * 상세 feed에서 사용하는 유저 프로필에 대한 component입니다.
 */
export default ({userData}: any) => {
  return (
    <View style={styles.userInfoHeader}>
      <View style={styles.profile} />
      <Text>{userData?.nickname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
