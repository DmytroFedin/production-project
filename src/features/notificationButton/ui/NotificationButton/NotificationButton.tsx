import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { NotificationList } from '@/entities/Notification';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import NotificationIcon from '@/shared/assets/icons/notification-20_20.svg';

import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
  const { t } = useTranslation();
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const detectDevice = () => {
    const isMobile = window.matchMedia;
    if (!isMobile) return false;

    const device = isMobile('(pointer:coarse)');
    return device.matches;
  };

  useEffect(() => {
    const isMobile = detectDevice();
    setMobileView(isMobile);
  }, []);

  const trigger = (
    <Button ariaLabel="Open notifications button" onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  if (mobileView) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      direction="bottom-left"
      trigger={trigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
