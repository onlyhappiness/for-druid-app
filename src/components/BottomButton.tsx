import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLOR} from '@theme/color';

export default ({title, onPress}: any) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.button, {marginBottom: bottom}]}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  },
  container: {
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLOR.primary500,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});
