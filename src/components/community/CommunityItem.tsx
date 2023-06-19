import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default ({item}: {item: any}) => {
  console.log('item: ', item);

  return (
    <View style={styles.community}>
      <View style={styles.profileContainer}>
        <View style={styles.profile} />
        <View style={styles.info}>
          <Text>nickname</Text>
          <Text>{item?.createdAt}</Text>
        </View>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text style={{paddingTop: 8}}>{item?.content}</Text>

          {item?.content?.length > 30 && (
            <View style={{paddingTop: 8}}>
              <Text>더보기</Text>
            </View>
          )}
        </View>

        {/* TODO: flatList */}
        <View style={{paddingTop: 15}}>
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
