import {FONT} from '@/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>피드가 비었어요!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: FONT.H4,
  },
});

export default Empty;
