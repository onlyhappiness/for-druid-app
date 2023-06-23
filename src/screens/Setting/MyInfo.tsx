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
import {COLOR} from '@theme/color';

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

const nav2 = [
  {
    id: 1,
    name: '고객센터',
    path: 'FAQ',
  },
  {
    id: 2,
    name: '약관 확인',
    path: 'Document',
  },
  {
    id: 3,
    name: '로그아웃',
    path: 'Auth',
  },
];

export default () => {
  const navigation = useNavigation<any>();

  return (
    <HomeLayout title="PROFILE">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <IonIcon name="person-outline" size={30} color={'#868e96'} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.nickname}>닉네임</Text>
              <Text style={styles.email}>이메일</Text>
            </View>
          </View>

          <View style={styles.navContainer}>
            <View style={styles.nav}>
              {nav.map(item => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.path)}
                  style={styles.navItem}
                  key={item.id}>
                  <IonIcon size={26} name={item.icon} color={'#868e96'} />
                  <Text style={styles.navText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.nav2Container}>
              {nav2.map(item => (
                <View key={item.id} style={styles.nav2}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.path)}
                    style={styles.nav2Touch}>
                    <Text style={styles.nav2Text}>{item.name}</Text>
                    <IonIcon
                      name="chevron-forward"
                      size={20}
                      color={'#868e96'}
                    />
                  </TouchableOpacity>
                </View>
              ))}
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
    alignItems: 'center',
    flexDirection: 'column',
  },
  profileContainer: {
    marginTop: 40,
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  profile: {
    borderColor: '#adb5bd',
    borderWidth: 1,
    borderRadius: 500,
    padding: 30,
  },
  textContainer: {
    marginTop: 30,
  },
  nickname: {
    fontSize: 24,
    color: COLOR.black,
    fontWeight: '700',
  },
  email: {
    marginTop: 15,
  },
  navContainer: {
    marginTop: 40,
    // flex: 1,
    width: '100%',
  },
  nav: {
    marginVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    marginTop: 13,
    // color: '#adb5bd',
    // color: '#868e96',
    color: '#495057',
    letterSpacing: 1.2,
    fontSize: 14,
  },
  nav2Container: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  nav2: {
    borderTopWidth: 1,
    // borderTopColor: '#adb5bd',
    borderTopColor: '#ced4da',
    paddingVertical: 24,
  },
  nav2Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav2Text: {
    letterSpacing: 1.1,
    color: '#495057',
    fontSize: 15,
  },
});
