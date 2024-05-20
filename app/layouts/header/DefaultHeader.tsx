import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'lucide-react-native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface DefaultHeaderProps {
  title?: string;
  back: boolean;
  right: React.ReactNode;
}

const DefaultHeader = ({title, back = false, right}: DefaultHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {back ? (
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </Pressable>
      ) : (
        <View />
      )}

      <Text style={styles.title}>{title}</Text>

      {right ? right : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
  },
});

export default DefaultHeader;
