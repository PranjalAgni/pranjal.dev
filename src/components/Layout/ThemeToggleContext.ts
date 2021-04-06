import React from "react";
import { Theme } from "./theme";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeToggleContext = React.createContext<ThemeContextType>({
  theme: Theme.Light,
  toggleTheme: () => {},
});

export default ThemeToggleContext;
