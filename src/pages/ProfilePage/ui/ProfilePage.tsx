import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData, getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileErrors,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

export enum validKeyboardKeys {
  BACKSPACE = 'Backspace',
  ARROWRIGHT = 'ArrowRight',
  ARROWLEFT = 'ArrowLeft',
  }

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');

  const validateErrorsTranslate = {
    [ValidateProfileErrors.SERVER_ERROR]: t('Server_error'),
    [ValidateProfileErrors.INCORRECT_USER_AGE]: t('Incorrect_user_age_error'),
    [ValidateProfileErrors.INCORRECT_USER_COUNTRY]: t('Incorrect_user_country_error'),
    [ValidateProfileErrors.NO_DATA]: t('No_data_error'),
    [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Incorrect_user_data_error'),
  };

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<string>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (
      !/[0-9]/.test(event.key)
    && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
    ) {
      event.preventDefault();
    }
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text theme={TextTheme.ERROR} text={validateErrorsTranslate[err]} key={err} />
        ))}
        <ProfileCard
          readonly={readonly}
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeLastName={onChangeLastName}
          onChangeFirstName={onChangeFirstName}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          onKeyDown={onKeyDown}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
