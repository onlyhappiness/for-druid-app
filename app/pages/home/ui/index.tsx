import FeedCard from "@/entities/feed/ui/FeedCard";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import useGetBoardList from "../api/getBoardList";

const Home = () => {
  const { data, fetchNextPage, hasNextPage } = useGetBoardList({
    cursor: 0,
    limit: 10,
  });

  const boardList = useMemo(() => (data ? data?.pages : []), [data]);

  console.log(">> boardList", boardList);

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <HomeLayout title="Feed">
      <FlatList
        data={boardList.map((page) => page.data).flat()}
        renderItem={({ item }) => <FeedCard item={item} type="feed" />}
        keyExtractor={(item) => item?.id}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
      />
    </HomeLayout>
  );
};

export default Home;
