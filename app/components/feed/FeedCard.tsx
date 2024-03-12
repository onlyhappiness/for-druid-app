import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { IBoard } from "@/types/board";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FeedHeader from "../header/FeedHeader";
import FeedDate from "./FeedDate";
import FeedText from "./FeedText";

export default ({ item }: { item: IBoard }) => {
  const { User } = item;

  console.log("item:: ", item);

  return (
    <View style={{ marginBottom: 30 }}>
      <FeedHeader user={User} />

      <TouchableOpacity onPress={() => {}}>
        <Image
          source={
            item?.User.image
              ? { uri: item.User.image }
              : require("@/assets/logo.png")
          }
          style={styles.postImage}
        />

        <IconButtonContainer item={item} />

        <FeedText item={item} />

        <FeedDate item={item} />
      </TouchableOpacity>
    </View>
  );
};

/**
 * @description 아이콘 버튼들
 * 하트, 댓글
 */
const IconButtonContainer = ({ item }: { item: IBoard }) => {
  const { likes_count, comment_count } = item;

  // console.log("item: ", item);

  return (
    <View style={styles.iconContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name="favorite-outline"
          size={ICON.size}
          color={COLOR.black}
          style={{ marginRight: 4 }}
          onPress={() => {}}
        />
        <Text style={styles.iconTitle}>{likes_count}</Text>
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
        <Text style={styles.iconTitle}>{comment_count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    width: "100%",
    height: 230,
    marginTop: 8,
  },

  iconContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
  },
  iconTitle: {
    fontFamily: "Pretendard-Light",
  },
});
