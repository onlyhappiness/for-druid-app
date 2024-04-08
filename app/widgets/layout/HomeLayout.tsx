import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title?: string;
  children: ReactNode;
  extraChildren?: ReactNode;
  back?: boolean;
}

export default ({ title, children, extraChildren, back = false }: Props) => {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.header}>
          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft color={COLOR.icon} />
            </TouchableOpacity>
          )}

          <View>
            <Text
              style={
                back
                  ? [styles.title, { fontSize: 18 }]
                  : [styles.title, { fontSize: FONT.h3 }]
              }
            >
              {title}
            </Text>
          </View>

          {back && <View />}
        </View>

        {children}
      </View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },

  header: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: COLOR.black,
    fontFamily: "Pretendard-SemiBold",
  },
});
