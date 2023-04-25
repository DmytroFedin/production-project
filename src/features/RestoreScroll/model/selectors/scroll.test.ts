import { StateSchema } from '@/app/providers/StoreProvider';
import { getScroll, getScrollByPath } from './scroll';

describe('scroll.test', () => {
  const path = '/articles';
  const testValue = { '/articles': 567 };
  test('should return scroll', () => {
    const state: DeepPartial<StateSchema> = {
      scroll: {
        scroll: testValue,
      },
    };
    expect(getScroll(state as StateSchema)).toEqual(testValue);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      scroll: {

      },
    };
    expect(getScroll(state as StateSchema)).toEqual(undefined);
  });

  test('should return scroll by path', () => {
    const state: DeepPartial<StateSchema> = {
      scroll: {
        scroll: testValue,
      },
    };
    expect(getScrollByPath(state as StateSchema, path)).toEqual(testValue['/articles']);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      scroll: {
        scroll: {

        },
      },
    };
    expect(getScrollByPath(state as StateSchema, path)).toEqual(0);
  });
});
