import useModalStore from "@/features/modal/model/modalStore";
import LoginErrorModal, {
  LoginErrorModalFooter,
} from "@/features/modal/ui/login-error-modal";
import { COLOR } from "@/shared/consts/color";
import Button from "@/shared/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import usePostLogin from "../api/postLogin";

const PostLoginButton = ({
  signname,
  password,
}: {
  signname: string;
  password: string;
}) => {
  const navigation = useNavigation<any>();
  const { openModal } = useModalStore();

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
      openModal({
        id: "login-error-modal",
        content: <LoginErrorModal />,
        footer: <LoginErrorModalFooter />,
      });
    }
  };

  return (
    <Button
      title="로그인"
      containerStyle={styles.loginButton}
      textStyle={styles.buttonText}
      onPress={onSubmitLogin}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default PostLoginButton;
