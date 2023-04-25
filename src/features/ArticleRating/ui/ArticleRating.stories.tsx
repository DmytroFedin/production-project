import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';

const test = {
  userId: '1',
  articleId: '1',
  rate: 1,
  id: '1',
};

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  articleId: '1',
};
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        { ...test, id: '1' },
      ],
    },
  ],
};
Primary.decorators = [StoreDecorator({
})];

export const NoRate = Template.bind({});
NoRate.args = {
  articleId: '1',
};
NoRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 500,
      response: [
      ],
    },
  ],
};
NoRate.decorators = [StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
  articleId: '1',
};
isLoading.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      delay: 100000,
      response: [
      ],
    },
  ],
};
isLoading.decorators = [StoreDecorator({})];
