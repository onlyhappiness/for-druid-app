import { usePostCheckSignname } from "@/api/query/user/usePostCheckSignname";
import Button from "@/components/shared/Button";
import HelperText from "@/components/shared/HelperText";
import Input from "@/components/shared/Input";
import Modal from "@/components/shared/Modal";
import AuthLayout from "@/layouts/AuthLayout";
import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const navigation = useNavigation<any>();

  const type = "SIGNNAME";
  const [signname, setSignname] = useState("");

  // 중복 체크에 대한 상태값
  const [isCheckSignname, setIsCheckSigname] = useState(false);

  // Modal open
  const [isDuplicateOpen, setIsDuplicateOpen] = useState(false);

  const signnameValidation = useMemo(() => {
    return signname.length >= 6 && signname.length <= 12;
  }, [signname]);

  const checkSignname = usePostCheckSignname({
    setModalOpen: setIsDuplicateOpen,
    isCheck: setIsCheckSigname,
  });

  const handleDuplicateSigname = async (signname: string) => {
    const body = { signname: signname };

    await checkSignname.mutateAsync(body);
  };

  const onPressNext = () => {
    navigation.navigate("RegisterStepTwo", {
      data: {
        type,
        signname,
      },
    });
  };

  useEffect(() => {
    if (!signnameValidation) {
      setIsCheckSigname(false);
    }
  }, [signnameValidation]);

  return (
    <AuthLayout
      title=""
      isBackButton={true}
      extraChildren={
        <>
          <BottomButton
            signnameValidation={signnameValidation}
            isCheckSignname={isCheckSignname}
            onPressNext={onPressNext}
          />

          <Modal
            open={isDuplicateOpen}
            content="이미 사용중인 아이디입니다."
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
                  onChangeText={(v: string) => setSignname(v)}
                />
              </View>

              <Button
                title="중복 확인"
                onPress={() => {
                  signnameValidation ? handleDuplicateSigname(signname) : null;
                }}
                containerStyle={
                  signnameValidation
                    ? [styles.button, styles.activeButton]
                    : [styles.button, styles.deactiveButton]
                }
                textStyle={
                  signnameValidation
                    ? [styles.buttonText, { color: "white" }]
                    : [styles.buttonText, { color: COLOR.blackLight }]
                }
              />
            </View>

            <HelperText
              title={
                signnameValidation
                  ? isDuplicateOpen
                    ? "이미 사용중인 아이디입니다."
                    : isCheckSignname
                    ? "사용 가능한 아이디입니다."
                    : ""
                  : `아이디는 6자 이상 12자 이하로 입력해주세요.`
              }
              containerStyle={{}}
              textStyle={
                isDuplicateOpen
                  ? styles.errorText
                  : isCheckSignname
                  ? styles.successText
                  : {}
              }
            />
          </View>
        </View>
      </ScrollView>
    </AuthLayout>
  );
};

/**
 * @description Bottom Button
 *
 * @param signnameValidation  signname 길이
 * @param isCheckSignname     중복 체크 상태값
 * @param onPressNext         클릭함수
 */
const BottomButton = ({
  signnameValidation,
  isCheckSignname,
  onPressNext,
}: {
  signnameValidation: boolean;
  isCheckSignname: boolean;
  onPressNext: () => void;
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingBottom: bottom === 0 ? 20 : bottom,
      }}
    >
      <Button
        title="다음"
        containerStyle={
          signnameValidation && isCheckSignname
            ? [styles.bottomButton, { backgroundColor: COLOR.green }]
            : [styles.bottomButton, { backgroundColor: COLOR.background }]
        }
        textStyle={
          signnameValidation && isCheckSignname
            ? [styles.buttonText, { color: "white" }]
            : [styles.buttonText, { color: COLOR.blackLight }]
        }
        onPress={() => {
          signnameValidation && isCheckSignname ? onPressNext() : null;
        }}
        accessibilityLabel="다음으로 이동합니다."
      />
    </View>
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
