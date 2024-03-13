import DetailHeader from "@/components/header/DetailHeader";
import HomeHeader from "@/components/header/HomeHeader";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title?: string;
  children: ReactNode;
  extraChildren?: ReactNode;
  detail?: boolean;
}

export default ({ title, children, extraChildren, detail }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>
        {detail ? <DetailHeader title={title} /> : <HomeHeader title={title} />}
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
