import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: <Text text="text" title="text text" />,
};
Primary.decorators = [StoreDecorator({})];

export const Outlined = Template.bind({});
Outlined.args = {
  children: <Text text="text" title="text text" />,
  theme: CardTheme.OUTLINED,
};
Outlined.decorators = [StoreDecorator({})];
