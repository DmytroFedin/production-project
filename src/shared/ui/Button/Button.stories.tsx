import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'text',
  theme: ThemeButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'text',
  theme: ThemeButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
