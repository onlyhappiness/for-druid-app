import useGetBoardDetail from "@/api/query/board/useGetBoardDetail";
import HomeLayout from "@/layouts/HomeLayout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

export default () => {
  const { params } = useRoute<any>();

  const navigation = useNavigation();

  const { data } = useGetBoardDetail(params.id);

  return (
    <HomeLayout title={"디테일"} detail>
      <View>
        <Text>나와</Text>
      </View>
    </HomeLayout>
  );
};
