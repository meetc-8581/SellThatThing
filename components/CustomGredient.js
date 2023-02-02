import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import colors from "../config/colors";

function CustomGredient({ children, style, reverse = false }) {
  return (
    <LinearGradient
      colors={[colors.gredientStart, colors.gredientMid, colors.gredientEnd]}
      start={reverse ? { x: 1, y: 0 } : { x: 0, y: 1 }}
      end={reverse ? { x: 0, y: 1 } : { x: 1, y: 0 }}
      style={[style, { flex: 1 }]}
    >
      {children}
    </LinearGradient>
  );
}

export default CustomGredient;
