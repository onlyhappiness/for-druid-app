import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

export default () => {
  return (
    <DefaultLayout>
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
