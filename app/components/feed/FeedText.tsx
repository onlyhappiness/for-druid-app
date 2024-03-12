import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { IBoard } from "@/types/board";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FeedText = ({ item, type }: { item: IBoard; type?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // 더보기 버튼
  const renderCollapsedText = () => {
    return (
      <>
        <Text style={styles.content}>
          {item?.content.length > 80
            ? item?.content.substring(0, 80) + "..."
            : item?.content}
        </Text>

        {item?.content.length > 80 && (
          <TouchableOpacity style={{ marginTop: 8 }} onPress={toggleExpanded}>
            <Text style={{ color: COLOR.grayDark }}>더보기</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  // 줄이기
  const renderExpandedText = () => {
    return (
      <>
        <Text style={styles.content}>{item?.content}</Text>
        <TouchableOpacity style={{ marginTop: 8 }} onPress={toggleExpanded}>
          <Text style={{ color: COLOR.grayDark }}>접기</Text>
        </TouchableOpacity>
      </>
    );
  };

  const detailText = () => {
    return <Text style={styles.content}>{item?.content}</Text>;
  };

  return (
    <View style={{ paddingHorizontal: 16 }}>
      {type !== "DETAIL" && isExpanded
        ? renderExpandedText()
        : renderCollapsedText()}

      {type === "DETAIL" && detailText()}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontFamily: "Pretendard-Light",
    fontSize: FONT.base,
  },
});

export default FeedText;
