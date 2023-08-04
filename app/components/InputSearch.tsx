import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default () => {
  const [search, setSearch] = useState('');

  // console.log('search: ', search);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.field}>작성자</Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          maxLength={20}
          placeholder="작성자를 검색해주세요."
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text>검색</Text>
      </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    marginRight: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
