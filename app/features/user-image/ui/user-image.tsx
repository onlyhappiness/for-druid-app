import { COLOR } from "@/shared/consts/color";
import { ICON } from "@/shared/consts/icon";
import { useUserInfo } from "@/shared/model/userStore";
import { UserRound } from "lucide-react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IProps {
  size: Record<string, any>;
  path?: () => void;
}

const UserImage = ({ size, path }: IProps) => {
  const { user } = useUserInfo();

  return (
    <TouchableOpacity>
      {user?.image ? (
        <Image source={{ uri: user.image }} style={[styles.avatar, size]} />
      ) : (
        <View style={[styles.avatar, size]}>
          <UserRound color={COLOR.blackLight} size={ICON.xxl} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderColor: COLOR.grayLight,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserImage;
