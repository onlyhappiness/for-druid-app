import { Modal, Text, View } from "react-native";

// https://reactnative.dev/docs/modal
export default ({ open }) => {
  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View>
        <Text>나와</Text>
      </View>
    </Modal>
  );
};
