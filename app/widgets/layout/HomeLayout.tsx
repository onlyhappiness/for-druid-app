import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Bell, Search } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title?: string;
  children: ReactNode;
  extraChildren?: ReactNode;
  back?: boolean;
  rightButton?: boolean;
}

export default ({
  title,
  children,
  extraChildren,
  back = false,
  rightButton = false,
}: Props) => {
  const { top } = useSafeAreaInsets();

  const navigation = useNavigation<any>();

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

          {rightButton && (
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => {
                  navigation.navigate("Search");
                }}
              >
                <Search color={COLOR.icon} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Bell color={COLOR.icon} />
              </TouchableOpacity>
            </View>
          )}
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

  rightContainer: {
    flexDirection: "row",
  },
});
