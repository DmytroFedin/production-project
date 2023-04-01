import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('success', () => {
    const data = {
      avatar: '',
      id: '1',
      username: 'Petya',
    };
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: data,
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {

      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
