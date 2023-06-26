import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import DetailLayout from '@layouts/DetailLayout';
import {useNavigation} from '@react-navigation/native';
import BottomButton from '@components/BottomButton';

export default () => {
  const navigation = useNavigation<any>();

  return (
    <DetailLayout
      title="회원가입"
      extraChildren={
        <BottomButton
          title={'다음 단계로 이동'}
          onPress={() => navigation.navigate('RegisterStepTwo')}
        />
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
