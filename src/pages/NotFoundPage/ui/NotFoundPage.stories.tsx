import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

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
