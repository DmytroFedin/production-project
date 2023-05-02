import { Menu } from '@headlessui/react';
import React, { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui/ui';
import cls from './Dropdown.module.scss';
import { Button, ButtonTheme } from '../../../Button/Button';
import { AppLink } from '../../../AppLink/AppLink';
import PopupCls from '../../styles/popups.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction: DropdownDirection
}

export const Dropdown = ({
  className, trigger, items, direction = 'bottom-right',
}: DropdownProps) => (
  <Menu as="div" className={classNames(PopupCls.popups, {}, [className])}>
    <Menu.Button className={PopupCls.trigger}>{trigger}</Menu.Button>
    <Menu.Items className={classNames(cls.menu, {}, [className, PopupCls[direction]])}>
      {items.map((item, index) => {
        const content = ({ active }: {active: boolean}) => (
          <Button
            ariaLabel="Open profile menu button"
            disabled={item.disabled}
            className={classNames(cls.item, { [PopupCls.active]: active }, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={item.onClick}
          >
            {item.content}
          </Button>
        );

        if (item.href) {
          return (
            <Menu.Item key={`dropdown-key-${index}`} as={AppLink} to={item.href} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={`dropdown-key-${index}`} as={Fragment} disabled={item.disabled}>
            {content}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
);
