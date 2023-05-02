import { MutableRefObject, useCallback, useRef } from 'react';

/**
 * The debounced value will only reflect the latest value when the useDebounce hook has not been called for the specified time period
 * @param callback function to be done
 * @param delay time in ms during which action will restart it
 */

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
