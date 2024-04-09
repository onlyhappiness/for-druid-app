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
import { COLOR } from "../consts/color";

interface ButtonProps {
  containerStyle?: ViewStyle | any;
  textStyle?: TextStyle | any;
  title: string;
  loading?: boolean;
  textButton?: boolean;
}

// https://reactnative.dev/docs/touchableopacity
const Button: React.FC<ButtonProps | any> = ({
  containerStyle,
  textStyle,
  title,
  loading,
  textButton,
  ...props
}) => {
  const onClick = useCallback(debounce(props.onPress, 300), [props.onPress]);

  return (
    <TouchableOpacity
      {...props}
      style={[textButton ? styles.textButton : styles.button, containerStyle]}
      activeOpacity={0.85}
      onPress={props.disable || props.loading ? () => null : onClick}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>

      {loading && <ActivityIndicator color={"#fff"} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
    backgroundColor: COLOR.green,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Pretendard-Regular",
  },
});

export default Button;
