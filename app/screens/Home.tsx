import FeedCard from "@/components/feed/FeedCard";
import ModalProvider from "@/components/modal/ModalProvider";
import Bottom from "@/components/shared/Bottom";
import Button from "@/components/shared/Button";
import { useModalActions } from "@/data/modalStore";
import { useUserInfoActions } from "@/data/userStore";
import HomeLayout from "@/layouts/HomeLayout";
import { COLOR } from "@/theme/color";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation<any>();
  const { openModal, closeModal } = useModalActions();

  const { clearUser } = useUserInfoActions();

  return (
    <HomeLayout extraChildren={<ModalProvider id={"test-modal"} />}>
      <FlatList
        data={posts}
        renderItem={FeedCard}
        keyExtractor={(item) => item?.id}
      />

      <Bottom>
        <Button
          title="테스트"
          onPress={() => {
            // clearUser();
            openModal({
              id: "test-modal",
              content: "테스트",
              onConfirm: () => {
                // closeModal({ id: "test-modal" });
                navigation.navigate("Search");
              },
            });
          }}
          containerStyle={{ backgroundColor: COLOR.green }}
        />
      </Bottom>
    </HomeLayout>
  );
};
