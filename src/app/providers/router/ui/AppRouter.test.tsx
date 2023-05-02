import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router', () => {
  test('page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const Page = await screen.findByTestId('AboutPage');
    expect(Page).toBeInTheDocument();
  });

  test('page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/dgdgfd',
    });
    const Page = await screen.findByTestId('NotFoundPage');
    expect(Page).toBeInTheDocument();
  });

  test('redirect of the authorized user to main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const Page = await screen.findByTestId('MainPage');
    expect(Page).toBeInTheDocument();
  });

  test('authorized user access to restricted page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          mounted: true,
          authData: {},
        },
      },
    });
    const Page = await screen.findByTestId('ProfilePage');
    expect(Page).toBeInTheDocument();
  });

  test('Access denied (do not have rights, role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          mounted: true,
          authData: {},
        },
      },
    });
    const Page = await screen.findByTestId('ForbiddenPage');
    expect(Page).toBeInTheDocument();
  });

  test('Access granted (have rights, role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          mounted: true,
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });
    const Page = await screen.findByTestId('AdminPanelPage');
    expect(Page).toBeInTheDocument();
  });
});
