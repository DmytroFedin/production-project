import { KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
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
      <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          title={t('Profile_error_title')}
          text={t('Profile_error_text')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack align="start" max gap="10" className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.firstname}
        title={t('FirstName')}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.Firstname"
      />
      <Input
        value={data?.lastname}
        title={t('Lastname')}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.Lastname"
      />
      <Input
        value={data?.age}
        title={t('Age')}
        onChange={onChangeAge}
        readonly={readonly}
        onKeyDown={onKeyDown}
        data-testid="ProfileCard.Age"
      />
      <Input
        value={data?.city}
        title={t('City')}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.City"
      />
      <Input
        value={data?.username}
        title={t('Username')}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid="ProfileCard.Username"
      />
      <Input
        value={data?.avatar}
        title={t('Avatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.Avatar"
      />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};
