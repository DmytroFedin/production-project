import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
export const PrimarySelected = Template.bind({});
PrimarySelected.args = {
  selectedStars: 2,
};
PrimarySelected.decorators = [StoreDecorator({})];

export const Size100 = Template.bind({});
Size100.args = {
  size: 100,
};
Size100.decorators = [StoreDecorator({})];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const SelectedDark = Template.bind({});
SelectedDark.args = {
  selectedStars: 2,
};
SelectedDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const SelectedGreen = Template.bind({});
SelectedGreen.args = {
  selectedStars: 2,
};
SelectedGreen.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
