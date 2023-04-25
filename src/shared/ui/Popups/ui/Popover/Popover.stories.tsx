import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button } from '../../../Button/Button';
import { Popover } from './Popover';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button>test</Button>,
  children: <span>123</span>,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button>test</Button>,
  children: <span>123</span>,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  trigger: <Button>test</Button>,
  children: <span>123</span>,
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
