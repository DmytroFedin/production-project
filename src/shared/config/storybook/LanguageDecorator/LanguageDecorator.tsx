import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';
import i18n from '../../i18n/i18n';

export const LanguageDecorator = (Story: any) => (
  <Suspense fallback={<div>...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
