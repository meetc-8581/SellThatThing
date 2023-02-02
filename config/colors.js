let theme;
theme = "dark";
theme = "light";

const colors =
  theme === "dark"
    ? {
        // // dark theme
        primary: "#ffd460",
        secondary: "#ffe293",
        tertiary: "#ffc62d",
        accent: "#3685B5",
        lightAccent: "#9c823c",
        darkAccent: "#061826",
        background: "#f8f4f4",
        backgroundLight: "#ffe29310",
        backgroundTransparent: "#00000010",
        white: "#fff",
        black: "#000",
        mediumGrey: "#6e6969",
        lightGrey: "#f8f4f4",
        darkGrey: "#0c0c0c",
        danger: "#ff5252",
        gredientStart: "#1c2837d1",
        gredientMid: "#2d4059d1",
        gredientEnd: "#3e587bd1",
      }
    : {
        // // light theme
        primary: "#0471A6",
        secondary: "#FF8599",
        tertiary: "#97F9F9",
        accent: "#3685B5",
        darkAccent: "#061826",
        lightAccent: "#6e6969",
        background: "#fff",
        backgroundLight: "#f5f5f5",
        backgroundTransparent: "#00000010",
        white: "#fff",
        black: "#000",
        mediumGrey: "#6e6969",
        lightGrey: "#f8f4f4",
        darkGrey: "#0c0c0c",
        danger: "#ff5252",
        gredientStart: "#fff",
        gredientMid: "#fff",
        gredientEnd: "#fff",
      };

export default colors;
