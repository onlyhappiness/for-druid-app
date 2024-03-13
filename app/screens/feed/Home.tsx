import useGetBoardList from "@/api/query/board/useGetBoardList";
import FeedCard from "@/components/feed/FeedCard";
import Bottom from "@/components/shared/Bottom";
import Button from "@/components/shared/Button";
import { useUserInfoActions } from "@/data/userStore";
import HomeLayout from "@/layouts/HomeLayout";
import { COLOR } from "@/theme/color";
import { useMemo } from "react";
import { FlatList, View } from "react-native";

export default () => {
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
    <HomeLayout
      title="Feed"
      extraChildren={
        <>
          <Bottom>
            <Button
              title="테스트"
              onPress={() => {
                clearUser();
              }}
              containerStyle={{ backgroundColor: COLOR.green }}
            />
          </Bottom>
        </>
      }
    >
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
