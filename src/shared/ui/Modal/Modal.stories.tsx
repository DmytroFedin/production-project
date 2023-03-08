import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'text',
  delay: 0,
};
Primary.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'text',
  delay: 0,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
