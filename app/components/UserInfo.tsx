import {COLORS} from '@/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.row}>
      <View>
        <Text>유저이름</Text>

        <View style={[styles.row, styles.followContainer]}>
          <View style={[styles.row, styles.follow]}>
            <Text style={styles.followText}>팔로워</Text>
            <Text style={styles.followText}>1</Text>
            <Text style={styles.followText}>팔로잉</Text>
            <Text style={styles.followText}>4</Text>
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  followContainer: {
    marginTop: 20,
  },
  follow: {
    gap: 5,
    alignItems: 'center',
  },
  followText: {
    color: COLORS.BLUE_500,
  },
});

export default UserInfo;
