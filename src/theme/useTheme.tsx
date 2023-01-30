import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./themeContext";

export interface UseThemeresult {
  toggleTheme: () => void,
  theme: Theme;
}

export function UseTheme(): UseThemeresult {
  const { theme, setTheme } = useContext(ThemeContext);

  
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}