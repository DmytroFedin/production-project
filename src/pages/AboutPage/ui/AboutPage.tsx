import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <h2>
      {t('AboutPage_header')}
    </h2>
  );
};

export default AboutPage;
