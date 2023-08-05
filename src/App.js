import React from "react";
import { ThemeProvider } from "styled-components";
import { useMode } from "./context/ModeContext";
import { darkTheme, lightTheme } from "./styles/theme";
import Background from "./components/Background";

export default function App() {
  const { isDarkMode } = useMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Background />
    </ThemeProvider>
  );
}
