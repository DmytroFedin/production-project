import { useCallback, useRef } from 'react';
/**
 * Call a function only once in a given period of time, and delay the execution based on a given delay after the last invocation
 * @param callback function called
 * @param delay time in ms
 */
export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
