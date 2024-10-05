import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    const root = document.documentElement;
    root.style.setProperty("--color-brand-100", `var(--color-${newTheme}-100)`);
    root.style.setProperty("--color-brand-200", `var(--color-${newTheme}-200)`);
    root.style.setProperty("--color-brand-300", `var(--color-${newTheme}-300)`);
    root.style.setProperty("--color-brand-400", `var(--color-${newTheme}-400)`);
    root.style.setProperty("--color-brand-500", `var(--color-${newTheme}-500)`);
    root.style.setProperty("--color-brand-600", `var(--color-${newTheme}-600)`);
    root.style.setProperty("--color-brand-700", `var(--color-${newTheme}-700)`);
    root.style.setProperty("--color-brand-800", `var(--color-${newTheme}-800)`);
    root.style.setProperty("--color-brand-900", `var(--color-${newTheme}-900)`);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
