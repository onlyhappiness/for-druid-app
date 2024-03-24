import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import InputPassword from "@/shared/ui/InputPassword";
import Modal from "@/shared/ui/Modal";
import HomeLayout from "@/widgets/layout/HomeLayout";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import usePostLogin from "../api/postLogin";

const Login = () => {
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
        <HomeLayout title="로그인" back>
          <ScrollView style={[styles.layout]}>
            <View style={styles.container}>
              <Image
                // source={require("@/shared/ui/assets/logo.png")}
                source={require("@/shared/ui/assets/no-image.png")}
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

                <Button
                  title="로그인"
                  containerStyle={""}
                  textStyle={styles.registerText}
                  onPress={() => {
                    navigation.navigate("RegisterStepOne");
                  }}
                />
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

export default Login;
