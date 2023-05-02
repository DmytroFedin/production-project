import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import PopupCls from '../../styles/popups.module.scss';

export interface ListBoxItem {
  value: string,
  content: ReactNode;
  disabled?: boolean
}

interface ListBoxProps {
  className?: string;
  items: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: <T extends string> (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string
  ariaLabel: string
}

export const ListBox = ({
  className, items, value, ariaLabel, defaultValue, onChange, readonly, direction = 'bottom-right', label,
}: ListBoxProps) => {
  const { t } = useTranslation();

  return (
    <HStack gap="5">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(PopupCls.popups, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button as="div">
          <Button ariaLabel={ariaLabel} disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [className, PopupCls[direction]])}>
          {items.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.option,
                    { [PopupCls.active]: active, [PopupCls.disabled]: item.disabled, [PopupCls.selected]: selected },
                    [className],
                  )}
                >
                  {item.content}
                </li>

              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
