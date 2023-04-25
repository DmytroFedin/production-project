import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CountrySelect } from './CountrySelect';
import { Country } from '../model/types/Country';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 250 }}><Story /></div>,
  ],
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: Country.Germany,
};

export const Green = Template.bind({});
Green.args = {
  value: Country.Germany,
};
Green.decorators = [ThemeDecorator(Theme.GREEN)];

export const Dark = Template.bind({});
Dark.args = {
  value: Country.Germany,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
