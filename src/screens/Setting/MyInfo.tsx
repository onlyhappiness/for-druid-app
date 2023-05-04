import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeLayout from '@layouts/HomeLayout';

export default () => {
  return (
    <HomeLayout title="마이페이지">
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <Text>MyInfo</Text>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
