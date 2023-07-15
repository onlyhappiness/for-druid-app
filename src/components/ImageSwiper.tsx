import {StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

export default ({images}: any) => {
  return (
    <Swiper style={styles.swiper}>
      {images?.map((image: string, index: number) => {
        return (
          <FastImage
            key={index}
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        );
      })}
    </Swiper>
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
