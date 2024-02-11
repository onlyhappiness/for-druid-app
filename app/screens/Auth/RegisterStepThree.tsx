import usePostCheckPhone from "@/api/query/user/usePostCheckPhone";
import usePostRequestSMS from "@/api/query/verification/usePostRequestSMS";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import AuthLayout from "@/layouts/AuthLayout";
import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const { bottom } = useSafeAreaInsets();

  const { params } = useRoute<any>();

  const navigation = useNavigation<any>();

  const [phone, setPhone] = useState("");

  // Modal open
  const [isDuplicateOpen, setIsDuplicateOpen] = useState(false);

  const phoneValidation = useMemo(() => {
    return phone.length == 11;
  }, [phone]);

  // 핸드폰 중복 확인
  const checkPhone = usePostCheckPhone();
  const handleDuplicatePhone = async () => {
    const body = { phone };

    await checkPhone.mutateAsync(body);
  };

  // 인증코드 전송
  const requestSMS = usePostRequestSMS();
  const handleRequestSMS = async () => {
    const body = { to: phone };

    await requestSMS.mutateAsync(body);
  };

  const onPressNext = async () => {
    try {
      // 중복 체크
      await handleDuplicatePhone();
      // 인증코드 전송
      await handleRequestSMS();

      // 성공적으로 처리되면 다음 화면으로 네비게이션
      navigation.navigate("RegisterStepFour", {
        data: {
          phone,
          ...params.data,
        },
      });
    } catch (error) {
      setIsDuplicateOpen(true);
    }
  };

  return (
    <AuthLayout
      title=""
      isBackButton={true}
      extraChildren={
        <>
          <View
            style={{
              paddingHorizontal: 20,
              paddingBottom: bottom === 0 ? 20 : bottom,
            }}
          >
            <Button
              title="인증번호 발송"
              containerStyle={
                phoneValidation
                  ? [styles.bottomButton, { backgroundColor: COLOR.green }]
                  : [styles.bottomButton, { backgroundColor: COLOR.background }]
              }
              textStyle={
                phoneValidation
                  ? [styles.buttonText, { color: "white" }]
                  : [styles.buttonText, { color: COLOR.blackLight }]
              }
              onPress={() => {
                phoneValidation ? onPressNext() : null;
              }}
            />
          </View>

          <Modal
            open={isDuplicateOpen}
            content="이미 가입된 전화번호입니다."
            onConfirm={() => {
              setIsDuplicateOpen(false);
            }}
          />
        </>
      }
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 60, marginBottom: 40 }}>
            <Text style={{ fontSize: FONT.h3 }}>휴대 전화번호를</Text>
            <Text style={{ marginTop: 12, fontSize: FONT.h3 }}>
              입력해주세요
            </Text>
          </View>

          <Input
            containerStyle={{
              width: "100%",
              marginBottom: 20,
            }}
            placeholder="휴대 전화번호를 입력해주세요."
            value={phone}
            onChangeText={(v) => setPhone(v.replace(/[^0-9]/g, ""))}
            keyboardType="numeric" // 숫자 키보드를 사용하도록 설정
            maxLength={11}
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
