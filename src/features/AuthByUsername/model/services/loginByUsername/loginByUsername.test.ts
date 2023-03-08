import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('login success', async () => {
    const testValue = { username: '123', id: '1' };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: testValue }));
    const result = await thunk.callThunk({ username: '123', password: '123' });
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(testValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(testValue);
  });

  test('login error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
