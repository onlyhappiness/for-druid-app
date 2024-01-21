import Button from "@components/Button";
import Input from "@components/Input";
import DefaultLayout from "@layouts/DefaultLayout";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "@theme/color";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default () => {
  const navigation = useNavigation<any>();

  const [signname, setSignname] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <DefaultLayout>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 60, marginBottom: 40 }}>
            <Text>회원가입</Text>
          </View>

          <View style={styles.stack}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={[{ flex: 1, height: 40 }]}
                  placeholder="아이디를 입력해주세요."
                  value={signname}
                  onChange={(v: string) => setSignname(v)}
                />
              </View>

              <Button
                title="중복 확인"
                containerStyle={styles.button}
                textStyle={{ fontSize: 14, color: "white" }}
              />
            </View>
            <Text style={styles.errorText}>에러 문구</Text>
          </View>

          <View style={styles.stack}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={{ flex: 1, height: 40 }}
                  placeholder="전화번호를 입력해주세요."
                  value={phone}
                  onChange={(v: string) => setPhone(v)}
                />
              </View>
              <Button
                title="인증번호 발송"
                containerStyle={styles.button}
                textStyle={{ fontSize: 14, color: "white" }}
              />
            </View>
            <Text style={styles.successText}>성공 문구</Text>
          </View>

          <View style={styles.stack}>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={{ flex: 1, height: 40 }}
                  placeholder="인증번호를 입력해주세요."
                  value={verificationCode}
                  onChange={(v: string) => setVerificationCode(v)}
                />
              </View>
              <Button
                title="인증번호 확인"
                containerStyle={styles.button}
                textStyle={{ fontSize: 14, color: "white" }}
              />
            </View>
          </View>

          <Input
            containerStyle={{
              flex: 1,
              width: "100%",
              marginBottom: 20,
            }}
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(v: string) => setPassword(v)}
          />

          <Input
            containerStyle={{ width: "100%", marginBottom: 40 }}
            placeholder="비밀번호를 한번 더 입력해주세요."
            value={rePassword}
            onChange={(v: string) => setRePassword(v)}
          />

          <Button
            title="회원가입"
            containerStyle={{
              width: "100%",
              backgroundColor: COLOR.primary500,
              marginBottom: 20,
            }}
            textStyle={{
              color: "white",
              fontSize: 16,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 6 }}>이미 계정이 있으신가요?</Text>
            <Button
              title="로그인"
              containerStyle={{}}
              textStyle={{ color: COLOR.primary700 }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  stack: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
  },
  buttonContainer: {
    width: "28%",
    marginLeft: 10,
    height: 40,
  },
  button: {
    backgroundColor: COLOR.primary500,
    width: "28%",
    marginLeft: 10,
  },
  errorText: {
    fontSize: 12,
    color: "#DB4749",
    marginTop: 2,
    marginLeft: 5,
  },
  successText: {
    fontSize: 12,
    color: "#0081CE",
    marginTop: 2,
    marginLeft: 5,
  },
});
