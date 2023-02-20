import { UseTheme, Theme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();
  console.log(theme);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
