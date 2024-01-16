import { StyleSheet, Text, View } from "react-native";

export default () => {
  return (
    // <DefaultLayout title="로그인">
    <View style={styles.container}>
      <Text>나와</Text>
    </View>
    // </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
