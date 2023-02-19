import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about-20_20.svg';
import MainIcon from 'shared/assets/icons/main-20_20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [fullview, isFullview] = useState(false);

  const toggleSidebar = () => {
    isFullview((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        { [cls.Fullview]: fullview },
        [className, cls.Sidebar__opened],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        className={cls.fullviewBtn}
        onClick={toggleSidebar}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {fullview ? '<' : '>'}
      </Button>
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.main}>
          <div className={cls.icon}>
            <MainIcon />
          </div>
          <span className={cls.link}>
            {t('LinkMain')}
          </span>
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.about}>
          <div className={cls.icon}>
            <AboutIcon />
          </div>
          <span className={cls.link}>
            {t('LinkAbout')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <LanguageSwitcher short={!fullview} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
