import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
};

export const RowGap5 = Template.bind({});
RowGap5.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  gap: '5',
};

export const RowGap10 = Template.bind({});
RowGap10.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  gap: '10',
};

export const RowGap15 = Template.bind({});
RowGap15.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  gap: '15',
};

export const RowGap30 = Template.bind({});
RowGap30.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  gap: '30',
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  direction: 'column',
};

export const ColumnGap15 = Template.bind({});
ColumnGap15.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  gap: '15',
  direction: 'column',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  align: 'end',
  direction: 'column',
};

export const RowJustifyEnd = Template.bind({});
RowJustifyEnd.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
  justify: 'end',
};

export const Dark = Template.bind({});
Dark.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  children: (
    <>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </>
  ),
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];
