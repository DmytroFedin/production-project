import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  userId: '1',
  createdAt: '26.02.2022',
  type: [
    'IT',
  ],
  blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/articles',
  headers: { authorisation: '111' },
  body: article ?? defaultArticle,
}).then((resp) => resp.body);

export const deleteArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: { authorisation: '111' },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      deleteArticle(articleId: string): Chainable<void>
    }
  }
}
