import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('MainPage_header')}
    </h2>
  );
};

export default MainPage;
