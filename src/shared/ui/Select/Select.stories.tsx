import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
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
