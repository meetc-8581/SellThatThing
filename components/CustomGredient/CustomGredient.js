import { LinearGradient } from "expo-linear-gradient";
import React from "react";

function CustomGredient({ children, style }) {
  return (
    <LinearGradient
      colors={["#1c2837", "#2d4059", "#3e587b"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}

export default CustomGredient;
