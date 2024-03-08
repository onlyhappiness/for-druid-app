import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { IUser } from "@/types/user";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default ({ user }: { user: IUser }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/12/20/05/12200579b5389850dbfe2990fd906722.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>{user.signname}</Text>
      </View>

      <Icon name="more-horiz" size={24} color={COLOR.black} />
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title: { fontSize: FONT.base, fontFamily: "Pretendard-SemiBold" },
});
