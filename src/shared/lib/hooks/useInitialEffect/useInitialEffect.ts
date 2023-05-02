import { useEffect } from 'react';

/**
 * useEffect that not triggers in tests
 * @param callback function to be done
 */

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
