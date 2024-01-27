import { StyleSheet, View } from "react-native";

export default () => {
  return <View style={styles.layout}></View>;
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
