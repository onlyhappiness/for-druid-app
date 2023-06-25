import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IAuthLayout {
  children: ReactNode;
  extraChildren?: ReactNode;
}

export default ({children, extraChildren}: IAuthLayout) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <View style={[styles.container, {paddingTop: top}]}>{children}</View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
