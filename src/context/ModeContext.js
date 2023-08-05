import React, { createContext, useContext, useState } from "react";

const ModeContext = createContext(null);

const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;

export const useMode = () => useContext(ModeContext);
