import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './Pageerror.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Error_Boundary_Message')}</p>
      <Button onClick={refreshPage}>{t('refresh_Page_Btn')}</Button>
    </div>
  );
};
