import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PostHeader from '@components/header/PostHeader';

interface IPostLayout {
  title: string | undefined;
  children: ReactNode;
  onPress?: ReactNode;
  extraChildren?: ReactNode;
}

export default ({title, children, onPress, extraChildren}: IPostLayout) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, {paddingTop: top}]}>
        <PostHeader title={title} onPress={onPress} />
        {children}
      </View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
});
