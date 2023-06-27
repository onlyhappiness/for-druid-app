import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

export default ({item}: {item: any}) => {
  // console.log('item: ', item);

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.community}
      onPress={() => {
        navigation.navigate('CommunityInfo', {id: item?.id});
      }}>
      <View style={styles.profileContainer}>
        <View style={styles.profile} />
        <View style={styles.info}>
          <Text>{item?.Users?.nickname}</Text>
          <Text>{dayjs(item?.createdAt).format('YYYY.MM.DD HH:mm')}</Text>
        </View>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text style={{paddingTop: 8}}>{item?.content}</Text>

          {item?.content?.length > 30 && (
            <View style={{paddingTop: 8}}>
              <Text>더보기</Text>
            </View>
          )}
        </View>

        <View style={{paddingTop: 15}}>
          <View style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  community: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 10,
    borderRadius: 10,
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  profile: {width: 50, height: 50, backgroundColor: 'gray', borderRadius: 10},
  info: {paddingLeft: 10, justifyContent: 'space-around'},
  image: {
    backgroundColor: 'gray',
    height: 200,
    borderRadius: 10,
  },
});
