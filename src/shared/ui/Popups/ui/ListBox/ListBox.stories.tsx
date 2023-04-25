import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ListBox } from './ListBox';

export default {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 150 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopRight = Template.bind({});
TopRight.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'top-right',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'top-left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'bottom-right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'bottom-left',
};

export const Dark = Template.bind({});
Dark.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'top-right',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  value: '123',
  items: [
    {
      content: '123',
      value: '123',
    },
    {
      content: '1234',
      value: '1234',
    },
    {
      content: '12345',
      value: '12345',
    },
  ],
  direction: 'top-right',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
