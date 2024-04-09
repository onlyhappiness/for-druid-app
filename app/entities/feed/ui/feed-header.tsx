import UserImage from "@/features/user-image/ui/user-image";
import { COLOR } from "@/shared/consts/color";
import { ICON } from "@/shared/consts/icon";
import { FONT } from "@/shared/consts/typography";
import { useNavigation } from "@react-navigation/native";
import { Ellipsis } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default ({ user }: { user: any }) => {
  const navigation = useNavigation<any>();

  console.log("user::: ", user);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserImage
          user={user}
          size={styles.avatar}
          icon={ICON.size}
          onPress={() => {
            navigation.navigate("UserProfile", { user: user });
          }}
        />

        <Text style={styles.title}>{user.signname}</Text>
      </View>

      <Ellipsis color={COLOR.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginRight: 10,
  },
  title: { fontSize: FONT.base, fontFamily: "Pretendard-SemiBold" },
});
