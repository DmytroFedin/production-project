import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlePage } from './initArticlePage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage.test', () => {
  test('initArticlePage is inited', async () => {
    const thunk = new TestAsyncThunk(initArticlePage);
    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled();
  });
});
