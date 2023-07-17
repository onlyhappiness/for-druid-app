import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import HomeLayout from '@layouts/HomeLayout';
import {COLOR} from '@theme/color';
import CommunityItem from '@components/CommunityItem';
import {useGetCommunityListQuery} from '@hooks/queries/community.query';
import InputSearch from '@components/InputSearch';

export default () => {
  const navigation = useNavigation();

  // const [field, setField] = useState('');
  // const [keyword, setKeyword] = useState('');

  // const [search, setSearch] = useState({});

  const [page] = useState(1);
  const {data} = useGetCommunityListQuery(page);

  // const onSearch = async () => {
  //   setSearch({
  //     field,
  //     keyword,
  //   });
  // };

  return (
    <HomeLayout
      title={'HOME'}
      headerButton={
        <TouchableOpacity
          onPress={() => navigation.navigate('Post')}
          style={styles.headerButton}>
          <IonIcon name="leaf-outline" size={22} color={'white'} />
        </TouchableOpacity>
      }>
      <View style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={data?.data}
          renderItem={({item}) => <CommunityItem item={item} />}
          keyExtractor={item => item?.id.toString()}
          ListEmptyComponent={<ActivityIndicator />}
          ListHeaderComponent={
            <>
              <InputSearch />
            </>
          }
        />
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerButton: {
    padding: 6,
    borderRadius: 30,
    backgroundColor: COLOR.primary800,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
