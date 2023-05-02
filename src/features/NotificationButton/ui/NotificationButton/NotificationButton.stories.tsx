import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';
import { Notification } from '@/entities/Notification';

const notification: Notification = {
  description: '123',
  id: '1',
  title: '1234',
  href: '/',
};

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ paddingLeft: 550, paddingTop: 50 }}><Story /></div>,
    withMock,
  ],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
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

export const isLoading = Template.bind({});
isLoading.args = {};
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
isLoading.decorators = [StoreDecorator({})];
