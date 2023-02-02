import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      android: { fontFamily: "Roboto", fontSize: 20 },
      ios: { fontFamily: "Avenir", fontSize: 18 },
      // web: { fontFamily: "Ariel", fontSize: 30 },
    }),
  },
});

export default styles;
