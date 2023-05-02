import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogOut = useCallback(() => {
    dispatch(userActions.logOut());
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // setIsAuthModal(false);
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }
  return (
    <Dropdown
      direction="bottom-left"
      trigger={<Avatar fallBackInverted size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('LinkAdminPanel'),
          href: getRouteAdminPanel(),
        }] : []),
        {
          content: t('LinkProfile'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('LogOutBtn'),
          onClick: onLogOut,
        },
      ]}
    />
  );
});
