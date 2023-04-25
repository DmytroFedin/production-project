import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Значення',
  options: [
    {
      value: '123',
      content: '123',
    },
    {
      value: '1234',
      content: '1234',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Значення',
  options: [
    {
      value: '123',
      content: '123',
    },
    {
      value: '1234',
      content: '1234',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  label: 'Значення',
  options: [
    {
      value: '123',
      content: '123',
    },
    {
      value: '1234',
      content: '1234',
    },
  ],
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
