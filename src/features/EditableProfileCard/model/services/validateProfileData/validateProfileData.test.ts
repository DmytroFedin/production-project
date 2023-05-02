import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileErrors } from '../../const/const';
import { validateProfileData } from './validateProfileData';

const data = {
  firstname: 'fgfg',
  age: 22,
  city: 'Poltava',
  country: Country.Ukraine,
  currency: Currency.UAH,
  lastname: 'ggg',
  username: 'ggg',
};
describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({ });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_USER_AGE,
      ValidateProfileErrors.INCORRECT_USER_COUNTRY,
    ]);
  });
});
