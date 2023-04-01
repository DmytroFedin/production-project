import { UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data = {
  avatar: '',
  id: '1',
  username: 'Petya',
};

describe('userSlice.test', () => {
  test('test setAuthData', () => {
    const state: DeepPartial<UserSchema> = {
      authData: {
        avatar: '',
        id: '1',
        username: 'Vasya',
      },
    };
    expect(userReducer(
    state as UserSchema,
    userActions.setAuthData(data),
    )).toEqual({ authData: data });
  });

  test('test logOut', () => {
    const state: DeepPartial<UserSchema> = {
      authData: {
        avatar: '',
        id: '1',
        username: 'Vasya',
      },
    };
    expect(userReducer(
    state as UserSchema,
    userActions.logOut(),
    )).toEqual({ undefined });
  });

  test('test initAuthData', () => {
    const state: DeepPartial<UserSchema> = {
      authData: {
        avatar: '',
        id: '1',
        username: 'Vasya',
      },
    };
    expect(userReducer(
    state as UserSchema,
    userActions.initAuthData(data),
    )).toEqual({ authData: data, mounted: true });
  });
});
