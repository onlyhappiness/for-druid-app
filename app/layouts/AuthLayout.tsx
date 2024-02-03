import AuthHeader from "@/components/header/AuthHeader";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  title: string;
  children: ReactNode;
  extraChildren?: ReactNode;
  isBackButton?: boolean;
  rightButton?: ReactNode;
}

export default ({
  title,
  children,
  extraChildren,
  isBackButton = false,
  rightButton,
}: Props) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>
        <AuthHeader
          title={title}
          isBackButton={isBackButton}
          rightButton={rightButton}
        />
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
});
