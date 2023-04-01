import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';

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
