import Button from "@/shared/ui/Button";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import useModalStore from "../model/modalStore";

const LoginModal = () => {
  return (
    <View style={styles.container}>
      <Text>로그인 후 이용 가능합니다.</Text>
    </View>
  );
};

export const LoginModalFooter = () => {
  const { closeModal } = useModalStore();
  const navigation = useNavigation<any>();

  return (
    <Button
      title="확인"
      onPress={() => {
        closeModal({ id: "login-modal" });
        navigation.navigate("Login");
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default LoginModal;
