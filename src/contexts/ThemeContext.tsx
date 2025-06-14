// contexts/ThemeContext.tsx
import { createContext, useState, useContext } from "react";

// テーマの状態を管理する Context
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Context を利用するためのカスタムフック
export const useTheme = () => useContext(ThemeContext);
