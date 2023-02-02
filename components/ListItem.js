import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import CustomGredient from "./CustomGredient/CustomGredient";

function ListItem({ title, image, subTitle, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.backgroundLight}
          onPress={onPress}
        >
          <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.profile}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
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
