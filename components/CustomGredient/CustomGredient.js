import { LinearGradient } from "expo-linear-gradient";
import React from "react";

function CustomGredient({ children, style, reverse = false }) {
  return (
    <LinearGradient
      colors={["#1c2837", "#2d4059", "#3e587b"]}
      start={reverse ? { x: 1, y: 0 } : { x: 0, y: 1 }}
      end={reverse ? { x: 0, y: 1 } : { x: 1, y: 0 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}

export default CustomGredient;
