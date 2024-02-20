import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FeedHeader from "../header/FeedHeader";
import FeedText from "./FeedText";

export default () => {
  return (
    <View style={{ marginBottom: 30 }}>
      <FeedHeader />

      <TouchableOpacity>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/12/20/05/12200579b5389850dbfe2990fd906722.jpg",
          }}
          style={styles.postImage}
        />

        <IconButtonContainer />

        <FeedText />
      </TouchableOpacity>
    </View>
  );
};

/**
 * @description 아이콘 버튼들
 * 하트, 댓글
 */
const IconButtonContainer = () => {
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
        <Text>1</Text>
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
        <Text>1</Text>
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
});
