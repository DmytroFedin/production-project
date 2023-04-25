import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-relative-path-checker/layer-imports
import { ThemeProvider } from '@/app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className="app">
      <StoryComponent />
    </div>
  </ThemeProvider>
);
