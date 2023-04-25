import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../const/const';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const {
    firstname,
    lastname,
    age,
    avatar,
    city,
    country,
    currency,
    username,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_COUNTRY);
  }

  return errors;
};
