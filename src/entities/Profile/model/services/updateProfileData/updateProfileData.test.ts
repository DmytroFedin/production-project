import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrors } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

const data = {
  firstname: 'fgfg',
  age: 22,
  city: 'Poltava',
  country: Country.Ukraine,
  currency: Currency.UAH,
  lastname: 'ggg',
  username: 'ggg',
};
describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
});
