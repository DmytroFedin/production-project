import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../model/types/currency';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 150 }}><Story /></div>,
  ],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: Currency.EUR,
};

export const Green = Template.bind({});
Green.args = {
  value: Currency.EUR,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Dark = Template.bind({});
Dark.args = {
  value: Currency.EUR,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
