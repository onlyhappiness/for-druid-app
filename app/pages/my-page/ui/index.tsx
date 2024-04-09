import FollowList from "@/entities/user-info/ui/follow-list";
import UserCircle from "@/entities/user-info/ui/user-circle";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { ScrollView } from "react-native";

const MyPage = () => {
  // const { user } = useUserInfo();

  // console.log("user::: ", user);

  return (
    <HomeLayout title="" rightButton>
      <ScrollView>
        <UserCircle />

        <FollowList />

        {/* <UserFeedList user={user} /> */}
      </ScrollView>
    </HomeLayout>
  );
};

export default MyPage;
