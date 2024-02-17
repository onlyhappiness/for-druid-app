import { COLOR } from "@/theme/color";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto consectetur nisi atque eum, cum aut! Corrupti quasi maiores eius porro magni temporibus quod provident, doloribus, nam dolor autem iusto?`;

const FeedText = ({ type }: { type?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // 더보기 버튼
  const renderCollapsedText = () => {
    return (
      <>
        <Text>{text.length > 80 ? text.substring(0, 80) + "..." : text}</Text>

        {text.length > 80 && (
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
        <Text>{text}</Text>
        <TouchableOpacity style={{ marginTop: 8 }} onPress={toggleExpanded}>
          <Text style={{ color: COLOR.grayDark }}>접기</Text>
        </TouchableOpacity>
      </>
    );
  };

  const detailText = () => {
    return <Text>{text}</Text>;
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

export default FeedText;
