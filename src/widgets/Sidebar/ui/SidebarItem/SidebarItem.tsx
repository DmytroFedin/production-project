import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType
  fullview: boolean
  authOnly?: boolean
}

export const SidebarItem = memo(({ item, fullview, authOnly }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      className={classNames(cls.item, { [cls.Fullview]: fullview })}
    >
      <div className={cls.icon}>
        <item.Icon />
      </div>
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
