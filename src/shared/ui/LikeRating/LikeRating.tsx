import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LikeRating.module.scss';

interface LikeRatingProps {
  className?: string;
}

export const LikeRating = memo(({ className }: LikeRatingProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LikeRating, {}, [className])}>
      {t('')}
    </div>
  );
});
