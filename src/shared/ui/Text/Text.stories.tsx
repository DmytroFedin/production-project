import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
};

export const Inverted = Template.bind({});
Inverted.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  theme: TextTheme.INVERTED,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'fgfgfgf',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'fgdgdfgdfgd',
};

export const Error = Template.bind({});
Error.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'fgfgfgf',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'fgdgdfgdfgd',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  size: TextSize.L,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  size: TextSize.S,
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkInverted = Template.bind({});
DarkInverted.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  theme: TextTheme.INVERTED,
};
DarkInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const GreenInverted = Template.bind({});
GreenInverted.args = {
  title: 'fgfgfgf',
  text: 'fgdgdfgdfgd',
  theme: TextTheme.INVERTED,
};
GreenInverted.decorators = [ThemeDecorator(Theme.GREEN)];
