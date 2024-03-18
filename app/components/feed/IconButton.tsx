import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { IBoard } from "@/types/board";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

/**
 * @description 아이콘 버튼들
 * 하트, 댓글
 */
const IconButton = ({ item, type }: { item: IBoard; type?: string }) => {
  const isLike = item?.is_like ? COLOR.red : COLOR.black;

  return (
    <View style={styles.iconContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name="favorite-outline"
          size={ICON.size}
          color={type ? isLike : COLOR.black}
          style={{ marginRight: 4 }}
          onPress={() => {}}
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
        <Icon
          name="textsms"
          size={ICON.size}
          color={"gray"}
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
