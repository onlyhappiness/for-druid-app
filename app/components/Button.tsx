import { StyleSheet, Text, TouchableOpacity } from "react-native";

// https://reactnative.dev/docs/touchableopacity
export default ({ containerStyle, textStyle, title }: any) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.85}
    >
      <Text style={[textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {},
});
