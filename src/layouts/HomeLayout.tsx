import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import HomeHeader from '@components/header/HomeHeader';

interface IHomeLayout {
  title: string | undefined;
  children: ReactNode;
  extraChildren?: ReactNode;
  headerButton?: any;
}

export default ({
  title,
  children,
  extraChildren,
  headerButton,
}: IHomeLayout) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, {paddingTop: top}]}>
        <HomeHeader title={title} headerButton={headerButton} />
        {children}
      </View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
    backgroundColor: '#f1f3f5',
  },
  container: {
    flex: 1,
  },
});
