import { COLOR } from "@/shared/consts/color";
import { FONT } from "@/shared/consts/typography";
import { StyleSheet, Text, View } from "react-native";

const FollowList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>게시물</Text>
        <Text style={styles.button}>2</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.title}>팔로워</Text>
        <Text style={styles.button}>2</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.title}>팔로잉</Text>
        <Text style={styles.button}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    gap: 30,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Pretendard-Regular",
    fontSize: FONT.small,
    color: COLOR.blackLight,
  },
  button: {
    marginTop: 10,
    fontSize: FONT.base,
    fontFamily: "Pretendard-SemiBold",
  },
});

export default FollowList;
