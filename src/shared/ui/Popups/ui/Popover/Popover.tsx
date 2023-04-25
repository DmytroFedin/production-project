import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import PopupCls from '../../styles/popups.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const {
    className, trigger, direction = 'bottom-right', children,
  } = props;
  return (
    <HPopover className={PopupCls.popups}>
      <HPopover.Button as="div" className={PopupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, [className, PopupCls[direction]])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
