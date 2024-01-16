import DefaultHeader from "@components/header/DefaultHeader";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IDefaultLayout {
  title: string | undefined;
  children: ReactNode;
  extraChildren?: ReactNode;
}

export default ({ title, children, extraChildren }: IDefaultLayout) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.layout}>
      <View style={[styles.container, { paddingTop: top }]}>
        <DefaultHeader title={title} />
        {children}
      </View>
      {extraChildren}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
});
