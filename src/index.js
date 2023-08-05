import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GloblStyles";
import ModeProvider from "./context/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
);
