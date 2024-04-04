import { FONT } from "@/shared/consts/typography";
import Avatar from "@/shared/ui/Avatar";
import { StyleSheet, Text, View } from "react-native";

const CommentInfo = ({ data }: { data: any }) => {
  return (
    <View style={styles.container}>
      <Avatar />

      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 3 }}>
        <Text style={styles.title}>{data?.User?.signname}</Text>
        <View style={{ marginTop: 5 }}>
          <Text>{data?.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 25,
    paddingHorizontal: 10,
  },
  title: { fontSize: FONT.base, fontFamily: "Pretendard-SemiBold" },
  content: { fontFamily: "Pretendard-Regular" },
});

export default CommentInfo;
