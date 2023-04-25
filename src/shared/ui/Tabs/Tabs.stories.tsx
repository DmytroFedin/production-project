import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Tabs } from './Tabs';
import { ArticleType } from '@/shared/const/article';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: ArticleType.ALL,
      content: 'All',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'Economics',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'Science',
    },
  ],
  value: ArticleType.ECONOMICS,
  onTabClick: action('onTabClick'),
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  tabs: [
    {
      value: ArticleType.ALL,
      content: 'All',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'Economics',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'Science',
    },
  ],
  value: ArticleType.ECONOMICS,
  onTabClick: action('onTabClick'),
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Green = Template.bind({});
Green.args = {
  tabs: [
    {
      value: ArticleType.ALL,
      content: 'All',
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'Economics',
    },
    {
      value: ArticleType.IT,
      content: 'IT',
    },
    {
      value: ArticleType.SCIENCE,
      content: 'Science',
    },
  ],
  value: ArticleType.ECONOMICS,
  onTabClick: action('onTabClick'),
};
Green.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
