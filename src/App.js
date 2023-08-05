import React from "react";
import { ThemeProvider } from "styled-components";
import { useMode } from "./context/ModeContext";
import { darkTheme, lightTheme } from "./styles/theme";
import Background from "./components/Background";
import OriginBallons from "./components/OriginBallons";

export default function App() {
  const { isDarkMode } = useMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <OriginBallons />
    </ThemeProvider>
  );
}
