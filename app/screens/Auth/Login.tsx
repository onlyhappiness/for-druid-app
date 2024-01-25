import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "@theme/color";
import { useState } from "react";
import {
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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={[styles.layout]}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={{}}>로고</Text>
          </View>

          <Input
            containerStyle={{ marginBottom: 20, width: "100%" }}
            value={signname}
            onChangeText={(v: any) => setSignname(v)}
            placeholder="아이디"
          />

          <Input
            secureTextEntry
            containerStyle={{ marginBottom: 40, width: "100%" }}
            value={password}
            onChangeText={(v: any) => setPassword(v)}
            placeholder="비밀번호"
          />

          <Button
            title="로그인"
            containerStyle={styles.loginButton}
            textStyle={styles.buttonText}
            onPress={() => {
              navigation.navigate("RegisterStepOne");
            }}
          />

          <View style={styles.buttonContainer}>
            <Text style={{ marginRight: 6, fontSize: 14 }}>
              계정이 없으신가요?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RegisterStepOne");
              }}
              style={{ alignItems: "center" }}
            >
              <Text style={styles.registerText}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    height: 50,
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: COLOR.green,
  },
  loginButton: {
    width: "100%",
    backgroundColor: COLOR.green,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  registerText: {
    color: COLOR.greenDark,
  },
  socialContainer: {},
});
