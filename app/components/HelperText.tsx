import { COLOR } from "@theme/color";
import { StyleSheet, Text, View } from "react-native";

export default ({ containerStyle, textStyle, title }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.helperText, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginLeft: 4,
  },
  helperText: {
    fontSize: 12,
    color: COLOR.input,
  },
});
