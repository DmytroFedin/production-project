import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <Button
      ariaLabel="Switch language button"
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'translate_Btn_short' : 'translate_Btn')}
    </Button>
  );
});
