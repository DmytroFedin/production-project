import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  firstname: 'fgfg',
  age: 22,
  city: 'Poltava',
  country: Country.Ukraine,
  currency: Currency.UAH,
  lastname: 'ggg',
  username: 'ggg',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
    state as ProfileSchema,
    profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
    state as ProfileSchema,
    profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(profileReducer(
    state as ProfileSchema,
    profileActions.updateProfile({ username: '1234' }),
    )).toEqual({
      form: { username: '1234' },
    });
  });
});
