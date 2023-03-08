import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation('about');

  return (
    <h2>
      {t('AboutPage_header')}
    </h2>
  );
});

export default AboutPage;
