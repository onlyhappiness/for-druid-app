import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import PostCard from '@components/PostCard';

export default () => {
  return (
    <HomeLayout title={'HOME'}>
      <ScrollView>
        <View style={styles.container}>
          {/* <Text>Home</Text> */}

          <PostCard />
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
