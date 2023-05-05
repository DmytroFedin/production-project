export const addComment = (text?: string) => {
  cy.getByTestId('AddNewComment.Input').type('test');
  cy.getByTestId('AddNewComment.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}
