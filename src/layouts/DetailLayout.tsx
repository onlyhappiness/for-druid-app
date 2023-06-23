import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import DetailHeader from '@components/header/DetailHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IDetailLayout {
  title: string | undefined;
  children: ReactNode;
  extraChildren?: ReactNode;
}

export default ({title, children, extraChildren}: IDetailLayout) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.layout, {marginBottom: bottom}]}>
      <View style={[styles.container, {paddingTop: top}]}>
        <DetailHeader title={title} />
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
