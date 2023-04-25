import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticlePageError, getArticlePageHasMore, getArticlePageInited, getArticlePageIsLoading, getArticlePageLimit, getArticlePageNumber,
} from './articlesPageSelectors';

describe('articlesPageSelectors.test', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlePageIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageIsLoading(state as StateSchema)).toEqual(false);
  });
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };
    expect(getArticlePageError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageError(state as StateSchema)).toEqual(undefined);
  });

  test('should return page', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
      },
    };
    expect(getArticlePageNumber(state as StateSchema)).toEqual(2);
  });
  test('should work with empty state number', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageNumber(state as StateSchema)).toEqual(1);
  });
  test('should return hasMore', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: false,
      },
    };
    expect(getArticlePageHasMore(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state hasMore', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageHasMore(state as StateSchema)).toEqual(undefined);
  });

  test('should return limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 5,
      },
    };
    expect(getArticlePageLimit(state as StateSchema)).toEqual(5);
  });
  test('should work with empty state limit', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageLimit(state as StateSchema)).toEqual(9);
  });
  test('should return inited', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: false,
      },
    };
    expect(getArticlePageInited(state as StateSchema)).toEqual(false);
  });
  test('should work with empty state inited', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlePageInited(state as StateSchema)).toEqual(undefined);
  });
});
