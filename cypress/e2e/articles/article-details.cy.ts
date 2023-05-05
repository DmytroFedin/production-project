let currentArticleId = '';

describe('user opens ArticleDetailsPage', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`/articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.deleteArticle(currentArticleId);
  });
  it('and sees article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('and sees articleRecomendationList', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('and leaves a comment', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddNewComment').scrollIntoView();
    cy.addComment('test');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('and leaves a rating', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true').should('have.length', 4);
  });
});
