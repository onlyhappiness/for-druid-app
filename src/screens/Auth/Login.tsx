import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{flex: 1, paddingTop: top, paddingBottom: bottom}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={{}}>
            <Text>Logo</Text>
          </View>

          <View style={{}}>
            <Text>Login</Text>

            <TouchableOpacity style={{marginTop: 30}}>
              <Text>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
