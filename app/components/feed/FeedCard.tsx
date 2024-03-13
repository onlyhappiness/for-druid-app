import { useModalActions } from "@/data/modalStore";
import { useUserInfo } from "@/data/userStore";
import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { IBoard } from "@/types/board";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FeedHeader from "../header/FeedHeader";
import FeedDate from "./FeedDate";
import FeedText from "./FeedText";

export default ({ item, type }: { item: IBoard; type: string }) => {
  const { User } = item;

  const navigation = useNavigation<any>();

  const { user: userInfo } = useUserInfo();
  const { openModal, closeModal } = useModalActions();

  const navigatePath = () => {
    if (!userInfo) {
      openModal({
        id: "go-to-signin",
        content: "로그인이 필요한 서비스입니다.",
        onConfirm: () => {
          closeModal({ id: "go-to-signin" });
          navigation.navigate("Login");
        },
      });
    } else {
      navigation.navigate("FeedDetail", { id: item?.id });
    }
  };

  return (
    <View style={styles.container}>
      {type === "feed" && <FeedHeader user={User} />}

      <TouchableOpacity onPress={navigatePath}>
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

        {type === "feed" && <FeedDate item={item} />}
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
  container: {
    paddingBottom: 20,
    borderBottomWidth: 12,
    borderColor: COLOR.grayLight,
  },
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
