import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import {useGetCommunityListQuery} from '@hooks/queries/community.query';
import CommunityItem from '@components/community/CommunityItem';

export default () => {
  const [page] = useState(1);
  const {data} = useGetCommunityListQuery(page);

  return (
    <HomeLayout title={'HOME'}>
      <ScrollView>
        <View style={styles.container}>
          {data?.data?.map((item: any) => {
            return <CommunityItem item={item} />;
          })}
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
