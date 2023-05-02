import {
  useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}
/**
 * Hook to manage modal functionality
 * @param onClose function to close modal
 * @param isOpen boolean if element is open
 * @param animationDelay delay for animation before deleting modal from DOM
 * @returns booleans isOpening and isClosing that are changing to false after delay. Used to make animation on opening and closing.
 * @returns close function to close modal with a delay for animation
 */
export const useModal = (props: UseModalProps) => {
  const {
    onClose, isOpen, animationDelay,
  } = props;
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        setTimeout(() => {
          onClose();
        }, 10);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
      timerRef.current = setTimeout(() => {
        setIsOpening(false);
      }, animationDelay);
    }
  }, [isOpen, animationDelay]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isOpening,
    isClosing,
    close,
  };
};
