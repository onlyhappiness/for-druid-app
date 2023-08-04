import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default () => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={styles.image}
        source={require('@assets/no-data.json')}
        autoPlay
        loop
      />
      <Text style={styles.text}>아무런 Feed가 없어요..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '80%',
  },
  text: {
    color: '#868686',
    textAlign: 'center',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
