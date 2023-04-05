import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {
};
LightTheme.decorators = [StoreDecorator({
  profile: {
    form: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
  },
})];

export const DarkTheme = Template.bind({});
DarkTheme.args = {
};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
  },
})];

export const GreenTheme = Template.bind({});
GreenTheme.args = {
};
GreenTheme.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
  profile: {
    form: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
  },
})];
