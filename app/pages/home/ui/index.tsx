import FeedCard from "@/entities/feed/ui/feed-card";
import { useUserInfoActions } from "@/shared/model/userStore";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import useGetBoardList from "../api/getBoardList";

const Home = () => {
  const { clearUser } = useUserInfoActions();

  const { data, fetchNextPage, hasNextPage } = useGetBoardList({
    cursor: 0,
    limit: 10,
  });

  const boardList = useMemo(() => (data ? data?.pages : []), [data]);

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <HomeLayout title="Feed" rightButton={true}>
      <FlatList
        data={boardList.map((page) => page.data).flat()}
        renderItem={({ item }) => <FeedCard item={item} type="feed" />}
        keyExtractor={(item) => item?.id}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
      />

      {/* <Bottom>
        <Button
          title="로그아웃"
          onPress={() => {
            clearUser();
          }}
        />
      </Bottom> */}
    </HomeLayout>
  );
};

export default Home;
