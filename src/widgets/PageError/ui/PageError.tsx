import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Error_Boundary_Message')}</p>
      <Button
        ariaLabel="Refresh page button"
        theme={ButtonTheme.OUTLINED}
        onClick={refreshPage}
      >
        {t('refresh_Page_Btn')}

      </Button>
    </div>
  );
});
