import UserImage from "@/features/user/ui/user-image";
import { FONT } from "@/shared/consts/typography";
import { useUserInfo } from "@/shared/model/userStore";
import { StyleSheet, Text, View } from "react-native";

const UserCircle = () => {
  const { user } = useUserInfo();

  return (
    <View style={styles.container}>
      <UserImage size={styles.avatar} />

      <Text style={styles.username}>{user?.signname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90,
    // borderColor: COLOR.grayLight,
    // borderWidth: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  username: {
    marginTop: 10,
    fontFamily: "Pretendard-SemiBold",
    fontSize: FONT.h4,
  },
});

export default UserCircle;
