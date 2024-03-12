import useGetBoardList from "@/api/query/board/useGetBoardList";
import FeedCard from "@/components/feed/FeedCard";
import ModalProvider from "@/components/modal/ModalProvider";
import HomeLayout from "@/layouts/HomeLayout";
import { useMemo } from "react";
import { FlatList, View } from "react-native";

export default () => {
  const { data, fetchNextPage, hasNextPage } = useGetBoardList({
    cursor: 0,
    limit: 10,
  });

  const boardList = useMemo(() => (data ? data?.pages : []), [data]);
  // console.log("boardList::: ", boardList);

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <HomeLayout extraChildren={<ModalProvider id={"test-modal"} />}>
      <FlatList
        data={boardList.map((page) => page.data).flat()}
        renderItem={({ item }) => <FeedCard item={item} />}
        keyExtractor={(item) => item?.id}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
      />
    </HomeLayout>
  );
};
