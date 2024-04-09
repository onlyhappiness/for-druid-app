import { COLOR } from "@/shared/consts/color";
import { UserRound } from "lucide-react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface IProps {
  user: any;
  size: Record<string, any>;
  icon: number;
  onPress?: () => void;
}

const UserImage = ({ user, size, icon, onPress }: IProps) => {
  // const { user } = useUserInfo();

  return (
    <TouchableOpacity onPress={onPress}>
      {user?.image ? (
        <Image source={{ uri: user.image }} style={[styles.avatar, size]} />
      ) : (
        <View style={[styles.avatar, size]}>
          <UserRound color={COLOR.blackLight} size={icon} />
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
