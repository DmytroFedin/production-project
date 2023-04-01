import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    reactRouter: {
      routePath: '/aricles/:id/edit',
      routeParams: { id: '1' },
    },
  },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;
export const Edit = Template.bind({});
Edit.args = {};
Edit.decorators = [StoreDecorator({})];

export const Create = Template.bind({});
Create.args = {};
Create.story = {
  parameters: {
    reactRouter: {
      routePath: '/aricles/create',
    },
  },
};
Create.decorators = [StoreDecorator({})];
