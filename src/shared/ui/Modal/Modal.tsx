import React, {
  ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  delay?: number;
}

export const Modal = (props: ModalProps) => {
  const ANIMATION_DELAY = 350;
  const {
    className,
    children,
    isOpen,
    delay = ANIMATION_DELAY,
    onClose,
  } = props;

  const { close, isClosing, isOpening } = useModal({ onClose, isOpen, animationDelay: delay });

  const mods: Mods = {
    [cls.isOpening]: isOpening,
    [cls.opened]: (!isOpening && isOpen),
    [cls.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
