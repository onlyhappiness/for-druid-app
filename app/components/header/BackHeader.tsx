import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={ICON.size} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View />
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
    fontSize: 18,
    color: COLOR.black,
    fontFamily: "Pretendard-SemiBold",
  },
});
