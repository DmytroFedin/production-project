import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

// First, create the thunk
export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
  >(
    'profile/updateProfileData',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;

      const formData = getProfileForm(getState());
      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>('/profile', formData);
        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (error) {
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    },
  );
