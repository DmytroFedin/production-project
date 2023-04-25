import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  theme?: CardTheme
  onCardClick?: () => void
  max?: boolean;
}

export const Card = ({
  className, onCardClick, children, max, theme = CardTheme.NORMAL, ...otherProps
}: CardProps) => (
  <div
    onClick={onCardClick}
    className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </div>
);
