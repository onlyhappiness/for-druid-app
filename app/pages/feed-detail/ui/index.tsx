import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "lucide-react-native";
import { Text } from "react-native";

export default () => {
  const { params } = useRoute<any>();

  const navigation = useNavigation();

  //   const { data } = useGetBoardDetail(params.id);

  //   console.log("data:: ", data?.User);

  return (
    <View>
      <Text>나와</Text>
    </View>
    // <HomeLayout title={`${data?.User?.signname}의 Feed`} back>
    //   <FeedCard item={data} type="detail" />
    // </HomeLayout>
  );
};
