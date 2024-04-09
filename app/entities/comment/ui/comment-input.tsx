import CommentButton from "@/features/post-comment/ui/post-comment-button";
import Avatar from "@/shared/ui/Avatar";
import Input from "@/shared/ui/Input";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const CommentInput = () => {
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Avatar />

      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Input
          placeholder="댓글을 입력해주세요."
          value={content}
          onChangeText={setContent}
        />
      </View>

      <CommentButton content={content} setContent={setContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 10,
  },
});

export default CommentInput;
