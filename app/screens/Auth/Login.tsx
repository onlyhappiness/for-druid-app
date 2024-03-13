import usePostLogin from "@/api/query/auth/usePostLogin";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import InputPassword from "@/components/shared/InputPassword";
import Modal from "@/components/shared/Modal";
import HomeLayout from "@/layouts/HomeLayout";
import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default () => {
  const navigation = useNavigation<any>();

  const [signname, setSignname] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const login = usePostLogin();
  const onSubmitLogin = async () => {
    try {
      const body = {
        loginType: "SIGNNAME",
        signname,
        password,
      };

      await login.mutateAsync(body).then((res) => {
        navigation.navigate("BottomTab");
      });
    } catch (error) {
      console.log("로그인 에러::: ", error);
      setIsErrorModalOpen(true);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <HomeLayout>
          <ScrollView style={[styles.layout]}>
            <View style={styles.container}>
              <Image
                source={require("@/assets/logo.png")}
                style={{ height: 230, marginBottom: 40 }}
              />

              <Input
                containerStyle={{ marginBottom: 20, width: "100%" }}
                value={signname}
                onChangeText={(v: string) => setSignname(v)}
                placeholder="아이디를 입력해주세요."
              />

              <InputPassword
                placeholder="비밀번호를 입력해주세요."
                containerStyle={{ marginBottom: 40, width: "100%" }}
                value={password}
                onChangeText={(v: string) => setPassword(v)}
                isVisible={isPasswordVisible}
                setIsVisible={setIsPasswordVisible}
              />

              <Button
                title="로그인"
                containerStyle={styles.loginButton}
                textStyle={styles.buttonText}
                onPress={onSubmitLogin}
              />

              <View style={styles.buttonContainer}>
                <Text
                  style={{
                    marginRight: 6,
                    fontSize: FONT.base,
                    fontFamily: "Pretendard-Regular",
                  }}
                >
                  계정이 없으신가요?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("RegisterStepOne");
                  }}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.registerText}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </HomeLayout>
      </TouchableWithoutFeedback>
      <Modal
        open={isErrorModalOpen}
        content="아이디 혹은 비밀번호를 다시 확인해주세요."
        onConfirm={() => setIsErrorModalOpen(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  loginButton: {
    width: "100%",
    backgroundColor: COLOR.green,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Pretendard-SemiBold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: COLOR.greenDark,
    fontSize: 15,
    fontFamily: "Pretendard-SemiBold",
  },
  socialContainer: {},
});
