import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainIcon from '@/shared/assets/icons/main-20_20.svg';
import { SidebarItem } from './SidebarItem';

export default {
  title: 'widgets/Sidebar/SidebarItem',
  component: SidebarItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
  item: {
    Icon: MainIcon,
    path: '/',
    text: 'Main',
  },
};
Light.decorators = [StoreDecorator({
  user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.args = {
  item: {
    Icon: MainIcon,
    path: '/',
    text: 'Main',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} },
})];

export const Green = Template.bind({});
Green.args = {
  item: {
    Icon: MainIcon,
    path: '/',
    text: 'Main',
  },
};
Green.decorators = [ThemeDecorator(Theme.GREEN), StoreDecorator({
  user: { authData: {} },
})];
