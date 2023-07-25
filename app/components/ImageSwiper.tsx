import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

export default ({images}: any) => {
  return (
    <View style={{paddingTop: 15}}>
      <Swiper style={styles.swiper}>
        {images?.map((image: string, index: number) => {
          return (
            <TouchableOpacity activeOpacity={1}>
              <FastImage
                key={index}
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  swiper: {
    height: 300,
  },
  image: {
    height: 250,
    borderRadius: 10,
  },
});
