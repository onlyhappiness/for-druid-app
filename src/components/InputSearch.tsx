import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default () => {
  const [search, setSearch] = useState('');

  console.log('search: ', search);

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        maxLength={20}
        placeholder="검색"
      />
      <Text style={{alignItems: 'flex-end'}}>검색</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    // backgroundColor: 'gray',
    backgroundColor: 'white',
  },
});
