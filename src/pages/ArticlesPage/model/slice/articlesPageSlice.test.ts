import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { ArticlesPageActions, ArticlesPageReducer } from './articlesPageSlice';

describe('articlesPageSlice.test', () => {
  test('test setPage', () => {
    const state: DeepPartial<ArticlesPageSchema> = {

    };
    expect(ArticlesPageReducer(
    state as ArticlesPageSchema,
    ArticlesPageActions.setPage(2),
    )).toEqual({ page: 2 });
  });

  test('test initState', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
    };
    expect(ArticlesPageReducer(
    state as ArticlesPageSchema,
    ArticlesPageActions.initState(),
    )).toEqual({ limit: 10 });
  });
});
