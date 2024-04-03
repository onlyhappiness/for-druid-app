import { FONT } from "@/shared/consts/typography";
import { useUserInfo } from "@/shared/model/userStore";
import Avatar from "@/shared/ui/Avatar";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const CommentInfo = () => {
  const { params } = useRoute<any>();

  const { user } = useUserInfo();

  return (
    <View style={styles.container}>
      <Avatar />

      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Text style={styles.title}>{user.signname}</Text>
        <View style={{ marginTop: 5 }}>
          <Text>체크체크</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 40,
    paddingHorizontal: 10,
  },
  title: { fontSize: FONT.base, fontFamily: "Pretendard-SemiBold" },
});

export default CommentInfo;
