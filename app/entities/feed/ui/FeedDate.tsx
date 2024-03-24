import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { Text, View } from "react-native";
import { daysAgo } from "../lib/format-day-ago";
import { IFeedCard } from "../model/feedcard";

const FeedDate = ({ item }: { item: IFeedCard }) => {
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
