import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import Button from "@/shared/ui/Button";
import HelperText from "@/shared/ui/HelperText";
import InputPassword from "@/shared/ui/InputPassword";
import AuthLayout from "@/widgets/layout/AuthLayout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;

export default () => {
  const { params } = useRoute<any>();

  const navigation = useNavigation<any>();

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepasswordVisible, setIsRepasswordVisible] = useState(false);

  const passwordValidation = useMemo(() => {
    if (password.length === 0) return null;
    return passwordRegex.test(password);
  }, [password]);

  const rePasswordValidation = useMemo(() => {
    if (password.length === 0 || rePassword.length === 0) return null;
    return password == rePassword;
  }, [password, rePassword]);

  const onPressNext = () => {
    navigation.navigate("RegisterStepThree", {
      data: {
        password,
        ...params.data,
      },
    });
  };

  return (
    <AuthLayout
      title=""
      isBackButton={true}
      extraChildren={
        <BottomButton
          passwordValidation={passwordValidation}
          rePasswordValidation={rePasswordValidation}
          onPressNext={onPressNext}
        />
      }
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 60, marginBottom: 40 }}>
            <Text style={{ fontSize: FONT.h3 }}>사용하실 비밀번호를</Text>
            <Text style={{ marginTop: 12, fontSize: FONT.h3 }}>
              입력해주세요
            </Text>
          </View>

          <View style={styles.row}>
            <InputPassword
              containerStyle={{ width: "100%" }}
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChangeText={(v: string) => setPassword(v)}
              isVisible={isPasswordVisible}
              setIsVisible={setIsPasswordVisible}
            />
            <HelperText
              title={
                passwordValidation
                  ? "사용 가능한 비밀번호입니다."
                  : "8 ~ 16자의 영문, 숫자, 특수문자를 모두 포함해야 합니다."
              }
              textStyle={passwordValidation ? styles.successText : {}}
            />
          </View>

          <View style={styles.row}>
            <InputPassword
              containerStyle={{ width: "100%" }}
              placeholder="비밀번호를 한번 더 입력해주세요."
              value={rePassword}
              onChangeText={(v: string) => setRePassword(v)}
              isVisible={isRepasswordVisible}
              setIsVisible={setIsRepasswordVisible}
            />
            <HelperText
              title={
                rePassword.length > 1
                  ? rePasswordValidation
                    ? "비밀번호와 일치합니다."
                    : "비밀번호가 일치하지 않습니다."
                  : ""
              }
              textStyle={rePasswordValidation ? styles.successText : {}}
            />
          </View>
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

const BottomButton = ({
  passwordValidation,
  rePasswordValidation,
  onPressNext,
}: {
  passwordValidation: boolean | null;
  rePasswordValidation: boolean | null;
  onPressNext: () => void;
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: bottom === 0 ? 20 : bottom,
      }}
    >
      <Button
        title="다음"
        containerStyle={
          passwordValidation && rePasswordValidation
            ? [styles.bottomButton, { backgroundColor: COLOR.green }]
            : [styles.bottomButton, { backgroundColor: COLOR.background }]
        }
        textStyle={
          passwordValidation && rePasswordValidation
            ? [styles.buttonText, { color: "white" }]
            : [styles.buttonText, { color: COLOR.blackLight }]
        }
        onPress={() => {
          passwordValidation && rePasswordValidation ? onPressNext() : null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  row: {
    marginBottom: 20,
  },

  buttonText: {
    fontSize: FONT.base,
  },
  errorText: {
    color: COLOR.red,
  },
  successText: {
    color: COLOR.blue,
  },

  bottomButton: {
    width: "100%",
    marginBottom: 20,
  },
});
