import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

// import {useNavigation} from '@react-navigation/native';

interface IDefaultHeader {
  title: string | undefined;
}

export default ({title}: IDefaultHeader) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
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
    paddingLeft: 8,
  },
  title: {
    fontSize: 20,
    letterSpacing: 1.5,
  },
});
