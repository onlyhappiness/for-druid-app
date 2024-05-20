import {COLORS} from '@/theme';
import React, {forwardRef, useRef} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  ({containerStyle = {}, ...props}: InputFieldProps) => {
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View style={[styles.container, containerStyle]}>
          <TextInput
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_300,
    padding: deviceHeight > 700 ? 10 : 8,
  },
  input: {
    // color: COLORS.BLACK_500,
    paddingVertical: deviceHeight > 700 ? 12 : 10,
    paddingHorizontal: deviceHeight > 700 ? 8 : 6,

    fontSize: 14,
  },
});

export default InputField;
