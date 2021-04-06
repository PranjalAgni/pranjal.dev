import { useCallback, useEffect, useState } from "react";
import { Theme } from "@components/Layout/theme";

const useDarkMode = (): [Theme, VoidFunction] => {
  const [theme, setTheme] = useState(Theme.Light);

  const setLocalStorage = (themeVal: string) =>
    localStorage.setItem("pranjal-theme", themeVal);

  const toggleTheme = (): void => {
    if (theme === Theme.Light) {
      setLocalStorage(Theme.Dark);
      setTheme(Theme.Dark);
    } else {
      setLocalStorage(Theme.Light);
      setTheme(Theme.Light);
    }
  };

  useEffect(() => {
    const currentTheme =
      (localStorage.getItem("pranjal-theme") as Theme) ?? theme;

    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
