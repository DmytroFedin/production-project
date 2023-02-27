import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  isDone?: boolean;
  onClose?: () => void;
  delay?: number;
}

export const Modal = (props: ModalProps) => {
  const ANIMATION_DELAY = 350;
  const {
    className,
    children,
    isOpen,
    isDone,
    delay = ANIMATION_DELAY,
    onClose,
  } = props;
  const dispatch = useDispatch();

  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [cls.isOpening]: isOpening,
    [cls.opened]: (!isOpening && isOpen),
    [cls.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, delay);
    }
  }, [onClose, delay]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
      timerRef.current = setTimeout(() => {
        setIsOpening(false);
      }, delay);
    }
  }, [isOpen, delay]);

  useEffect(() => {
    if (isDone) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
        dispatch(loginActions.resetDoneStatus());
      }, delay);
    }
  }, [isDone, dispatch, onClose, delay]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
