import Empty from '@/components/Empty';
import DefaultLayout from '@/layouts/DefaultLayout';
import {BottomTabParamList} from '@/stack/BottomTab';
import {COLORS} from '@/theme';
import {bottomNavigations} from '@/types';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {Bell, Search} from 'lucide-react-native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type HomeScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  typeof bottomNavigations.HOME
>;

const Right = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.rigthContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate(bottomNavigations.SEARCH_HOME);
        }}>
        <Search color={COLORS.BLACK_300} size={20} />
      </Pressable>

      <Pressable>
        <Bell color={COLORS.BLACK_300} size={20} />
      </Pressable>
    </View>
  );
};

const Home = ({navigation}) => {
  // const navigation = useNavigation<any>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Right />,
  //   });
  // }, []);

  return (
    <DefaultLayout title="" type="BOTTOM" right={<Right />}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text>banner</Text>
        </View>

        {/* <Text>오늘의 팁</Text>
        <Text>최신 게시물</Text>
        <Text>계절별 식물 가이드</Text>
        <Text>사용자 활동 요약</Text> */}

        <Empty />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  rigthContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  banner: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: COLORS.GREEN_700,
  },
});

export default Home;
