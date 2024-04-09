import FollowList from "@/entities/user-info/ui/follow-list";
import UserCircle from "@/entities/user-info/ui/user-circle";
import { useUserInfo } from "@/shared/model/userStore";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { ScrollView } from "react-native";

const MyPage = () => {
  const { user } = useUserInfo();

  return (
    <HomeLayout title="" rightButton>
      <ScrollView>
        <UserCircle user={user} />

        <FollowList />

        {/* <UserFeedList user={user} /> */}
      </ScrollView>
    </HomeLayout>
  );
};

export default MyPage;
