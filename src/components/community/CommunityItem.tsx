import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default () => {
  return (
    <View style={styles.community}>
      <View style={styles.profileContainer}>
        <View style={styles.profile} />
        <View style={styles.info}>
          <Text>nickname</Text>
          <Text>createDate</Text>
        </View>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            dolor ipsa possimus quod labore consequatur numquam voluptate soluta
            voluptas iusto praesentium nihil ad deleniti corrupti tempora,
            laborum assumenda accusamus fuga.
          </Text>
          <View style={{paddingTop: 8}}>
            <Text>더보기</Text>
          </View>
        </View>

        {/* TODO: flatList */}
        <View style={{paddingTop: 10}}>
          <View style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  community: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  profile: {width: 50, height: 50, backgroundColor: 'gray', borderRadius: 10},
  info: {paddingLeft: 10, justifyContent: 'space-around'},
  image: {
    backgroundColor: 'gray',
    height: 200,
    borderRadius: 10,
  },
});
