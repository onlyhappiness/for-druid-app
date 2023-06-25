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
  const navigation: any = useNavigation();

  return (
    <AuthLayout>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={[styles.container, {paddingBottom: bottom}]}>
          <Text style={styles.loginTitle}>드루이드를 위한 커뮤니티 앱 :)</Text>
          <Image
            style={{
              alignSelf: 'center',
              marginBottom: 40,
            }}
            source={require('../../assets/login.jpeg')}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('BottomTabStack')}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>이메일로 로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterStepOne')}
            style={styles.registerBtn}>
            <IonIcon name="call" size={16} color={COLOR.primary500} />
            <Text style={styles.registerText}>전화번호로 시작하기</Text>
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
  loginTitle: {
    fontSize: 22,
    fontWeight: '600',
    padding: 5,
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
  loginText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: 'white',
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
  registerText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLOR.primary500,
    textAlign: 'center',
    width: '100%',
  },
});
