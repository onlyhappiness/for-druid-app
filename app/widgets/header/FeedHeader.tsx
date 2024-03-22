import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { Ellipsis } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default ({ user }: { user: any }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={
            user.image
              ? { uri: user.image }
              : require("@/shared/ui/assets/no-image.png")
          }
          style={styles.avatar}
        />
        <Text style={styles.title}>{user.signname}</Text>
      </View>

      {/* <Icon name="more-horiz" size={24} color={COLOR.black} /> */}
      <Ellipsis color={COLOR.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLOR.grayLight,
  },
  title: { fontSize: FONT.base, fontFamily: "Pretendard-SemiBold" },
});
