import { useContext } from 'react';
import { ThemeContext } from '../../../../app/providers/themeProvider/lib/themeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

export interface UseThemeResult {
  toggleTheme: () => void,
  theme: Theme;
}
/**
 * Hook to switch app themes
 * @returns current theme and function to change it
 */
export function UseTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme = theme;
    switch (theme) {
    case Theme.DARK: {
      newTheme = Theme.LIGHT;
      break;
    }
    case Theme.LIGHT: {
      newTheme = Theme.GREEN;
      break;
    }
    case Theme.GREEN: {
      newTheme = Theme.DARK;
      break;
    }
    default: newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
