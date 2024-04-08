import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title?: string;
}

export default ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

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
  },
  title: {
    fontSize: FONT.h3,
    color: COLOR.black,
    fontFamily: "Pretendard-SemiBold",
  },
});
