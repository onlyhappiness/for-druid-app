import InputField from '@/components/InputField';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <InputField placeholder="검색" containerStyle={{borderRadius: 8}} />
      </View>
      <Pressable>
        <Text>취소</Text>
      </Pressable>
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
    backgroundColor: 'white',
    gap: 10,
  },
});

export default SearchHeader;
