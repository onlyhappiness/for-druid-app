import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// icon
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface IDetailHeader {
  title: string | undefined;
}

export default ({title}: IDetailHeader) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    paddingLeft: 20,
  },
});
