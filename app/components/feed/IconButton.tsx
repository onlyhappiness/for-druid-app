import { COLOR } from "@/theme/color";
import { IBoard } from "@/types/board";
import { Heart, MessageSquareMore } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

/**
 * @description 아이콘 버튼들
 * 하트, 댓글
 */
const IconButton = ({ item, type }: { item: IBoard; type?: string }) => {
  const isLike = item?.is_like ? COLOR.red : COLOR.black;

  return (
    <View style={styles.iconContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <Icon
          name="favorite-outline"
          size={ICON.size}
          color={type ? isLike : COLOR.black}
          style={{ marginRight: 4 }}
          onPress={() => {}}
        /> */}
        <Heart />
        <Text style={styles.iconTitle}>{item?.likes_count}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 8,
        }}
      >
        {/* <Icon
          name="textsms"
          size={ICON.size}
          color={"gray"}
          style={{ marginRight: 4 }}
        /> */}
        <MessageSquareMore />
        <Text style={styles.iconTitle}>{item?.comment_count}</Text>
      </View>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
  },
  iconTitle: {
    fontFamily: "Pretendard-Light",
  },
});
