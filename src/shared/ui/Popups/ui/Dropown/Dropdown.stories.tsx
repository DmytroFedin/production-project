import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [
  //   (Story) => <AnimationProvider><Story /></AnimationProvider>,
  // ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <Button ariaLabel="">Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  trigger: <Button ariaLabel="">Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  trigger: <Button ariaLabel="">Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
  ],
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
