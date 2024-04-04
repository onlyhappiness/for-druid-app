import HomeLayout from "@/widgets/layout/HomeLayout";
import { Text, View } from "react-native";

const MyPage = () => {
  return (
    <HomeLayout title="My Page">
      <View>
        <Text>프로필</Text>
      </View>
    </HomeLayout>
  );
};

export default MyPage;
