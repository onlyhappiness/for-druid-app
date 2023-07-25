import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IDefaultHeader {
  title: string | undefined;
  headerButton?: any;
}

export default ({title, headerButton}: IDefaultHeader) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={{alignItems: 'flex-end'}}>{headerButton}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 20,
    letterSpacing: 1.5,
  },
});
