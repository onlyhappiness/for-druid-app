import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IDefaultLayout {
  children: ReactNode;
  extraChildren?: ReactNode;
}

export default ({ children, extraChildren }: IDefaultLayout) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>{children}</View>
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
});
