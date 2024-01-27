import Button from "@components/Button";
import HelperText from "@components/HelperText";
import Input from "@components/Input";
import DefaultLayout from "@layouts/DefaultLayout";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "@theme/color";
import { FONT } from "@theme/typography";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default () => {
  const navigation = useNavigation<any>();

  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [signname, setSignname] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const isEnableDuplicate = useMemo(() => {
    return signname.length >= 6 && signname.length <= 12;
  }, [signname]);

  const isEnableRequestVerify = useMemo(() => {
    // 010-1234-5678
    return phone.length == 11;
  }, [phone]);

  const isEnableVerify = useMemo(() => {
    return verificationCode.length == 6;
  }, [verificationCode]);

  const isDisableNext = useMemo(() => {
    return (
      signname.length >= 6 &&
      signname.length <= 12 &&
      phone.length == 11 &&
      verificationCode.length == 6
    );
  }, [signname, phone, verificationCode]);

  const onPressNext = () => {
    navigation.navigate("RegisterStepTwo");
  };

  return (
    <DefaultLayout
      extraChildren={
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            title="회원가입"
            containerStyle={styles.bottomButton}
            textStyle={styles.bottomButtonText}
            onPress={() => onPressNext()}
          />
        </View>
      }
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 60, marginBottom: 40 }}>
            <Text style={{ fontSize: FONT.h3 }}>사용하실 아이디를</Text>
            <Text style={{ marginTop: 12, fontSize: FONT.h3 }}>
              입력해주세요
            </Text>
          </View>

          <View>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={[{ flex: 1 }]}
                  placeholder="아이디를 입력해주세요."
                  value={signname}
                  onChangeText={(v: any) => setSignname(v)}
                />
              </View>

              <Button
                title="중복 확인"
                containerStyle={
                  isEnableDuplicate
                    ? [styles.button, styles.activeButton]
                    : [styles.button, styles.deactiveButton]
                }
                textStyle={
                  isEnableDuplicate
                    ? [styles.buttonText, { color: "white" }]
                    : [
                        styles.buttonText,
                        {
                          color: COLOR.blackLight,
                        },
                      ]
                }
              />
            </View>

            <HelperText
              title={
                isEnableDuplicate
                  ? ""
                  : `아이디는 6자 이상 12자 이하로 입력해주세요.`
              }
              containerStyle={""}
              textStyle={""}
            />
          </View>

          {/* <View style={styles.stack}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  keyboardType="numeric" // 키보드를 숫자 전용으로 설정
                  containerStyle={{ flex: 1 }}
                  placeholder="전화번호를 입력해주세요."
                  value={phone}
                  onChangeText={(v: any) => {
                    if (!isNaN(Number(v)) && isFinite(v)) {
                      setPhone(v);
                    }
                  }}
                />
              </View>
              <Button
                title="인증번호 발송"
                containerStyle={
                  isEnableRequestVerify
                    ? styles.activeButton
                    : styles.deactiveButton
                }
                textStyle={
                  isEnableRequestVerify
                    ? styles.activeText
                    : styles.deactiveText
                }
              />
            </View>
            <HelperText title={"테스트"} containerStyle={""} textStyle={""} />
          </View> */}

          {/* <View style={styles.stack}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={{ flex: 1 }}
                  placeholder="인증번호를 입력해주세요."
                  value={verificationCode}
                  onChangeText={(v: any) => setVerificationCode(v)}
                />
              </View>
              <Button
                title="인증번호 확인"
                containerStyle={
                  isEnableVerify ? styles.activeButton : styles.deactiveButton
                }
                textStyle={
                  isEnableVerify ? styles.activeText : styles.deactiveText
                }
              />
            </View>

            <HelperText title={"테스트"} containerStyle={""} textStyle={""} />
          </View> */}

          {/* <Input
            containerStyle={{
              flex: 1,
              width: "100%",
              marginBottom: 20,
            }}
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeText={(v: any) => setPassword(v)}
          /> */}

          {/* <Input
            containerStyle={{ width: "100%", marginBottom: 40 }}
            placeholder="비밀번호를 한번 더 입력해주세요."
            value={rePassword}
            onChangeText={(v: any) => setRePassword(v)}
          /> */}

          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 6 }}>이미 계정이 있으신가요?</Text>
            <Button
              title="로그인"
              containerStyle={{}}
              textStyle={{ color: COLOR.greenDark }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </View> */}
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  button: {
    width: "28%",
    marginLeft: 10,
  },
  activeButton: {
    backgroundColor: COLOR.green,
  },
  deactiveButton: {
    borderWidth: 1,
    borderColor: COLOR.grayLight,
    backgroundColor: COLOR.background,
  },

  buttonText: {
    fontSize: FONT.base,
  },
  errorText: {
    color: "#DB4749",
  },
  successText: {
    color: "#0081CE",
  },

  bottomButton: {
    width: "100%",
    backgroundColor: COLOR.green,
    marginBottom: 20,
  },
  bottomButtonText: {
    color: "white",
    fontSize: 16,
  },
});
