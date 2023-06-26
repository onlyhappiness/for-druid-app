import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import {useGetCommunityListQuery} from '@hooks/queries/community.query';
import CommunityItem from '@components/CommunityItem';

export default () => {
  const [page] = useState(1);
  const {data} = useGetCommunityListQuery(page);

  return (
    <HomeLayout title={'HOME'}>
      <View style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={data?.data}
          renderItem={({item}) => <CommunityItem item={item} />}
          keyExtractor={item => item?.id.toString()}
          ListEmptyComponent={<ActivityIndicator />}
        />
      </View>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
