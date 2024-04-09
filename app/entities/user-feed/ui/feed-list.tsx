import { useUserInfoActions } from "@/shared/model/userStore";
import Bottom from "@/shared/ui/Bottom";
import Button from "@/shared/ui/Button";
import { StyleSheet, View } from "react-native";
import useGetUserBoard from "../api/getUserBoard";

const UserFeedList = ({ user }: { user: any }) => {
  const { clearUser } = useUserInfoActions();

  const { id } = user;

  const { data } = useGetUserBoard({ userId: id });

  console.log("data: ", data);

  return (
    <View style={{ marginTop: 40 }}>
      <Bottom>
        <Button
          title="로그아웃"
          onPress={() => {
            clearUser();
          }}
        />
      </Bottom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default UserFeedList;
