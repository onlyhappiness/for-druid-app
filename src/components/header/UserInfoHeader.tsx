import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

/**
 * @description
 * feed 및 어느 곳에서든 사용하는 유저 프로필에 대한 component입니다.
 */
export default ({userData, image, children}: any) => {
  return (
    <View style={styles.profileContainer}>
      {image ? (
        <FastImage style={styles.profile} source={{uri: image}} />
      ) : (
        <View style={styles.profile} />
      )}
      <View style={styles.info}>
        <Text>{userData?.nickname}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  info: {paddingLeft: 10, justifyContent: 'space-around'},
});
