import { Modal, Text, View } from "react-native";

// https://reactnative.dev/docs/modal
interface IModal {
  open: boolean;
  icon?: any;
  title: string;
  content: string;
  submit: any;
  onSubmit?: any;
  cancel?: any;
  onCancel?: any;
}

export default ({
  open,
  icon,
  title,
  content,
  submit,
  onSubmit,
  cancel,
  onCancel,
}: IModal) => {
  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View>
        {icon}
        <Text>{title}</Text>
        <Text>{content}</Text>

        <View>{submit}</View>
        <View>{cancel}</View>
      </View>
    </Modal>
  );
};
