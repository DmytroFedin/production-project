import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('MainPage_header')}
    </h2>
  );
};

export default MainPage;
