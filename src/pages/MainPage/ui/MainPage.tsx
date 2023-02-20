import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('MainPage_header')}
    </h2>
  );
};

export default MainPage;
