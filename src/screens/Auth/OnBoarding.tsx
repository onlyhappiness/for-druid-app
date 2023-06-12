import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AuthLayout from '@layouts/AuthLayout';

import {COLOR} from '@theme/color';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('screen');

export default () => {
  const navigation = useNavigation();

  return (
    <AuthLayout>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}> */}
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>로고</Text>
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginButton}>
            <Text style={{fontSize: 14, fontWeight: '800', color: COLOR.green}}>
              이메일로 로그인
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.registerButton}>
            <Text style={{fontSize: 14}}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logoContainer: {
    width: '100%',
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  loginButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: COLOR.green,
    borderRadius: 8,
  },
  registerButton: {
    // width: '100%',
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // paddingBottom: 30,

    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
});
