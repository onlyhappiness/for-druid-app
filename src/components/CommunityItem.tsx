import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import ImageSwiper from './ImageSwiper';
import UserInfoHeader from './header/UserInfoHeader';

export default ({item}: {item: any}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.community}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('CommunityInfo', {id: item?.id});
      }}>
      <UserInfoHeader
        userData={item?.Users}
        image={item?.Users?.image}
        children={
          <Text>{dayjs(item?.createdAt).format('YYYY.MM.DD HH:mm')}</Text>
        }
      />

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.content}>{item?.content}</Text>

          {item?.content?.length > 30 && (
            <View style={{paddingTop: 8}}>
              <Text>더보기</Text>
            </View>
          )}
        </View>

        {item?.images !== null && <ImageSwiper images={item?.images} />}
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
  textContainer: {
    padding: 10,
  },
  content: {paddingTop: 8},
});
