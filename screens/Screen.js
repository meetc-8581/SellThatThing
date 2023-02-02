import React from "react";
import { Platform, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export default Screen;
