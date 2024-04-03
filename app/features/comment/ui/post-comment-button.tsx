import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import Button from "@/shared/ui/Button";
import { StyleSheet } from "react-native";

const CommentButton = ({ content }: { content: string }) => {
  return (
    <Button
      title="등록"
      containerStyle={styles.button}
      textStyle={styles.buttonText}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.green,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: FONT.base,
    color: "white",
  },
});

export default CommentButton;
