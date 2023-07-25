import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import HomeLayout from '../layouts/HomeLayout';
import {useGetCommunityListQuery} from '@hooks/queries/community.query';
import CommunityItem from '@components/CommunityItem';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '@theme/color';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const [page] = useState(1);
  const {data} = useGetCommunityListQuery(page);

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
  headerButton: {
    padding: 6,
    borderRadius: 30,
    backgroundColor: COLOR.primary800,
  },
});
