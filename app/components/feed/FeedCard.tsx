import { useModalActions } from "@/data/modalStore";
import { useUserInfo } from "@/data/userStore";
import { COLOR } from "@/theme/color";
import { IBoard } from "@/types/board";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import FeedHeader from "../header/FeedHeader";
import FeedDate from "./FeedDate";
import FeedText from "./FeedText";
import IconButton from "./IconButton";

export default ({ item, type }: { item: IBoard; type: string }) => {
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

  const card = () => {
    return (
      <TouchableOpacity onPress={navigatePath}>
        <Image
          source={
            item?.User.image
              ? { uri: item.User.image }
              : require("@/assets/logo.png")
          }
          style={styles.postImage}
        />

        <IconButton item={item} />

        <FeedText item={item} />
      </TouchableOpacity>
    );
  };

  const detail = () => {
    return (
      <>
        <Image
          source={
            item?.User.image
              ? { uri: item.User.image }
              : require("@/assets/logo.png")
          }
          style={styles.postImage}
        />

        <IconButton item={item} type={type} />

        <FeedText item={item} />
      </>
    );
  };

  return (
    <View style={type === "feed" && styles.container}>
      {type === "feed" && <FeedHeader user={item?.User} />}

      {type === "feed" ? card() : detail()}

      {type === "feed" && <FeedDate item={item} />}
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
});
