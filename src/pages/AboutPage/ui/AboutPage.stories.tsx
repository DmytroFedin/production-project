import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
};
LightTheme.decorators = [StoreDecorator({})];

export const DarkTheme = Template.bind({});
DarkTheme.args = {
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const GreenTheme = Template.bind({});
GreenTheme.args = {
};
GreenTheme.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({})];
