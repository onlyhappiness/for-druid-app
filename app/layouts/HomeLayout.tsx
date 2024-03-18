import BackHeader from "@/components/header/BackHeader";
import HomeHeader from "@/components/header/HomeHeader";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title?: string;
  children: ReactNode;
  extraChildren?: ReactNode;
  back?: boolean;
}

export default ({ title, children, extraChildren, back }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>
        {back ? <BackHeader title={title} /> : <HomeHeader title={title} />}
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
    // backgroundColor: COLOR.background,
  },
});
