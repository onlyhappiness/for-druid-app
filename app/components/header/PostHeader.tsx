import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';

interface IPostHeader {
  title: string | undefined;
  onPress?: ReactNode;
}

export default ({title, onPress}: IPostHeader) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.left} onPress={() => navigation.goBack()}>
        <Text>닫기</Text>
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.right}>{onPress}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: '#ced4da',
    borderBottomWidth: 1,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    // paddingLeft: 20,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
