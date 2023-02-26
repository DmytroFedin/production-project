import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string,
  onChange?: (value: string) => void,
  isOpen?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    title,
    isOpen,
    ...otherProps
  } = props;

  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      focusRef.current.focus();
    }
  }, [isOpen]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {title
      && (
        <div className={cls.title}>
          {`${title}>`}
        </div>
      )}
      <input
        ref={focusRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        {...otherProps}
      />
    </div>
  );
});
