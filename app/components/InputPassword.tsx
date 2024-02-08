// https://reactnative.dev/docs/textinput
import { COLOR } from "@/theme/color";
import { ICON } from "@/theme/icon";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface IInput extends TextInputProps {
  containerStyle?: any;
  textStyle?: any;
  isVisible: boolean;
  setIsVisible: React.Dispatch<boolean>;
}

export default forwardRef(
  (
    { containerStyle, textStyle, isVisible, setIsVisible, ...props }: IInput,
    ref: any
  ) => {
    const togglePasswordVisibility = async () => {
      setIsVisible(!isVisible);
    };

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          ref={ref}
          style={[styles.input, textStyle]}
          placeholderTextColor="#ced3d6"
          secureTextEntry={!isVisible}
          autoCapitalize="none" // 자동 대문자 변환 비활성화
          autoCorrect={false} // 자동 수정 기능 비활성화
          maxLength={16}
          // placeholderTextColor="#bec3cf"
          {...props}
        />

        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isVisible ? (
            <Icon name="visibility-off" size={ICON.size} color={"#ced3d6"} />
          ) : (
            <Icon name="visibility" size={ICON.size} color={"#ced3d6"} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    borderColor: COLOR.grayLight,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 48,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});
