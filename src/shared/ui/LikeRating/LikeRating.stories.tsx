import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LikeRating } from './LikeRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/LikeRating',
  component: LikeRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LikeRating>;

const Template: ComponentStory<typeof LikeRating> = (args) => <LikeRating {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
