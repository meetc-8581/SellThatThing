import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

function ListItem({ title, image, subTitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.profile}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  profile: {
    marginTop: 10,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.mediumGrey,
    fontSize: 15,
  },
});
export default ListItem;
