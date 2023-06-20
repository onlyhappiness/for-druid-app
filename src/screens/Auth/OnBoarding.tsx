import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import AuthLayout from '@layouts/AuthLayout';

import {COLOR} from '@theme/color';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');

export default () => {
  const {bottom} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <AuthLayout>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={[styles.container, {paddingBottom: bottom}]}>
          <Image
            style={{
              alignSelf: 'center',
              marginBottom: 60,
            }}
            source={require('../../assets/login.jpeg')}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginBtn}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '800',
                letterSpacing: 1.2,
                color: 'white',
              }}>
              이메일로 로그인
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.registerBtn}>
            <IonIcon name="call" size={16} color={COLOR.primary500} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: COLOR.primary500,
                textAlign: 'center',
                width: '100%',
              }}>
              전화번호로 시작하기
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    // paddingHorizontal: 10,
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLOR.primary500,
    borderColor: COLOR.primary500,
  },
  registerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR.primary500,
    backgroundColor: COLOR.primary100,
    marginTop: 40,
  },
});
