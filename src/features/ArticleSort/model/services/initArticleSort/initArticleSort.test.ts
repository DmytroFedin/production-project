import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticleSort } from './initArticleSort';
import { ArticleView } from '@/shared/const/article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

describe('initArticleSort.test', () => {
  test('initArticleSort is inited', async () => {
    localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, ArticleView.LIST);
    const url = new URL('http://localhost:3000/articles?order=desc&sort=views&search=&type=ALL');
    const thunk = new TestAsyncThunk(initArticleSort, {
      articleSort: {
        _inited: true,
      },
    });
    await thunk.callThunk(url.searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  test('initArticleSort is not inited', async () => {
    const url = new URL('http://localhost:3000/articles?order=desc&sort=views&search=&type=ALL');
    const thunk = new TestAsyncThunk(initArticleSort, {
      articleSort: {
        _inited: false,
      },
    });
    await thunk.callThunk(url.searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(5);
  });
});
