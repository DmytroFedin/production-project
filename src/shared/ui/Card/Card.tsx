import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
}

export const Card = ({
  className, onCardClick, children, theme = CardTheme.NORMAL, ...otherProps
}: CardProps) => (
  <div
    onClick={onCardClick}
    className={classNames(cls.Card, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </div>
);
