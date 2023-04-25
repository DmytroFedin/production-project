import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
};
LightTheme.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
    },
  },
  articleDetails: {
    data: {
      user: {
        id: '1',
      },
    },
  },
})];

export const DarkTheme = Template.bind({});
DarkTheme.args = {
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      id: '1',
    },
  },
  articleDetails: {
    data: {
      user: {
        id: '1',
      },
    },
  },
})];

export const GreenTheme = Template.bind({});
GreenTheme.args = {
};
GreenTheme.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
  user: {
    authData: {
      id: '1',
    },
  },
  articleDetails: {
    data: {
      user: {
        id: '1',
      },
    },
  },
})];

export const notAuthor = Template.bind({});
notAuthor.args = {
};
notAuthor.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({

})];
