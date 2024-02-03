import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { Modal, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

// https://reactnative.dev/docs/modal
// https://bi.spoqa.com/ui.html
interface IModal {
  open: boolean;
  title?: string;
  content: string;

  onConfirm?: any;
  onCancel?: any;

  confirmText?: string;
  cancelText?: string;
}

export default ({
  open,
  title,
  content,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}: IModal) => {
  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.top}>
            {title && <Text>{title}</Text>}
            <Text>{content}</Text>
          </View>

          <View style={styles.footer}>
            <Button
              title={confirmText || "확인"}
              onPress={onConfirm ? onConfirm : onCancel}
              containerStyle={
                cancelText
                  ? [styles.button, { marginRight: 10 }]
                  : styles.button
              }
              textStyle={styles.buttonText}
            />
            {cancelText && (
              <Button
                title={cancelText}
                onPress={onCancel}
                containerStyle={[styles.button]}
                textStyle={styles.buttonText}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
  },
  top: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    backgroundColor: COLOR.green,
  },
  buttonText: {
    fontSize: FONT.base,
    color: "white",
  },
});
