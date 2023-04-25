import React, {
  InputHTMLAttributes, KeyboardEvent, memo, MutableRefObject, useEffect, useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'onKeyDown'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number,
  onChange?: (value: string) => void,
  isOpen?: boolean,
  readonly?: boolean,
  onKeyDown?:(e: KeyboardEvent<HTMLInputElement>) => void,
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    title,
    readonly,
    onKeyDown,
    isOpen,
    ...otherProps
  } = props;

  const focusRef = useRef<HTMLInputElement>(null) as MutableRefObject<any>;

  useEffect(() => {
    if (isOpen) {
      focusRef.current.focus();
    }
  }, [isOpen]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <HStack gap="5" max className={classNames('', {}, [className])}>
      {title
      && (
        <span className={cls.title}>
          {`${title}>`}
        </span>
      )}
      <input
        readOnly={readonly}
        ref={focusRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.input, mods, [className])}
        onKeyDown={onKeyDown}
        {...otherProps}
      />
    </HStack>
  );
});
