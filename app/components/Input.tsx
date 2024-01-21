import { COLOR } from "@theme/color";
import { StyleSheet, TextInput, View } from "react-native";

// https://reactnative.dev/docs/textinput
export default ({ containerStyle, textStyle, ...props }: any) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...props}
        style={[styles.input, textStyle]}
        placeholderTextColor="#bec3cf"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    borderRadius: 8,
    borderColor: COLOR.border,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
  },
});
