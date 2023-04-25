import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Drawer } from './Drawer';

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: <span>123</span>,
  isOpen: true,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  children: <span>123</span>,
  isOpen: true,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  children: <span>123</span>,
  isOpen: true,
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
