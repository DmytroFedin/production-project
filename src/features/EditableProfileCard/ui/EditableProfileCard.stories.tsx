import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { EditableProfileCard } from './EditableProfileCard';
import { ValidateProfileErrors } from '../model/const/const';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
  },
})];

export const ServerError = Template.bind({});
ServerError.args = {
};
ServerError.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.SERVER_ERROR],
  },
})];

export const AgeError = Template.bind({});
AgeError.args = {};
AgeError.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.INCORRECT_USER_AGE],
  },
})];

export const CountryError = Template.bind({});
CountryError.args = {};
CountryError.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.INCORRECT_USER_COUNTRY],
  },
})];

export const UserError = Template.bind({});
UserError.args = {};
UserError.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.INCORRECT_USER_DATA],
  },
})];

export const NoDataError = Template.bind({});
NoDataError.args = {};
NoDataError.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.NO_DATA],
  },
})];

export const SeveralErrors = Template.bind({});
SeveralErrors.args = {};
SeveralErrors.decorators = [StoreDecorator({
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
    data: {
      firstname: 'fgfg',
      age: 22,
      city: 'Poltava',
      country: Country.Ukraine,
      currency: Currency.UAH,
      lastname: 'ggg',
      username: 'ggg',
    },
    readonly: true,
    validateErrors: [ValidateProfileErrors.NO_DATA, ValidateProfileErrors.INCORRECT_USER_AGE],
  },
})];
