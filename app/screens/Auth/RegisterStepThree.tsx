import Button from "@components/Button";
import Input from "@components/Input";
import DefaultLayout from "@layouts/DefaultLayout";
import { COLOR } from "@theme/color";
import { FONT } from "@theme/typography";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default () => {
  const [phone, setPhone] = useState("");

  return (
    <DefaultLayout
      extraChildren={
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            title="다음"
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
            <Text style={{ fontSize: FONT.h3 }}>휴대 전화번호를</Text>
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
            placeholder="휴대 전화번호를 입력해주세요."
            value={phone}
            onChangeText={(v: any) => setPhone(v)}
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
    fontSize: FONT.base,
  },
});
