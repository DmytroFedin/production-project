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

/**
 * Element in a shape of a card
 * @param className additional className from parent
 * @param theme visual appearence of the element
 * @param children body of the card
 * @param onCardClick fuction activated onClick of the card
 * @param max to make card have width: 100%
 */

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
