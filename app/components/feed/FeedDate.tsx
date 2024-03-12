import { COLOR } from "@/theme/color";
import { FONT } from "@/theme/typography";
import { IBoard } from "@/types/board";
import { Text, View } from "react-native";
import { daysAgo } from "../../utils/func";

const FeedDate = ({ item }: { item: IBoard }) => {
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
      <Text
        style={{
          fontSize: FONT.base,
          fontFamily: "Pretendard-Regular",
          color: COLOR.blackLight,
        }}
      >
        {daysAgo(item.updatedAt)}일전
      </Text>
    </View>
  );
};

export default FeedDate;
