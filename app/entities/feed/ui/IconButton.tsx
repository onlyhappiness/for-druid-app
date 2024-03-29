import { COLOR } from "@/shared/consts/color";
import { ICON } from "@/shared/consts/icon";
import { Heart, MessageSquareMore } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { IFeedCard } from "../model/feedcard";

/**
 * @description 아이콘 버튼들
 * 하트, 댓글
 */
const IconButton = ({ item, type }: { item: IFeedCard; type?: string }) => {
  const isLike = item?.is_like ? COLOR.red : COLOR.black;

  return (
    <View style={styles.iconContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Heart
          color={COLOR.black}
          size={ICON.size}
          style={{ marginRight: 4 }}
        />
        <Text style={styles.iconTitle}>{item?.likes_count}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 8,
        }}
      >
        <MessageSquareMore
          color={COLOR.black}
          size={ICON.size}
          style={{ marginRight: 4 }}
        />
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
