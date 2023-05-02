import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleFilters } from './ArticleFilters';

export default {
  title: 'pages/ArticlesPage/ArticleFilters',
  component: ArticleFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleFilters>;

const Template: ComponentStory<typeof ArticleFilters> = (args) => <ArticleFilters {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
