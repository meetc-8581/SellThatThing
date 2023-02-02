import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import CustomGredient from "../components/CustomGredient/CustomGredient";

function WelcomeScreen() {
  return (
    // <LinearGradient
    //   colors={["#1c2837", "#2d4059", "#3e587b"]}
    //   start={{ x: 0, y: 1 }}
    //   end={{ x: 1, y: 0 }}
    //   style={styles.background}
    //   // blurRadius={10}
    //   // resizeMode="cover"
    //   // source={require("../assets/background1.png")}
    // >
    <CustomGredient style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-gold.png")}
        />
        <Text style={styles.title}>Sell that Thing</Text>
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </CustomGredient>
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    // flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 88,
    height: 116,
  },
  logoContainer: {
    position: "absolute",
    top: 250,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
    paddingVertical: 10,
    textTransform: "uppercase",
    color: colors.primary,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 5,
    textTransform: "uppercase",
    color: colors.primary,
  },
});

export default WelcomeScreen;
