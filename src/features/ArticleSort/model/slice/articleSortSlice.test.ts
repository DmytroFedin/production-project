import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortSchema } from '../types/articleSort';
import { ArticleSortActions, ArticleSortReducer } from './articleSortSlice';

describe('articleSortSlice.test', () => {
  test('test setSort', () => {
    const state: DeepPartial<ArticleSortSchema> = {
      sort: ArticleSortField.CREATED,
    };
    expect(ArticleSortReducer(
    state as ArticleSortSchema,
    ArticleSortActions.setSort(ArticleSortField.TITLE),
    )).toEqual({
      sort: ArticleSortField.TITLE,
    });
  });

  test('test setOrder', () => {
    const state: DeepPartial<ArticleSortSchema> = {
      order: 'asc',
    };
    expect(ArticleSortReducer(
    state as ArticleSortSchema,
    ArticleSortActions.setOrder('desc'),
    )).toEqual({
      order: 'desc',
    });
  });

  test('test setSearch', () => {
    const state: DeepPartial<ArticleSortSchema> = {
      search: '',
    };
    expect(ArticleSortReducer(
    state as ArticleSortSchema,
    ArticleSortActions.setSearch('test'),
    )).toEqual({
      search: 'test',
    });
  });

  test('test setType', () => {
    const state: DeepPartial<ArticleSortSchema> = {
      type: ArticleType.ECONOMICS,
    };
    expect(ArticleSortReducer(
    state as ArticleSortSchema,
    ArticleSortActions.setType(ArticleType.ALL),
    )).toEqual({
      type: ArticleType.ALL,
    });
  });

  test('test setView', () => {
    const state: DeepPartial<ArticleSortSchema> = {
      view: ArticleView.PLATE,
    };
    expect(ArticleSortReducer(
    state as ArticleSortSchema,
    ArticleSortActions.setView(ArticleView.LIST),
    )).toEqual({ view: ArticleView.LIST });
  });
});
