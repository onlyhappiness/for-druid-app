import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeLayout from '../layouts/HomeLayout';

export default () => {
  return (
    <HomeLayout title={'홈'}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text>
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
