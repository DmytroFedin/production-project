import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

const notification: Notification = {
  description: '123',
  id: '1',
  title: '1234',
  href: '/',
};

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification, id: '1' },
        { ...notification, id: '2' },
        { ...notification, id: '3' },
        { ...notification, id: '4' },

      ],
    },
  ],
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification, id: '1' },
        { ...notification, id: '2' },
        { ...notification, id: '3' },
        { ...notification, id: '4' },

      ],
    },
  ],
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
};
Green.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notification, id: '1' },
        { ...notification, id: '2' },
        { ...notification, id: '3' },
        { ...notification, id: '4' },

      ],
    },
  ],
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];

export const isLoading = Template.bind({});
isLoading.args = {
};
isLoading.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      delay: 1000000,
      response: [
        { ...notification, id: '1' },
        { ...notification, id: '2' },
        { ...notification, id: '3' },
        { ...notification, id: '4' },

      ],
    },
  ],
};
isLoading.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
