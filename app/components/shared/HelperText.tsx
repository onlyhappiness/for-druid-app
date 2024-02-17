import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

interface Props {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
}

export default ({ containerStyle, textStyle, title }: Props) => {
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
    color: "#a9afb3",
  },
});
