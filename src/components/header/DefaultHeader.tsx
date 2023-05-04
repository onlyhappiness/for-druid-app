import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// icon
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

interface IDefaultHeader {
  title: string | undefined;
}

export default ({title}: IDefaultHeader) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.left} onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={22} />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text>{title}</Text>
      </View>

      <View style={styles.right} />
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
    fontWeight: '600',
    // color:
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
