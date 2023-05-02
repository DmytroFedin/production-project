import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import AvatarImg from '../../../../shared/assets/tests/Avatar.jpg';
import { UserRole } from '@/entities/User';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 150 }}><Story /></div>,
  ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;
export const isAdmin = Template.bind({});
isAdmin.args = {};
isAdmin.decorators = [StoreDecorator({
  user: {
    authData: {
      avatar: AvatarImg,
      roles: [UserRole.ADMIN],
    },
  },
})];

export const isManager = Template.bind({});
isManager.args = {};
isManager.decorators = [StoreDecorator({
  user: {
    authData: {
      avatar: AvatarImg,
      roles: [UserRole.MANAGER],
    },
  },
}), ThemeDecorator(Theme.DARK)];

export const isUser = Template.bind({});
isUser.args = {};
isUser.decorators = [StoreDecorator({
  user: {
    authData: {
      avatar: AvatarImg,
      roles: [UserRole.USER],
    },
  },
}), ThemeDecorator(Theme.GREEN)];
