import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '@layouts/HomeLayout';
import {COLOR} from '@theme/color';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CommunityItem from '@components/community/CommunityItem';
import {useGetCommunityListQuery} from '@hooks/queries/community.query';

export default () => {
  const navigation = useNavigation<any>();

  const [page] = useState(1);
  const {data} = useGetCommunityListQuery(page);

  console.log('data: ', data);

  return (
    <HomeLayout title="COMMUNITY">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Post')}
            style={styles.floatingButton}>
            {/* <IonIcon name="add-outline" size={30} color={'white'} /> */}
            {/* <IonIcon name="pencil-outline" size={30} color={'white'} /> */}
            <IonIcon name="leaf-outline" size={30} color={'white'} />
          </TouchableOpacity>

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
    paddingHorizontal: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
