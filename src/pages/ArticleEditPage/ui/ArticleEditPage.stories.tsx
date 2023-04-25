import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
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

export const EditDarkTheme = Template.bind({});
EditDarkTheme.args = {};
EditDarkTheme.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const EditGreenTheme = Template.bind({});
EditGreenTheme.args = {};
EditGreenTheme.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];

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

export const CreateDark = Template.bind({});
CreateDark.args = {};
CreateDark.story = {
  parameters: {
    reactRouter: {
      routePath: '/aricles/create',
    },
  },
};
CreateDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const CreateGreen = Template.bind({});
CreateGreen.args = {};
CreateGreen.story = {
  parameters: {
    reactRouter: {
      routePath: '/aricles/create',
    },
  },
};
CreateGreen.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GREEN)];
