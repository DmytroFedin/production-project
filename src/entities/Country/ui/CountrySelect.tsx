import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean
}

const options = [
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.United_Kingdom, content: Country.United_Kingdom },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => onChange?.(value as Country), [onChange]);
  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Country_change_select')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
