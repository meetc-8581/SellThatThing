import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.continer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        ></MaterialCommunityIcons>
      </View>
      <Image
        source={require("../assets/couch.jpg")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: { flex: 1, backgroundColor: colors.black },
  closeIcon: { position: "absolute", top: 40, left: 30 },
  deleteIcon: { position: "absolute", top: 40, right: 30 },
  image: { width: "100%", height: "100%", marginTop: 50 },
});
export default ViewImageScreen;
