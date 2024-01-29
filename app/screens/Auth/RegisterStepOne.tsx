import { postCheckSignname } from "@api/apis/user";
import Button from "@components/Button";
import HelperText from "@components/HelperText";
import Input from "@components/Input";
import Modal from "@components/Modal";
import AuthLayout from "@layouts/AuthLayout";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "@theme/color";
import { FONT } from "@theme/typography";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default () => {
  const navigation = useNavigation<any>();

  const [signname, setSignname] = useState("");

  const [isDuplicateOpen, setIsDuplicateOpen] = useState<any>(null);

  const isEnableDuplicate = useMemo(() => {
    return signname.length >= 6 && signname.length <= 12;
  }, [signname]);

  const handleDuplicateSigname = (signname: string) => {
    // setIsDuplicateOpen(true);

    const body = {
      signname: signname,
    };
    postCheckSignname(body);
  };

  const onPressNext = () => {
    navigation.navigate("RegisterStepTwo");
  };

  return (
    <AuthLayout
      title=""
      isBackButton={true}
      extraChildren={
        <>
          <View style={{ paddingHorizontal: 20 }}>
            <Button
              title="다음"
              containerStyle={styles.bottomButton}
              textStyle={styles.bottomButtonText}
              onPress={() => onPressNext()}
              accessibilityLabel="다음으로 이동합니다."
            />
          </View>
          <Modal
            open={isDuplicateOpen}
            content="테스트입니다."
            onConfirm={() => {
              setIsDuplicateOpen(false);
            }}
          />
        </>
      }
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 50, marginBottom: 40 }}>
            <Text style={{ fontSize: FONT.h3 }}>사용하실 아이디를</Text>
            <Text style={{ marginTop: 14, fontSize: FONT.h3 }}>
              입력해주세요
            </Text>
          </View>

          <View>
            <View style={styles.row}>
              <View style={{ flex: 1 }}>
                <Input
                  containerStyle={{ flex: 1 }}
                  placeholder="아이디를 입력해주세요."
                  value={signname}
                  onChangeText={(v: any) => setSignname(v)}
                />
              </View>

              <Button
                title="중복 확인"
                onPress={() => {
                  isEnableDuplicate ? handleDuplicateSigname(signname) : null;
                }}
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
    fontSize: FONT.base,
  },
});
