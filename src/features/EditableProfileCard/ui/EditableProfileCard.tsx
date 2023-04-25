import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { validKeyboardKeys, ValidateProfileErrors } from '../model/const/const';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCardHeader } from './EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
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
      <VStack max gap="15" align="start">
        <EditableProfileCardHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorsTranslate[err]}
            key={err}
            data-testid="EditableProfileCard.Error"
          />
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
      </VStack>
    </DynamicModuleLoader>
  );
};
