import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({ className }: AboutPageProps) => {
  const { t } = useTranslation('about');

  return (
    <Page data-testid="AboutPage">
      <h2>
        {t('AboutPage_header')}
      </h2>
    </Page>
  );
});

export default AboutPage;
