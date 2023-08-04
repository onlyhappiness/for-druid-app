import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface INodata {
  title: string;
}

export default ({title}: INodata) => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={styles.image}
        source={require('@assets/no-data.json')}
        autoPlay
        loop
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '80%',
  },
  text: {
    color: '#868E96',
    textAlign: 'center',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
