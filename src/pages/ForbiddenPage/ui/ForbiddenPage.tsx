import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo(({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.ForbiddenPage, {}, [className])}>
      {t('User_access_denied')}
    </div>
  );
});
