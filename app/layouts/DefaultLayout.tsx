import {COLORS} from '@/theme/color';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import DefaultHeader from './header/DefaultHeader';
import HomeHeader from './header/HomeHeader';
import SearchHeader from './header/SearchHeader';

interface DefaultLayoutProps {
  title?: string;
  children: React.ReactNode;
  back?: boolean;
  right?: React.ReactNode;
  type?: 'DEFAULT' | 'BOTTOM' | 'SEARCH';
}

const DefaultLayout = ({
  title,
  children,
  back = false,
  right,
  type = 'DEFAULT',
}: DefaultLayoutProps) => {
  // const {top} = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View style={[styles.container]}>
        {type === 'DEFAULT' && (
          <DefaultHeader title={title} back={back} right={right} />
        )}

        {type === 'BOTTOM' && <HomeHeader title={title} right={right} />}

        {type === 'SEARCH' && <SearchHeader />}

        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  container: {
    flex: 1,
  },
});

export default DefaultLayout;
