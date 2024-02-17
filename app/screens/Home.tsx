import FeedCard from "@/components/feed/FeedCard";
import Bottom from "@/components/shared/Bottom";
import Button from "@/components/shared/Button";
import { useUserInfoActions } from "@/data/userStore";
import HomeLayout from "@/layouts/HomeLayout";
import { COLOR } from "@/theme/color";
import { FlatList } from "react-native";

const posts = [
  {
    id: "1",
    title: "First Post",
    imageUrl:
      "https://i.pinimg.com/564x/12/20/05/12200579b5389850dbfe2990fd906722.jpg",
  },
  {
    id: "2",
    title: "Second Post",
    imageUrl: "https://example.com/someotherimage.jpg",
  },
  {
    id: "3",
    title: "3 Post",
    imageUrl: "https://example.com/someotherimage.jpg",
  },
  {
    id: "4",
    title: "4 Post",
    imageUrl: "https://example.com/someotherimage.jpg",
  },
  {
    id: "5",
    title: "5 Post",
    imageUrl: "https://example.com/someotherimage.jpg",
  },
];

export default () => {
  const { clearUser } = useUserInfoActions();

  return (
    <HomeLayout>
      <FlatList
        data={posts}
        renderItem={FeedCard}
        keyExtractor={(item) => item?.id}
      />

      <Bottom>
        <Button
          title="테스트"
          onPress={() => {
            clearUser();
          }}
          containerStyle={{ backgroundColor: COLOR.green }}
        />
      </Bottom>
    </HomeLayout>
  );
};
