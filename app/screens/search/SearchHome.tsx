import DefaultLayout from '@/layouts/DefaultLayout';
import React from 'react';
import {Text, View} from 'react-native';

const SearchHome = () => {
  return (
    <DefaultLayout type="SEARCH">
      <View>
        <Text>검색</Text>
      </View>
    </DefaultLayout>
  );
};

export default SearchHome;
