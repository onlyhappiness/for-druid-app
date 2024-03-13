import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import { FONT } from "@/theme/typography";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  title?: string;
}

export default ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={ICON.size} />
        </TouchableOpacity>
      )}

      <View />
      {/* <View>
        <Icon name="notifications" size={ICON.size} color={COLOR.blackLight} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    // borderBottomWidth: 12,
    // borderColor: COLOR.grayLight,
  },
  title: {
    fontSize: FONT.h3,
    color: COLOR.black,
    fontFamily: "Pretendard-SemiBold",
  },
});
