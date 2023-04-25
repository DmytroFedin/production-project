import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useNotifications } from '../../api/NotificationsApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { t } = useTranslation();
  const { isLoading, data } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap="15" max className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width="100%" height="80px" border="10px" />
        <Skeleton width="100%" height="80px" border="10px" />
        <Skeleton width="100%" height="80px" border="10px" />
      </VStack>
    );
  }
  return (
    <VStack gap="15" max className={classNames(cls.NotificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
