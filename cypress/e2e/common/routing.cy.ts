import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User authorized', () => {
    beforeEach(() => {
      cy.login();
    });
    it('open Profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('open Articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
  describe('User NOT authorized', () => {
    it('open Main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('open Profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('open random path', () => {
      cy.visit('/sdfsdfsd');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
});
