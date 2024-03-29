import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  isBackButton?: boolean;
  rightButton?: ReactNode;
}

export default ({ title, isBackButton, rightButton }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="arrow-back" size={ICON.size} /> */}
          <ArrowLeft />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Text style={styles.title}>{title}</Text>

      {isBackButton ? (
        rightButton && (
          <View>
            <Text>오른쪽 버튼</Text>
          </View>
        )
      ) : (
        <View />
      )}
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
    fontSize: FONT.base,
    color: COLOR.black,
  },
});
