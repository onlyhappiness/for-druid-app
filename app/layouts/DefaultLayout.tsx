import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IDefaultLayout {
  children: React.ReactNode;
  extraChildren?: React.ReactNode;
}

export default ({children, extraChildren}: IDefaultLayout) => {
  // const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.layout]}>
      <View style={[styles.container]}>{children}</View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
});
