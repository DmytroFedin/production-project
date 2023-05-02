import {
  ButtonHTMLAttributes,
  memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  OUTLINED_RED = 'outlined_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize
  disabled? :boolean
  children: ReactNode;
  fullWidth?: boolean;
  ariaLabel: string;
}

/**
 * Element for custom button
 * @param className additional className from parent
 * @param theme visual appearence of the element
 * @param square make button square
 * @param size size of the button
 * @param disabled make button disabled
 * @param children body of the button
 * @param fullWidth make button width: 100%
 */

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    fullWidth,
    ariaLabel,
    theme = ButtonTheme.OUTLINED,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      aria-label={ariaLabel}
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
