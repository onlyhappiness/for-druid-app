import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import useGetCommentList from "../api/getCommentList";
import CommentInfo from "./comment-info";

const CommentList = () => {
  const { params } = useRoute<any>();

  const { data, fetchNextPage, hasNextPage } = useGetCommentList({
    id: params.id,
    cursor: 0,
    limit: 10,
  });

  const isComment = useMemo(() => (data ? data.pages : []), [data]);
  const commentList = isComment.map((page) => page.data).flat();

  return (
    <View style={styles.container}>
      {commentList?.map((c) => (
        <CommentInfo data={c} key={c.id} />
      ))}
    </View>
    // <FlatList
    //   nestedScrollEnabled={true}
    //   data={commentList.map((page) => page.data).flat()}
    //   renderItem={({ item }) => <CommentInfo data={item} />}
    //   keyExtractor={(item) => item?.id}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default CommentList;
