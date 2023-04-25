import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => onChange?.(value as Currency), [onChange]);
  return (
    <ListBox
      items={options}
      onChange={onChangeHandler}
      defaultValue={t('Currency_change_select')}
      value={value}
      readonly={readonly}
      direction="top-right"
      label={t('Currency_change_select')}
    />
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Currency_change_select')}
    //   options={options}
    //   value={value}
    //   onChange={onChangeHandler}
    //   readonly={readonly}
    // />
  );
});
