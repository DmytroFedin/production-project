import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
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
    <ListBox
      ariaLabel="Country select button"
      items={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      defaultValue={t('Country_change_select')}
      direction="top-right"
      label={t('Country_change_select')}
    />
  );
});
