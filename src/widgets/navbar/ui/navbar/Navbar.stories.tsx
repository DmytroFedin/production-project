import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  loginForm: {},
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: {},
})];

export const Green = Template.bind({});
Green.args = {};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
  loginForm: {},
})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      avatar: 'https://lirp.cdn-website.com/93aa737e/dms3rep/multi/opt/hacker-computer-systems-1920w.jpg',
    },
  },
})];

export const AdminNavbar = Template.bind({});
AdminNavbar.args = {};
AdminNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      roles: [UserRole.ADMIN],
      avatar: 'https://lirp.cdn-website.com/93aa737e/dms3rep/multi/opt/hacker-computer-systems-1920w.jpg',
    },
  },
})];
