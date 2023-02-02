import { LinearGradient } from "expo-linear-gradient";
import React from "react";

function CustomGredient({ children, style, reverse = false }) {
  return (
    <LinearGradient
      colors={["#1c2837d1", "#2d4059d1", "#3e587bd1"]}
      start={reverse ? { x: 1, y: 0 } : { x: 0, y: 1 }}
      end={reverse ? { x: 0, y: 1 } : { x: 1, y: 0 }}
      style={[style, { flex: 1 }]}
    >
      {children}
    </LinearGradient>
  );
}

export default CustomGredient;
