import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortField } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSort } from './ArticleSort';

export default {
  title: 'features/ArticleSort/ArticleSort',
  component: ArticleSort,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSort>;

const Template: ComponentStory<typeof ArticleSort> = (args) => <ArticleSort {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  sort: ArticleSortField.CREATED,
  order: 'asc',
  onChangeOrder(newOrder) {
  },
  onChangeSort(newSort) {
  },
};
Primary.decorators = [StoreDecorator({})];
