import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export interface loginByUsernameProps {
  username: string
  password: string
}

// First, create the thunk
export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;

      try {
        const response = await extra.api.post('/login', authData);

        if (!response.data) {
          throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

        return response.data;
      } catch (error) {
        return rejectWithValue('error');
      }
    },
  );
