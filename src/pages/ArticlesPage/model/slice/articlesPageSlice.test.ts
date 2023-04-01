import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { ArticlePageActions, ArticlePageReducer } from './ArticlesPageSlice';

describe('articlesPageSlice.test', () => {
  test('test setPage', () => {
    const state: DeepPartial<ArticlesPageSchema> = {

    };
    expect(ArticlePageReducer(
    state as ArticlesPageSchema,
    ArticlePageActions.setPage(2),
    )).toEqual({ page: 2 });
  });

  test('test initState', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
    };
    expect(ArticlePageReducer(
    state as ArticlesPageSchema,
    ArticlePageActions.initState(),
    )).toEqual({ _inited: true });
  });
});
