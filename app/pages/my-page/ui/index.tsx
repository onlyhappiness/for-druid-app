import FollowList from "@/entities/my-page/ui/follow-list";
import UserCircle from "@/entities/my-page/ui/user-circle";
import HomeLayout from "@/widgets/layout/HomeLayout";

const MyPage = () => {
  return (
    <HomeLayout title="" rightButton>
      <UserCircle />

      <FollowList />
    </HomeLayout>
  );
};

export default MyPage;
