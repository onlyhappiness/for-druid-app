import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';
import {useNavigation} from '@react-navigation/native';

export default () => {
  // const navigation = useNavigation();

  return (
    <DetailLayout
      title="회원가입"
      extraChildren={
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
          }}>
          <Text>나와</Text>
        </TouchableOpacity>
      }>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={[styles.container]}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              letterSpacing: 1.12,
              marginVertical: 20,
            }}>
            전화번호를 입력해주세요.
          </Text>
        </View>
      </ScrollView>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 10,
  },
});
