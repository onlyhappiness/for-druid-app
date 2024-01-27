import Button from "@components/Button";
import Input from "@components/Input";
import DefaultLayout from "@layouts/DefaultLayout";
import { COLOR } from "@theme/color";
import { FONT } from "@theme/typography";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <DefaultLayout
      extraChildren={
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            title="회원가입"
            containerStyle={styles.bottomButton}
            textStyle={styles.bottomButtonText}
            // onPress={() => onPressNext()}
          />
        </View>
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

          <Input
            containerStyle={{
              flex: 1,
              width: "100%",
              marginBottom: 20,
            }}
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeText={(v: any) => setPassword(v)}
          />

          <Input
            containerStyle={{ width: "100%", marginBottom: 40 }}
            placeholder="비밀번호를 한번 더 입력해주세요."
            value={rePassword}
            onChangeText={(v: any) => setRePassword(v)}
          />
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
