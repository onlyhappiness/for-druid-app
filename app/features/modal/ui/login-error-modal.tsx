import Button from "@/shared/ui/Button";
import { Text, View } from "react-native";
import useModalStore from "../model/modalStore";

const LoginErrorModal = () => {
  return (
    <View>
      <Text>아이디 혹은 비밀번호를 다시 확인해주세요.</Text>
    </View>
  );
};

export const LoginErrorModalFooter = () => {
  const { closeModal } = useModalStore();

  return (
    <Button
      title="확인"
      onPress={() => {
        closeModal({ id: "login-error-modal" });
      }}
    />
  );
};

export default LoginErrorModal;
