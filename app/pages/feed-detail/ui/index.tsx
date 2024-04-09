import CommentInput from "@/entities/comment/ui/comment-input";
import CommentList from "@/entities/comment/ui/comment-list";
import FeedCard from "@/entities/feed/ui/feed-card";
import { useUserInfo } from "@/shared/model/userStore";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import useGetBoardDetail from "../api/getBoardDetail";

const FeedDetail = () => {
  const { params } = useRoute<any>();

  const { data } = useGetBoardDetail({ id: params.id });

  const { user: userInfo } = useUserInfo();

  return (
    <HomeLayout title={`${data?.User?.signname}의 Feed`} back>
      <ScrollView nestedScrollEnabled={true}>
        <FeedCard item={data} type="detail" />

        {userInfo && <CommentInput />}

        <CommentList />
      </ScrollView>
    </HomeLayout>
  );
};

export default FeedDetail;
