import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const notification: Notification = {
  description: '123',
  id: '1',
  title: '1234',
  href: '/',
};

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  item: notification,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  item: notification,
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  item: notification,
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
