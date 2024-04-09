import UserImage from "@/features/user-image/ui/user-image";
import { ICON } from "@/shared/consts/icon";
import { FONT } from "@/shared/consts/typography";
import { StyleSheet, Text, View } from "react-native";

const UserCircle = ({ user }: { user: any }) => {
  return (
    <View style={styles.container}>
      <UserImage user={user} size={styles.avatar} icon={ICON.xxl} />

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
