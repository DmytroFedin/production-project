import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: <Text text="text" title="text text" />,
};
Primary.decorators = [StoreDecorator({})];

export const Outlined = Template.bind({});
Outlined.args = {
  children: <Text text="text" title="text text" />,
  theme: CardTheme.OUTLINED,
};
Outlined.decorators = [StoreDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: <Text text="text" title="text text" />,
};
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: <Text text="text" title="text text" />,
  theme: CardTheme.OUTLINED,
};
OutlinedDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const PrimaryGreen = Template.bind({});
PrimaryGreen.args = {
  children: <Text text="text" title="text text" />,
};
PrimaryGreen.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];

export const OutlinedGreen = Template.bind({});
OutlinedGreen.args = {
  children: <Text text="text" title="text text" />,
  theme: CardTheme.OUTLINED,
};
OutlinedGreen.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
