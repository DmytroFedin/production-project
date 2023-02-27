import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsDone } from './getLoginIsDone';

describe('getLoginIsDone.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isDone: true,
      },
    };
    expect(getLoginIsDone(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsDone(state as StateSchema)).toEqual(false);
  });
});
