import PostLoginButton from "@/features/post-login/ui";
import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import InputPassword from "@/shared/ui/InputPassword";
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

const Login = () => {
  const navigation = useNavigation<any>();

  const [signname, setSignname] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

              <PostLoginButton signname={signname} password={password} />

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
                  textButton
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
