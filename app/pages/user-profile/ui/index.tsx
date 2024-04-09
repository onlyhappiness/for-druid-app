import FollowList from "@/entities/user-info/ui/follow-list";
import UserCircle from "@/entities/user-info/ui/user-circle";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";

const UserProfile = () => {
  const { params } = useRoute<any>();

  return (
    <HomeLayout title="" rightButton back>
      <ScrollView>
        <UserCircle user={params?.user} />

        <FollowList />
      </ScrollView>
    </HomeLayout>
  );
};

export default UserProfile;
