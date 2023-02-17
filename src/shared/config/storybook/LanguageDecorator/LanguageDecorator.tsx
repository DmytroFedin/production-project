import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';

export const LanguageDecorator = (Story: any) => (
  <Suspense fallback={<div>...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
