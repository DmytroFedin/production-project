import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Test } from './Test';

export default {
  title: 'entitites/Test',
  component: Test,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
