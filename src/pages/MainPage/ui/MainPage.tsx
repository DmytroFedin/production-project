import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('MainPage_header')}
    </h2>
  );
});

export default MainPage;
