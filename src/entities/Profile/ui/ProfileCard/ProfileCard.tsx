import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
  readonly?: boolean
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    readonly = true,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeUsername,
    onChangeAge,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    onKeyDown,
    isLoading,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Profile_error_title')}
          text={t('Profile_error_text')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.firstname}
          title={t('FirstName')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          title={t('Lastname')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          title={t('Age')}
          onChange={onChangeAge}
          readonly={readonly}
          onKeyDown={onKeyDown}
        />
        <Input
          value={data?.city}
          title={t('City')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          title={t('Username')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          title={t('Avatar')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      </div>
    </div>
  );
};
