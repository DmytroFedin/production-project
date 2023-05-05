describe('User opens articlesPage', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('/articles');
    });
  });

  it('article list is showed', () => {
    cy.getByTestId('ArticlesList').should('exist');
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
  });
});
