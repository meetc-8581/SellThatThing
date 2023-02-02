import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import CustomGredient from "./CustomGredient";
import defaultStyles from "../config/styles";

function AppTextInput({ iconName, ...otherProps }) {
  return (
    <CustomGredient>
      <View style={styles.container}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            color={colors.mediumGrey}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[defaultStyles.text, styles.textInput]}
          placeholder="Email"
          {...otherProps}
        />
      </View>
    </CustomGredient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {},
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
