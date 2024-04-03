import { UserRound } from "lucide-react-native";
import { Image, StyleSheet, View } from "react-native";
import { COLOR } from "../consts/color";
import { useUserInfo } from "../model/userStore";

const Avatar = () => {
  const { user } = useUserInfo();

  return (
    <>
      {user?.image ? (
        <Image source={{ uri: user.image }} style={styles.avatar} />
      ) : (
        <View style={[styles.avatar, styles.imageBorder]}>
          <UserRound color={COLOR.blackLight} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: COLOR.grayLight,
  },
  imageBorder: { justifyContent: "center", alignItems: "center" },
});

export default Avatar;
