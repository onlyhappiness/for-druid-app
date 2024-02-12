// https://reactnative.dev/docs/textinput
import { COLOR } from "@/theme/color";
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface IInput extends TextInputProps {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export default ({ containerStyle, textStyle, ...props }: IInput, ref: any) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        ref={ref}
        style={[styles.input, textStyle]}
        placeholderTextColor="#ced3d6"
        autoCapitalize="none" // 자동 대문자 변환 비활성화
        autoCorrect={false} // 자동 수정 기능 비활성화
        // placeholderTextColor="#bec3cf"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: COLOR.grayLight,
    // borderColor: "#ced3d6",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 48,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});
