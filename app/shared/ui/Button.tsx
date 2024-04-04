import { debounce } from "lodash";
import { useCallback } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  containerStyle?: ViewStyle | any;
  textStyle?: TextStyle | any;
  title: string;
  loading?: boolean;
}

// https://reactnative.dev/docs/touchableopacity
const Button: React.FC<ButtonProps | any> = ({
  containerStyle,
  textStyle,
  title,
  loading,
  ...props
}) => {
  const onClick = useCallback(debounce(props.onPress, 300), [props.onPress]);

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, containerStyle]}
      activeOpacity={0.85}
      onPress={props.disable || props.loading ? () => null : onClick}
    >
      <Text style={[textStyle]}>{title}</Text>

      {loading && <ActivityIndicator color={"#fff"} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
