import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomeLayout from '@layouts/HomeLayout';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const nav = [
  {
    id: 1,
    icon: 'bookmark-outline',
    // icon: 'clipboard-outline',
    // icon: 'heart-outline',
    name: '찜한목록',
    path: 'Favorite',
  },
  {
    id: 2,
    icon: 'gift-outline',
    // icon: 'leaf-outline',
    name: '이벤트',
    path: 'Event',
  },
  {
    id: 3,
    icon: 'mail-outline',
    name: '공지사항',
    path: 'Notice',
  },
];

export default () => {
  const navigation = useNavigation<any>();

  return (
    <HomeLayout title="PROFILE">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Text>프로필 사진</Text>
          </View>
          <View style={styles.navContainer}>
            <View style={styles.nav}>
              {nav.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(item.path);
                    }}
                    style={styles.navItem}
                    key={item.id}>
                    <IonIcon size={26} name={item.icon} color={'#868e96'} />
                    <Text style={styles.navText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  profile: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  navContainer: {
    flex: 1,
    width: '100%',
  },
  nav: {
    paddingVertical: 30,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    paddingTop: 13,
    // color: '#adb5bd',
    // color: '#868e96',
    color: '#495057',
    letterSpacing: 1.2,
    fontSize: 14,
  },
});
