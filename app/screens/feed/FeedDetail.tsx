import useGetBoardDetail from "@/api/query/board/useGetBoardDetail";
import FeedCard from "@/components/feed/FeedCard";
import HomeLayout from "@/layouts/HomeLayout";
import { useNavigation, useRoute } from "@react-navigation/native";

export default () => {
  const { params } = useRoute<any>();

  const navigation = useNavigation();

  const { data } = useGetBoardDetail(params.id);

  console.log("data:: ", data?.User);

  return (
    <HomeLayout title={`${data?.User?.signname}의 Feed`} back>
      <FeedCard item={data} type="detail" />
    </HomeLayout>
  );
};
