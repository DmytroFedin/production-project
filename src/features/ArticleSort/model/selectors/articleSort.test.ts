import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import {
  getArticleOrder, getArticleSearch, getArticleSort, getArticleType, getArticleView,
} from './articleSort';

describe('articleSort.test', () => {
  test('should return sort', () => {
    const state: DeepPartial<StateSchema> = {
      articleSort: {
        sort: ArticleSortField.TITLE,
      },
    };
    expect(getArticleSort(state as StateSchema)).toEqual(ArticleSortField.TITLE);
  });

  test('sort should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getArticleSort(state as StateSchema)).toEqual(ArticleSortField.CREATED);
  });

  test('should return order', () => {
    const state: DeepPartial<StateSchema> = {
      articleSort: {
        order: 'desc',
      },
    };
    expect(getArticleOrder(state as StateSchema)).toEqual('desc');
  });

  test('order should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getArticleOrder(state as StateSchema)).toEqual('asc');
  });

  test('should return search', () => {
    const state: DeepPartial<StateSchema> = {
      articleSort: {
        search: 'test',
      },
    };
    expect(getArticleSearch(state as StateSchema)).toEqual('test');
  });

  test('search should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getArticleSearch(state as StateSchema)).toEqual('');
  });

  test('should return view', () => {
    const state: DeepPartial<StateSchema> = {
      articleSort: {
        view: ArticleView.PLATE,
      },
    };
    expect(getArticleView(state as StateSchema)).toEqual(ArticleView.PLATE);
  });

  test('view should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getArticleView(state as StateSchema)).toEqual(ArticleView.LIST);
  });

  test('should return type', () => {
    const state: DeepPartial<StateSchema> = {
      articleSort: {
        type: ArticleType.IT,
      },
    };
    expect(getArticleType(state as StateSchema)).toEqual(ArticleType.IT);
  });

  test('type should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    };
    expect(getArticleType(state as StateSchema)).toEqual(ArticleType.ALL);
  });
});
