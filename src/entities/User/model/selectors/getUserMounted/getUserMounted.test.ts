import { StateSchema } from 'app/providers/StoreProvider';
import { getUserMounted } from './getUserMounted';

describe('getUserAuthData.test', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        mounted: true,
      },
    };
    expect(getUserMounted(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {

      },
    };
    expect(getUserMounted(state as StateSchema)).toEqual(undefined);
  });
});
