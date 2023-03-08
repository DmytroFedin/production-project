import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_DATA',
  INCORRECT_USER_COUNTRY = 'INCORRECT_USER_DATA',
  SERVER_ERROR = 'INCORRECT_USER_DATA',
  NO_DATA = 'INCORRECT_USER_DATA',
}

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileErrors[]
}
