import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen() {
  return (
    <View>
      <View style={styles.continer}></View>
      <View style={styles.closeIcon}></View>
      <Image
        source={require("../assets/couch.jpg")}
        style={styles.deleteIcon}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {},
  closeIcon: {},
  deleteIcon: {},
});
export default ViewImageScreen;
