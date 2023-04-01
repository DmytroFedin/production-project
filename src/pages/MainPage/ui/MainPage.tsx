import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

interface MainPageProps {
  className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
  const { t } = useTranslation();

  return (
    <Page>
      <h2>
        {t('MainPage_header')}
      </h2>
    </Page>
  );
});

export default MainPage;
