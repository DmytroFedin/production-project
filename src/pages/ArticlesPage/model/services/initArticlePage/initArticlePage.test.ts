import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlePage } from './initArticlePage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage.test', () => {
  const url = new URL('http://localhost:3000/articles?order=desc&sort=views&search=&type=ALL');
  test('initArticlePage is inited', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        _inited: true,
      },
    });
    await thunk.callThunk(url.searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('initArticlePage not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlePage, {
      articlesPage: {
        _inited: false,
      },
    });
    await thunk.callThunk(url.searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(6);
    expect(fetchArticlesList).toHaveBeenCalled();
  });
});
