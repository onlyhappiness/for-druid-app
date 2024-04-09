import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import Button from "@/shared/ui/Button";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import usePostComment from "../api/postComment";

const CommentButton = ({
  content,
  setContent,
}: {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { params } = useRoute<any>();

  const postComment = usePostComment();
  const onClickPostComment = () => {
    if (content.trim().length === 0) {
      console.log("비었음");
    }

    const req = { content };

    postComment.mutateAsync({ id: params.id, req }).then(() => {
      setContent("");
    });
  };

  return (
    <Button
      title="등록"
      containerStyle={styles.button}
      textStyle={styles.buttonText}
      onPress={onClickPostComment}
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