import {COLORS, FONT} from '@/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HomeHeaderProps {
  title?: string;
  right?: React.ReactNode;
}

const HomeHeader = ({title, right}: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {right ? right : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: COLORS.GRAY_300,
    marginBottom: 12,
  },
  title: {
    fontSize: FONT.H4,
    // fontWeight: '700',
    color: '#000',
  },
});

export default HomeHeader;
