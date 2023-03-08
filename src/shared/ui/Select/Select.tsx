import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      value={opt.value}
      key={opt.value}
      className={cls.option}
    >
      {opt.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  console.log(readonly);

  const mods: Mods = {};
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
