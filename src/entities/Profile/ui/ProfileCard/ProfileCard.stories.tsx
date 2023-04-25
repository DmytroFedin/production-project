import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/Avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstname: 'fgfg',
    age: 22,
    city: 'Poltava',
    country: Country.Ukraine,
    currency: Currency.UAH,
    lastname: 'ggg',
    username: 'ggg',
    avatar,
  },
};
Primary.decorators = [StoreDecorator({})];

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};
withError.decorators = [StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
isLoading.decorators = [StoreDecorator({})];
