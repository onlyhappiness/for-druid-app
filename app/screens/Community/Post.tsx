import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import PostLayout from '@layouts/PostLayout';

import IonIcon from 'react-native-vector-icons/Ionicons';

export default () => {
  const [title, setTitle] = useState('');

  return (
    <PostLayout title="커뮤니티 글쓰기" onPress={<HeaderButton />}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <View style={styles.container}>
          {/* UploadImage */}
          <View style={styles.uploadButton}>
            <TouchableOpacity
              style={styles.uploadIcon}
              onPress={() => {
                console.log('사진사진');
              }}>
              <IonIcon name="camera-outline" size={24} color={'#B1BDC5'} />
            </TouchableOpacity>
          </View>

          {/* TitleContainer */}
          <View style={styles.titleContainer}>
            <TextInput
              style={{fontSize: 15}}
              placeholder="글 제목"
              value={title}
              onChangeText={v => setTitle(v)}
            />
          </View>
        </View>
      </ScrollView>
    </PostLayout>
  );
};

/**
 * Header 완료 button
 */
const HeaderButton = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('확인');
      }}>
      <Text>완료</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  uploadButton: {
    paddingLeft: 5,
    borderBottomColor: '#ced4da',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  uploadIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B1BDC5',
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  titleContainer: {
    borderBottomColor: '#ced4da',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
});
