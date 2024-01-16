import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// icon
// import EntypoIcon from 'react-native-vector-icons/Entypo';

interface IDetailHeader {
  title: string | undefined;
}

export default ({ title }: IDetailHeader) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.left} onPress={() => navigation.goBack()}>
        {/* <EntypoIcon name="chevron-left" size={24} /> */}
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.right} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    paddingLeft: 20,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
});
