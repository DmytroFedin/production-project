import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserRoles, isUserAdmin, isUserManager } from './getUserRoles';
import { UserRole } from '../../const/const';

describe('getUserRoles.test', () => {
  test('getUserRoles success', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.ADMIN],
        },
      },
    };
    expect(getUserRoles(state as StateSchema)).toEqual([UserRole.ADMIN]);
  });

  test('getUserRoles should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {

      },
    };
    expect(getUserRoles(state as StateSchema)).toEqual(undefined);
  });

  test('isUserAdmin success', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.ADMIN],
        },
      },
    };
    expect(isUserAdmin(state as StateSchema)).toEqual(true);
  });
  test('isUserAdmin should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {

      },
    };
    expect(isUserAdmin(state as StateSchema)).toEqual(false);
  });

  test('isUserManager success', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [UserRole.ADMIN],
        },
      },
    };
    expect(isUserManager(state as StateSchema)).toEqual(false);
  });
  test('isUserManager should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {

      },
    };
    expect(isUserManager(state as StateSchema)).toEqual(false);
  });
});
