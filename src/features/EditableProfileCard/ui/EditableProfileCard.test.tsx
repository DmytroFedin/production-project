import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Germany,
  city: 'Moscow',
  username: 'admin213',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1" />, options);
  });
  test('readonly switcher', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
  });

  test('cancel btn should return initial values', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'ac');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'abc');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('ac');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('abc');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  test('should return error', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('should be succesive put request', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
