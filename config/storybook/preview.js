import { withRouter } from 'storybook-addon-react-router-v6';
import { Theme } from '../../src/shared/const/theme';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

import i18n from './i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
      { name: 'dark', class: Theme.DARK, color: '#0e0e75' },
      { name: 'green', class: Theme.GREEN, color: '#83b429' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ua: 'Українська',
  },
};

export const decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator, withRouter, SuspenseDecorator];
