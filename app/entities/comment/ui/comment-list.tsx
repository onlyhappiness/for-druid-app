import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { FlatList } from "react-native";
import useGetCommentList from "../api/getCommentList";
import CommentInfo from "./comment-info";

const CommentList = () => {
  const { params } = useRoute<any>();

  const { data, fetchNextPage, hasNextPage } = useGetCommentList({
    id: params.id,
    cursor: 0,
    limit: 10,
  });

  const commentList = useMemo(() => (data ? data.pages : []), [data]);

  return (
    <FlatList
      data={commentList.map((page) => page.data).flat()}
      renderItem={({ item }) => <CommentInfo data={item} />}
      keyExtractor={(item) => item?.id}
    />
  );
};

export default CommentList;
