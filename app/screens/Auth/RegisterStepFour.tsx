import usePostVerifySMS from "@/api/query/verification/usePostVerifySMS";
import Button from "@/components/Button";
import Input from "@/components/Input";
import AuthLayout from "@/layouts/AuthLayout";
import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { useRoute } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const { bottom } = useSafeAreaInsets();

  const { params } = useRoute<any>();

  const [code, setCode] = useState("");

  const codeValidation = useMemo(() => {
    return code.length === 6;
  }, [code]);

  // Modal Open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 인증코드 검증
  const verifySMS = usePostVerifySMS();
  const handleVerifySMS = async () => {
    const body = {
      to: params.data.phone,
      key: code,
    };

    await verifySMS.mutateAsync(body);
  };

  // 회원가입
  const handleRegister = async () => {
    const body = {
      loginType: params.data.type,
      signname: params.data.signname,
      phone: params.data.phone,
      password: params.data.password,
    };

    console.log("body::: ", body);
  };

  const onPressNext = async () => {
    console.log("code:: ", code);

    try {
      await handleVerifySMS();
    } catch (error) {
      console.log("에러에러::; ", error);
    }
  };

  console.log("codeValidation:: ", codeValidation);

  return (
    <AuthLayout
      title=""
      isBackButton={true}
      extraChildren={
        <>
          <View>
            <Button
              title="다음"
              containerStyle={
                codeValidation
                  ? [styles.bottomButton, { backgroundColor: COLOR.green }]
                  : [styles.bottomButton, { backgroundColor: COLOR.background }]
              }
              textStyle={
                codeValidation
                  ? [styles.buttonText, { color: "white" }]
                  : [styles.buttonText, { color: COLOR.black }]
              }
              onPress={() => {
                codeValidation ? onPressNext() : null;
              }}
            />
          </View>
        </>
      }
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 60, marginBottom: 40 }}>
            <Text style={{ fontSize: FONT.h3 }}>인증번호를</Text>
            <Text style={{ marginTop: 12, fontSize: FONT.h3 }}>
              입력해주세요
            </Text>
          </View>

          <Input
            containerStyle={{ width: "100%" }}
            placeholder="인증코드를 입력해주세요."
            value={code}
            onChangeText={(v) => setCode(v.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            maxLength={6}
          />
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
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
